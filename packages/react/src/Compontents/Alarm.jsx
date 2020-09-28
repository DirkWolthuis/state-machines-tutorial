import React from "react";
import { useActor } from "@xstate/react";

const dateTimeFormat = new Intl.DateTimeFormat("nl", {
  hour: "numeric",
  minute: "numeric",
  //second: "numeric",
});
const Alarm = ({ alarm }) => {
  const [state, send] = useActor(alarm);

  return (
    <div className="w-full flex justify-between items-center p-8">
      <div>
        <small>alarm set for:</small>
        <h1 className="font-mono text-4xl">
          {dateTimeFormat.format(state.context.timeToRing)}
        </h1>
      </div>

      <div>
        <button onClick={() => send('CANCEL_ALARM')} className="py-2 px-3 rounded border-2 border-white font-bold text-white hover:bg-white hover:text-gray-800">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Alarm;
