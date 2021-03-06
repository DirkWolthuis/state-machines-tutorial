import React from "react";
import DisplayWeather from "./DisplayWeather";
import SelectWeatherCity from "./SelectWeatherCity";
import WeatherFailed from "./WeatherFailed";
import WeatherLoading from "./WeatherLoading";

const Weather = ({ state, send }) => {

  const onSelectCity = (city) => {
    send({ type: "SELECT_CITY", payload: city });
  };

  if (state.matches("showClock.weather.loading")) {
    return <WeatherLoading />;
  }
  if (state.matches("showClock.weather.failure")) {
    return <WeatherFailed send={send} />;
  }
  if (state.matches("showClock.weather.show")) {
    return <DisplayWeather send={send} weather={state.context.weather} />;
  }
  if (state.matches("showClock.weather.select")) {
    return <SelectWeatherCity onSelectCity={onSelectCity} />;
  }
  return null;
};

export default Weather;
