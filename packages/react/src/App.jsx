import React from "react";
import Clock from "./Compontents/Clock";
import Weather from "./Compontents/Weather";
import Alarms from "./Compontents/Alarms";

function App() {
 
  return (
    <div className="w-screen h-screen flex flex-wrap bg-gray-900 text-white">
      <div className="w-full md:w-1/2">
        <Clock />
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="h-full">
          <Weather />
        </div>
        <div className="h-full">
          <Alarms alarms={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
