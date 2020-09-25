import React from "react";
import DisplayWeather from "./DisplayWeather";
import SelectWeatherCity from "./SelectWeatherCity";
import WeatherLoading from "./WeatherLoading";

const Weather = ({ state, send }) => {

  const onSelectCity = (city) => {
    send({ type: "SELECT_CITY", payload: city });
  };

  if (state.matches("showClock.weather.loading")) {
    return <WeatherLoading />;
  }
  if (state.matches("showClock.weather.failure")) {
    return <p>API CALL FAILED</p>;
  }
  if (state.matches("showClock.weather.show")) {
    return <DisplayWeather weather={state.context.weather} />;
  }
  if (state.matches("showClock.weather.select")) {
    return <SelectWeatherCity onSelectCity={onSelectCity} />;
  }
  return null;
};

export default Weather;
