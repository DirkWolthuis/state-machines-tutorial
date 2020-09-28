import React from "react";

const dateTimeFormat = new Intl.DateTimeFormat("nl", {
  hour: "numeric",
  minute: "numeric",
  //second: "numeric",
});

const Clock = ({ state }) => {
  if (state.matches("showClock")) {
    return (
      <div className="flex justify-center items-center h-full">
        <h1 className="text-6xl font-mono">
          {dateTimeFormat.format(state.context.time)}
        </h1>
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
