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

export const fetchMachine = Machine({
  id: "alarm-clock",

  context: {
    weather: "",
  },

  initial: "showClock",
  states: {
    showClock: {
      type: "parallel",
      activities: ['timeIncrement'],
      on: {
        START_RINGING: {
          target: "ringing",
        },
      },
      states: {
        weather: {
          initial: "idle",
          states: {
            idle: {
              on: {
                "": [
                  { target: "show", cond: () => false },
                  { target: "loading" },
                ],
              },
            },
            loading: {
              invoke: {
                id: "getWeather",
                src: (context, event) => apiCall(),
                onDone: {
                  target: "show",
                },
                onError: {
                  target: "failure",
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
}, {
   activities: {
      timeIncrement: (context, activity) => {
        // Start the beeping activity
        const timeInterval = setInterval(() => assign({
          time: new Date()
        }), 1000);

        // Return a function that stops the beeping activity
        return () => clearInterval(timeInterval);
      }
    }
});

const apiCall = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve("value"), 2000));
