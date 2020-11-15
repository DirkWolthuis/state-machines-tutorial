import React from "react";
import { useActor } from "@xstate/react";

const dateTimeFormat = new Intl.DateTimeFormat("nl", {
  hour: "numeric",
  minute: "numeric",
});
const Alarm = ({ alarm }) => {
  const [state, send] = useActor(alarm);

  return (
    <div className="w-full flex justify-between items-center p-8">
      <div>
        <small>alarm set for:</small>
        <h1 className="font-mono text-4xl flex items-center">
          {dateTimeFormat.format(state.context.timeToRing)}{" "}
          <small className="ml-4 bg-white text-gray-900 rounded p-2 text-sm">
            {isToday(state.context.timeToRing) ? "today" : "tomorrow"}
          </small>
        </h1>
      </div>

      <div>
        <button
          onClick={() => send({ type: "CANCEL_ALARM", payload: alarm.id })}
          className="py-2 px-3 rounded border-2 border-white font-bold text-white hover:bg-white hover:text-gray-800"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Alarm;

const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};
