import React, { useState } from "react";
import Alarm from "./Alarm";

const Alarms = ({ state, send }) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const onSetAlarm = () => {
    send({ type: "SET_ALARM", payload: { hours, minutes } });
    setHours("");
    setMinutes("");
  };
  if (state.matches("showClock.alarm.idle")) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        {state.context.alarms?.length === 0 ? (
          <p className="mb-4">No alarms set yet.</p>
        ) : (
          state.context.alarms.map((alarm) => <Alarm key={alarm.id} alarm={alarm} />)
        )}
        <button
          onClick={() => send({ type: "ADD_ALARM" })}
          className="py-2 px-3 rounded border-2 border-white font-bold text-white hover:bg-white hover:text-gray-800"
        >
          Add alarm +
        </button>
      </div>
    );
  }
  if (state.matches("showClock.alarm.addAlarm")) {
    return (
      <div className="flex justify-center items-center h-full w-full p-8">
        <input
          max="23"
          autoFocus
          value={hours}
          onChange={(e) => {
            setHours(e.target.value);
          }}
          type="number"
          placeholder="enter hours"
          className="py-2 px-3 border-2 border-white rounded bg-transparent mr-4"
        />
        <input
          max="59"
          autoFocus
          value={minutes}
          onChange={(e) => {
            setMinutes(e.target.value);
          }}
          type="number"
          placeholder="enter minutes"
          className="py-2 px-3 border-2 border-white rounded bg-transparent mr-4"
        />
        <button
          onClick={onSetAlarm}
          className="py-2 px-3 rounded border-2 border-white font-bold text-white hover:bg-white hover:text-gray-800"
        >
          Set alarm
        </button>
      </div>
    );
  }
  return null;
};

export default Alarms;
