import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WeatherDisplay } from "../components/WeatherDisplay";

export function Savedpage({ toggleMode, darkmode }) {

  const historyLog = JSON.parse(localStorage.getItem("history")) || false;

  function deleteHistory() {
    localStorage.clear();
    window.location.reload();
  };


  if (historyLog) {
    return (
      <>
        <Header toggleMode={toggleMode} darkmode={darkmode} />


        <div className={`flex flex-col gap-5 pt-20 bg-${darkmode ? "[#1D293D]" : "olive-50"} w-screen min-h-screen p-5`}>
          {historyLog.map((historyItem) => {
            return (
              <WeatherDisplay key={historyItem} value={historyItem} />
            )
          })}
          <div className="flex flex-row relative items-center justify-center">
            <img src="/delete-black.svg" className="peer w-10" onClick={deleteHistory} />
            <span className="absolute opacity-0 top-10 px-2 py-1 rounded bg-black/80 text-white text-xs peer-hover:opacity-100 bg-black/80 transition-all duration-300 ease-in-out">
              Delete saved
            </span>
          </div>
        </div>



        <Footer />
      </>
    )
  } else {

    return (
      <>
        <Header toggleMode={toggleMode} darkmode={darkmode} />

        <div className={`text-${darkmode ? "olive-50" : "[#1D293D]"} pt-20 bg-${darkmode ? "[#1D293D]" : "olive-50"} w-screen min-h-screen`}>
          No saves yet
        </div>



        <Footer />
      </>
    )
  }
}