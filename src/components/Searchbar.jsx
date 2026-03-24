import axios from "axios";
import { useState } from "react";




export function Searchbar({ onSearch, darkmode }) {
  const [value, setValue] = useState("");

  function saveInputText(event) {
    const newValue = event.target.value;

    setValue(newValue);
    onSearch(newValue);
  };

  const savedHistory = JSON.parse(localStorage.getItem("history")) || [];

  function newHistory() {
    const normalizedValue = value.trim().toLowerCase();

    const filteredHistory = savedHistory.filter((item) => { return (item.toLowerCase() !== normalizedValue) });

    const updatedHistory = [normalizedValue, ...filteredHistory];

    localStorage.setItem("history", JSON.stringify(updatedHistory));
  }

  function enterEventListener(event) {
    if (event.key === "Enter") {
      searchWeatherFull();
    }
  }
  // Set weather variable to store JSON ddetails
  const [weather, setWeather] = useState(null);

  async function searchWeatherFull() {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=73699f033e2804828b5eb9c6d5a17da4&units=metric`

    const response = await axios.get(api);

    const newWeather = {
      temperature: response.data.main.temp,
      name: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      main: response.data.weather[0].main,
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
      icon: response.data.weather[0].icon,
    };

    onSearch(value);
    setWeather(newWeather);
    newHistory();
  }


  if (darkmode) {
    return (
      <div className="flex relative items-center w-full">
        <input className="px-12 text-olive-50 py-3 w-full bg-[#1D293D] border border-olive-50 rounded-[50px]
        outline-none"
          placeholder="Search by city..."
          onChange={saveInputText}
          onKeyDown=
          {enterEventListener}
        />
        <img className="peer absolute h-8 right-2 bg-[#303947] z-10 rounded-full p-1 hover:shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out " src="/search-icon-white.svg" onClick={searchWeatherFull} />

        <span className="absolute -bottom-10 -right-7 opacity-0 px-2 py-1 rounded bg-slate-800 text-white text-xs peer-hover:opacity-100 bg-slate-800/80 transition-all duration-300 ease-in-out">
          click to search
        </span>

      </div>
    )
  } else {
    return (
      <div className="flex relative items-center w-full min-w-0">
        <input className="px-12 py-3 w-full bg-olive-50 rounded-[50px]
       shadow-inner outline-none placeholder"
          placeholder="Search by city..."
          onChange={saveInputText}
          onKeyDown=
          {enterEventListener}
        />
        <img className="peer absolute h-8 right-2 shadow-[0_0_10px_rgba(0,0,0,0.2)] z-10 rounded-full p-1 " src="/search-icon-olive.svg" onClick={searchWeatherFull} />

        <span className="absolute -bottom-10 -right-7 opacity-0 px-2 py-1 rounded bg-black/80 text-white text-xs peer-hover:opacity-90 transition-all duration-300 ease-in-out">
          click to search
        </span>
      </div>
    )
  };

}