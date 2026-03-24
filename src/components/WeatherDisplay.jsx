import { useState, useEffect } from "react";
import axios from "axios";

export function WeatherDisplay({ value }) {

  const [weather, setWeather] = useState(null);

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
        DoN: response.data.weather[0].icon
      });
    };

    fetchWeather();
  }, [value]);

  if (!weather) {
    return (
      <div className="flex flex-row justify-between items-center bg-olive-50 p-4 w-full rounded-2xl shadow-sm bg-[radial-gradient(circle,#e6efff_1%,transparent_30%,#FAFAFA)] hover:shadow-lg transition-all duration-300 ease-in-out animate-pulse">
        <div className="flex flex-col items-start">
          <div className="bg-[#1d293d64] mb-2 w-18 h-5 rounded-lg" />

          <div className="mb-5 bg-[#1d293d64] w-5 h-4 rounded-lg" />

          <div className="text-4xl bg-[#1d293d64] w-25 h-9 mt-1 rounded-lg" />

          <div className="text-sm mt-2 bg-[#1d293d64] h-4 w-10 rounded-lg -mb-1" />

        </div>

        <div className="bg-[#1d293d64] w-17 h-15 rounded-lg" />

      </div>
    );
  };

  const checkDoN = weather.DoN.includes("d") ? "day" : "night";

  return (
    <div className="flex flex-row justify-between items-center bg-olive-50 p-4 w-full rounded-2xl shadow-sm bg-[radial-gradient(circle,#e6efff_1%,transparent_30%,#FAFAFA)] hover:shadow-lg transition-all duration-300 ease-in-out">
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

      <img src={`../../public/${weather.main}-${checkDoN}.svg`} className="h-20" />
    </div>
  )
};