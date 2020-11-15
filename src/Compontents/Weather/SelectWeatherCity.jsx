import React from "react";
import { useState } from "react";

const SelectWeatherCity = ({ onSelectCity }) => {
  const [city, setCity] = useState("");
  return (
    <div className="flex justify-center items-center h-full">
      <input
        autoFocus
        onKeyUp={(e) => {
          e.keyCode === 13 && onSelectCity(city);
        }}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="enter city"
        className="py-2 px-3 border-2 border-white rounded bg-transparent mr-4"
      />
      <button
        onClick={() => {
          onSelectCity(city);
        }}
        className="py-2 px-3 rounded border-2 border-white font-bold text-white hover:bg-white hover:text-gray-800"
      >
        Select city
      </button>
    </div>
  );
};

export default SelectWeatherCity;
