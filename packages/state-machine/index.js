import { Machine } from "xstate";

export const clockMachine = Machine({
  id: "alarm-clock",
  initial: "showClock",
  states: {
    showClock: {}
  },
});
