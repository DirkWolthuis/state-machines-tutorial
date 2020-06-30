import React from "react";
import Alarm from "./Alarm";

const Alarms = ({ alarm }) => {
  if (!alarm) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <p className="mb-4">No alarms set yet.</p>
        <button className="py-2 px-3 rounded border-2 border-white font-bold text-white hover:bg-white hover:text-gray-800">
          Add alarm +
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-full w-full p-8">
      <Alarm />
    </div>
  );
};

export default Alarms;
