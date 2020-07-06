import React from "react";
import DisplayWeather from "./DisplayWeather";
import SelectWeatherCity from "./SelectWeatherCity";
import WeatherLoading from "./WeatherLoading";

const Weather = ({ state }) => {
  if (state.matches("showClock.weather.loading")) {
    return <WeatherLoading />;
  }
  if (state.matches("showClock.weather.show")) {
    return <DisplayWeather />;
  }
  if (state.matches("showClock.weather.failure")) {
    return <p>no weather</p>;
  }
  if (state.matches("showClock.weather.select")) {
    return <SelectWeatherCity />;
  }
  return null;
};

export default Weather;
