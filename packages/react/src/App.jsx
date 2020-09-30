import React from "react";
import Clock from "./Compontents/Clock";
import Weather from "./Compontents/Weather/Weather";
import Alarms from "./Compontents/Alarms";
import { useMachine } from "@xstate/react";
import { clockMachine } from "@fsm/state-machine";

const clockMachineWithContext = clockMachine.withContext({
  openWeatherAPIKey: process.env.REACT_APP_OPENWEATHER_API,
  alarms: [],
});

function App() {
  const [state, send] = useMachine(clockMachineWithContext, { devTools: true });
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
          <Clock state={state} send={send} />
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
  return null;
}

export default App;
