import React from "react";
import WeatherIcon from "./WeatherIcons/WeatherIcon";

const Weather = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex">
        <WeatherIcon type="windy" />
        <div className="w-full md:w-1/2 flex flex-col pl-8 justify-center">
          <h1 className="text-4xl font-bold">21 °C</h1>
          <h6 className="whitespace-no-wrap">Utrecht, Netherlands</h6>
        </div>
      </div>
    </div>
  );
};

export default Weather;
