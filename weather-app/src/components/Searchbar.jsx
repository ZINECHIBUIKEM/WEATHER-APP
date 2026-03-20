import { useState } from "react";
import axios from "axios";




export function Searchbar() {
  const [value, setValue] = useState("");

  function saveInputText(event) {
    const newValue = event.target.value;

    setValue(newValue);
  };

  async function searchWeather () {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=73699f033e2804828b5eb9c6d5a17da4&units=metric`

    const response = await axios.get(api);

    const temperature = response.data.main.temp;

    const name = response.data.name;

    const country = response.data.sys.country;

    const description = response.data.weather[0].description;

    const main = response.data.weather[0].main;

    const longitude = response.data.coord.lon;

    const latitude = response.data.coord.lat;

    const icon = response.data.weather[0].icon;

    console.log(response.data);
  }

  return (
    <div className="flex relative items-center w-full">
      <input className="px-10 py-3 w-full bg-olive-50 rounded-[50px]
       shadow-inner outline-none"
        placeholder="Search by city"
        onChange={saveInputText}
      />
      <img className="absolute h-8 right-2 shadow-[0_0_10px_rgba(0,0,0,0.2)] z-10 rounded-full p-1 " src="../search-icon-olive.svg" onClick={searchWeather} />
    </div>
  )
}