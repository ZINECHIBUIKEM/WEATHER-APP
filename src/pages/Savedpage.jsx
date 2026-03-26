import { HeaderSaved } from "../components/HeaderSaved";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { WeatherDisplay } from "../components/WeatherDisplay";

export function Savedpage({ toggleMode, darkmode }) {

  const log = JSON.parse(localStorage.getItem("history")) || false;

  const [ historyLog, setHistoryLog ] = useState(log);

  function deleteHistory() {
    localStorage.clear();
    setHistoryLog(false);
  };


  if (historyLog) {
    return (
      <>
        <HeaderSaved toggleMode={toggleMode} darkmode={darkmode} />


        <div className={`flex flex-col gap-5 pt-20 bg-${darkmode ? "[#1D293D]" : "olive-50"} w-screen min-h-screen p-5`}>
          {historyLog.map((historyItem) => {
            return (
              <WeatherDisplay key={historyItem} value={historyItem} />
            )
          })}
          <div className="flex flex-row relative items-center justify-center">
            <img src={`/delete-${darkmode ? "white" : "black"}.svg`} className="peer w-10" onClick={deleteHistory} />
            <span className={`absolute opacity-0 top-12 px-2 py-1 rounded text-white ${darkmode ? "bg-slate/8" : "bg-black"} text-xs peer-hover:opacity-100 ${darkmode ? "bg-slate/8" : "bg-black"}  transition-all duration-300 ease-in-ou`}>
              Delete all saved
            </span>
          </div>
        </div>



        <Footer />
      </>
    )
  } else {

    return (
      <>
        <HeaderSaved toggleMode={toggleMode} darkmode={darkmode} />

        <div className={`text-${darkmode ? "olive-50" : "[#1D293D]"} pt-20 bg-${darkmode ? "[#1D293D]" : "olive-50"} w-screen min-h-screen`}>
          No saves yet
        </div>



        <Footer />
      </>
    )
  }
}