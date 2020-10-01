import React from "react";

const WeatherFailed = ({ send }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <p className="mb-4">Can't fetch the weather</p>
      <div>
        <button onClick={() => send('RETRY')} className="py-2 px-3 rounded-l border-2 border-white font-bold text-white hover:bg-white hover:text-gray-800">
          Try again
        </button>
        <button onClick={() => send('SELECT_OTHER_CITY')} className="py-2 px-3 rounded-r border-2 border-white font-bold text-white hover:bg-white hover:text-gray-800">
          Try other city
        </button>
      </div>
    </div>
  );
};

export default WeatherFailed;
