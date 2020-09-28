import React from "react";
import { useService, useActor } from "@xstate/react";
const Alarm = (alarm) => {
  const x = useService(alarm);

  return (
    <div className="w-full flex justify-between items-center p-8">
      <div>
        <small>alarm set for:</small>
        <h1 className="font-mono text-4xl">21:00</h1>
      </div>

      <div>
        <button className="py-2 px-3 rounded border-2 border-white font-bold text-white hover:bg-white hover:text-gray-800">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Alarm;
