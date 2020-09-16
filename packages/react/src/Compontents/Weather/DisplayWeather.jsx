import React from "react";
import WeatherIcon from "./WeatherIcons/WeatherIcon";

const DisplayWeather = ({ weather }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex">
        <WeatherIcon type={weather.weather && weather.weather[0].main} />
        <div className="w-full md:w-1/2 flex flex-col pl-8 justify-center">
          <h1 className="text-4xl font-bold">
            {Math.round(weather.main.temp)}{" "}
            °C
          </h1>
          <h6 className="whitespace-no-wrap">{weather.name}</h6>
        </div>
      </div>
    </div>
  );
};

export default DisplayWeather;
