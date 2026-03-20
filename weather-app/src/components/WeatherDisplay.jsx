import { useState, useEffect } from "react";
import axios from "axios";

export function WeatherDisplay({ value }) {

  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function fetchWeather() {
      const api = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=73699f033e2804828b5eb9c6d5a17da4&units=metric`

      const response = await axios.get(api);

      setWeather({
        temperature: response.data.main.temp,
        name: response.data.name,
        country: response.data.sys.country,
        description: response.data.weather[0].description,
        main: response.data.weather[0].main,
      });
    };

    fetchWeather();
  }, [value]);

  if(!weather) {
    return(
      <span className="text-4xl text-[#1D293D]">
        Loading...
      </span>
    )
  };

  return (
    <div className="flex flex-row justify-between items-center bg-olive-50 p-4 w-full rounded shadow-sm bg-[radial-gradient(circle,#D7DFFF_1%,transparent_30%,#FAFAFA)] hover:shadow-lg transition-all duration-300 ease-in-out">
      <div className="flex flex-col items-start">
        <span className="font-bold text-[#1D293D]">
          {weather.name}
        </span>
        <span className="text-sm mb-5 text-[#1D293D]">
          {weather.country}
        </span>
        <span className="text-4xl text-[#1D293D]">
          {weather.temperature}°c
        </span>
        <span className="text-sm text-[#1D293D]">
          {weather.description}
        </span>
      </div>

      <img src={`../../public/${weather.main}.svg`} className="h-20" />
    </div>
  )
};