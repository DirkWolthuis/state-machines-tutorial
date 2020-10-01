import React, { useEffect, useState } from "react";
import Clock from "./Compontents/Clock";
import { clockMachine } from "@fsm/state-machine";

function App() {
  const [machineWithContext, setMachineWithContext] = useState();

  useEffect(() => {
    const restoredContext = localStorage.getItem("state-machine");
    
    if (restoredContext) {
      const parsedContext = JSON.parse(restoredContext);
      setMachineWithContext(
        clockMachine.withContext({
          ...parsedContext,
          //alarms: parsedContext.alarms.map(alarm => ({...alarm, }))
          time: new Date(parsedContext.time),
          openWeatherAPIKey: process.env.REACT_APP_OPENWEATHER_API,
        })
      );
    } else {
      setMachineWithContext(
        clockMachine.withContext({
          openWeatherAPIKey: process.env.REACT_APP_OPENWEATHER_API,
          alarms: [],
        })
      );
    }
  }, []);

  if (machineWithContext) {
    return <Clock machine={machineWithContext} />;
  } else {
    return null;
  }
}

export default App;
