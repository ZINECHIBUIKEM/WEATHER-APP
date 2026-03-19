import { useState } from "react";
import axios from "axios";



export function Searchbar() {
  const [value, setValue] = useState("");

  function saveInputText(event) {
    setValue(event.target.value);
  }

  async function sendCityName() {
    await axios.get("").then((response) => {
      response.data
    })
  }

  return (
    <div className="flex relative items-center w-full">
      <input className="px-10 py-3 w-full bg-olive-50 rounded-[50px]
       shadow-inner outline-none"
        placeholder="Search by city"
        onChange={saveInputText}
      />
      <img className="absolute h-8 right-2 shadow-[0_0_10px_rgba(0,0,0,0.2)] z-10 rounded-full p-1 " src="../search-icon-olive.svg" onClick={sendCityName} />
    </div>
  )
}