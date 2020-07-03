import React, { useEffect, useState } from "react";

const dateTimeFormat = new Intl.DateTimeFormat("nl", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

const Clock = ({ state }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  if (state.matches("showClock")) {
    return (
      <div className="flex justify-center items-center h-full">
        <h1 className="text-6xl font-mono">{dateTimeFormat.format(time)}</h1>
      </div>
    );
  }
  if (state.matches("ringing")) {
    return (
      <div className="flex justify-center items-center h-full">
        <h1 className="text-6xl font-mono">RINGING</h1>
      </div>
    );
  } else {
    return null;
  }
};

export default Clock;
