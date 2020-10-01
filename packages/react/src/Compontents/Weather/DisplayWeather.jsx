import React from "react";
import WeatherIcon from "./WeatherIcons/WeatherIcon";

const DisplayWeather = ({ weather, send }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex items-center">
        <WeatherIcon type={weather.weather && weather.weather[0].main} />
        <div className="w-full md:w-1/2 flex flex-col pl-8 justify-center">
          <h1 className="text-4xl font-bold">
            {Math.round(weather.main.temp)} °C
          </h1>
          <h6 className="whitespace-no-wrap">{weather.name}</h6>
        </div>
        <div className="pl-4 w-10 h-10">
          <svg onClick={() => send('REFRESH')} viewBox="0 0 65 65">
            <g id="Layer_3_copy_2">
              <g fill="white">
                <path d="m32.5 4.999c-5.405 0-10.444 1.577-14.699 4.282l-5.75-5.75v16.11h16.11l-6.395-6.395c3.18-1.787 6.834-2.82 10.734-2.82 12.171 0 22.073 9.902 22.073 22.074 0 2.899-0.577 5.664-1.599 8.202l4.738 2.762c1.47-3.363 2.288-7.068 2.288-10.964 0-15.164-12.337-27.501-27.5-27.501z" />
                <path d="m43.227 51.746c-3.179 1.786-6.826 2.827-10.726 2.827-12.171 0-22.073-9.902-22.073-22.073 0-2.739 0.524-5.35 1.439-7.771l-4.731-2.851c-1.375 3.271-2.136 6.858-2.136 10.622 0 15.164 12.336 27.5 27.5 27.5 5.406 0 10.434-1.584 14.691-4.289l5.758 5.759v-16.112h-16.111l6.389 6.388z" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DisplayWeather;
