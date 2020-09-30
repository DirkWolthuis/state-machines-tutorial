import { Machine, assign, spawn, sendParent } from "xstate";
import { v4 as uuidv4 } from "uuid";

export const alarmMachine = Machine({
  id: "alarm",
  initial: "active",
  context: {},
  states: {
    active: {
      invoke: {
        src: (context) => (sendBack) => {
          const interval = setInterval(() => {
            if (
              new Date().getHours() === context.timeToRing.getHours() &&
              new Date().getMinutes() === context.timeToRing.getMinutes()
            ) {
              sendBack("START_RINGING");
            }
          }, 1000);
          return () => clearInterval(interval);
        },
      },
      on: {
        CANCEL_ALARM: {
          target: "finished",
          actions: sendParent((context, event) => ({
            type: "DELETE_ALARM",
            payload: event.payload,
          })),
        },
        START_RINGING: {
          actions: [
            sendParent((context, event) => ({
              type: "DELETE_ALARM",
              payload: context.id,
            })),
            sendParent("START_RINGING"),
          ],
          target: "finished",
        },
      },
    },
    finished: {
      type: "final",
    },
  },
});

export const clockMachine = Machine({
  id: "alarm-clock",
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
                ADD_ALARM: {
                  target: "addAlarm",
                },
                DELETE_ALARM: {
                  actions: assign({
                    alarms: (context, event) =>
                      context.alarms.filter((a) => a.id !== event.payload),
                  }),
                },
              },
            },
            addAlarm: {
              on: {
                SET_ALARM: {
                  actions: assign({
                    alarms: (context, event) => {
                      const id = uuidv4();
                      return [
                        ...context.alarms,
                        spawn(
                          alarmMachine.withContext({
                            id: id,
                            timeToRing: createTimeToRingDate(
                              context.time,
                              event.payload.hours,
                              event.payload.minutes
                            ),
                          }),
                          id
                        ),
                      ];
                    },
                  }),
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
  )
    .then(handleErrors)
    .then((response) => response.json());

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const createTimeToRingDate = (currentDate, hours, minutes) => {
  if (
    currentDate.getHours() > hours ||
    (currentDate.getHours() === hours && currentDate.getMinutes() >= minutes)
  ) {
    const timeToRing = new Date();
    timeToRing.setDate(timeToRing.getDate() + 1);
    timeToRing.setHours(hours);
    timeToRing.setMinutes(minutes);
    timeToRing.setSeconds(0);
    return timeToRing;
  } else {
    const timeToRing = new Date();
    timeToRing.setHours(hours);
    timeToRing.setMinutes(minutes);
    timeToRing.setSeconds(0);
    return timeToRing;
  }
};
