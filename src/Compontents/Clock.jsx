import { clockMachine } from "../state-machine";
import { useMachine } from "@xstate/react";
import React, { useEffect } from "react";
import Alarms from "./Alarms";
import Weather from "./Weather/Weather";

const dateTimeFormat = new Intl.DateTimeFormat("nl", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

const machineWithContext = clockMachine.withContext({
  openWeatherAPIKey: process.env.REACT_APP_OPENWEATHER_API,
  alarms: [],
});

const Clock = () => {
  const [state, send] = useMachine(machineWithContext, { devTools: true });

  useEffect(() => {
    //save these events to local storage and replay them.
  }, [state.transitions]);

  if (state.matches("ringing")) {
    return (
      <div className="w-screen h-screen flex flex-wrap bg-gray-900 text-white">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <h1 className="text-6xl font-mono mb-4">RINGING</h1>
          <button
            onClick={() => send("STOP_RINGING")}
            className="py-2 px-3 text-3xl rounded border-2 border-white font-bold text-white hover:bg-white hover:text-gray-800"
          >
            STOP
          </button>
        </div>
      </div>
    );
  }
  if (state.matches("showClock")) {
    return (
      <div className="w-screen h-screen flex flex-wrap bg-gray-900 text-white">
        <div className="w-full md:w-1/2">
          <div className="flex justify-center items-center h-full">
            <h1 className="text-6xl font-mono">
              {dateTimeFormat.format(state.context.time)}
            </h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="h-full">
            <Weather state={state} send={send} />
          </div>
          <div className="h-full">
            <Alarms state={state} send={send} />
          </div>
        </div>
      </div>
    );
  }
};

export default Clock;
