import React, { useEffect, useState } from "react";
import { State } from "xstate";
import Clock from "./Compontents/Clock";

function App() {
  const [restoredState, setRestoredState] = useState();

  useEffect(() => {
    const restoredStateJson = localStorage.getItem("state-machine");

    try {
      setRestoredState(State.create(JSON.parse(restoredStateJson)));
    } catch (e) {}
  }, []);

  return <Clock restoredState={restoredState} />;
}

export default App;
