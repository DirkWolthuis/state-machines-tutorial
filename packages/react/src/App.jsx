import React from "react";
import Clock from "./Compontents/Clock";
import Weather from "./Compontents/Weather/Weather";
import Alarms from "./Compontents/Alarms";
import { useMachine } from "@xstate/react";
import { clockMachine } from "@fsm/state-machine";

function App() {

  const [state, send] = useMachine(clockMachine.withContext({openWeatherAPIKey: process.env.REACT_APP_OPENWEATHER_API, city: 
  'Utrecht'})
  );
    
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
          <Alarms state={state} send={send} alarms={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
