import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react"




export function Searchbar() {
  const [value, setValue] = useState("");

  function saveInputText(event) {
    const newValue = event.target.value;

    setValue(newValue);
  };

  function enterEventListener(event) {
    if(event.key === "Enter") {
      searchWeatherFull();
    }
  }
// Set weather variable to store JSON ddetails
  const [ weather, setWeather ] = useState(null);

  async function searchWeatherFull () {
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

    setWeather(newWeather);
  }

  return (
    <div className="flex relative items-center w-full">
      <input className="px-10 py-3 w-full bg-olive-50 rounded-[50px]
       shadow-inner outline-none"
        placeholder="Search by city"
        onChange={saveInputText}
        onKeyDown=
        {enterEventListener}
      />
      <img className="absolute h-8 right-2 shadow-[0_0_10px_rgba(0,0,0,0.2)] z-10 rounded-full p-1 " src="../search-icon-olive.svg" onClick={searchWeatherFull} />
    </div>
  )
}