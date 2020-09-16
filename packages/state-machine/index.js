import { Machine, assign } from "xstate";

export const alarmMachine = Machine({
  id: "alarm",
  initial: "active",
  context: {
    timeToRing: null,
  },
  states: {
    active: {},
    finished: { type: "final" },
  },
});

export const clockMachine = Machine({
  id: "alarm-clock",
  context: {
    openWeatherAPIKey: null,
  },

  initial: "showClock",
  states: {
    showClock: {
      invoke: {
        src: () => (sendBack) => {
          const interval = setInterval(() => {
            sendBack("UPDATE_TIME");
          }, 1000);
          return () => clearInterval(interval);
        },
      },
      type: "parallel",
      on: {
        UPDATE_TIME: { actions: assign({ time: () => new Date() }) },
        START_RINGING: {
          target: "ringing",
        },
      },
      states: {
        weather: {
          initial: "idle",
          states: {
            idle: {
              always: [
                { target: "show", cond: (context) => context.weather },
                {
                  target: "loading",
                  cond: (context) => context.weather_city,
                },
                { target: "select" },
              ],
            },
            loading: {
              invoke: {
                id: "getWeather",
                src: (context, event) =>
                  fetchWeather(context.city, context.openWeatherAPIKey),
                onDone: {
                  actions: assign({ weather: (context, event) => event.data }),
                  target: "show",
                },
                onError: {
                  target: "failure",
                },
              },
            },
            select: {
              on: {
                SELECT_CITY: {
                  actions: assign({
                    city: (context, event) => event.payload,
                  }),
                  target: "loading",
                },
              },
            },
            show: {
              on: {
                REFRESH: {
                  target: "loading",
                },
              },
            },
            failure: {
              on: {
                RETRY: {
                  target: "loading",
                },
              },
            },
          },
        },
        alarm: {
          initial: "idle",
          states: {
            idle: {
              on: {
                SET_ALARM: {
                  target: "setAlarm",
                },
              },
            },
            setAlarm: {
              on: {
                CREATE_ALARM: {
                  invoke: {
                    src: alarmMachine,

                    data: {
                      timeToRing: (context, event) => event.payload,
                    },
                  },
                  target: "idle",
                },
              },
            },
          },
        },
      },
    },

    ringing: {
      on: {
        STOP_RINGING: {
          target: "showClock",
        },
      },
    },
  },
});

const fetchWeather = (city, apiKey) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  ).then((response) => response.json());
