import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WeatherDisplay } from "../components/WeatherDisplay";

export function Recentspage({ toggleMode, darkmode }) {

const historyLog = JSON.parse(localStorage.getItem("history")) || false;

  
  if (historyLog) {
    return (
      <>
        <Header toggleMode={toggleMode} darkmode={darkmode} />
        

        <div className={`pt-20 bg-${darkmode ? "[#1D293D]" : "olive-50" } w-screen min-h-screen`}>
          {historyLog.map((historyItem) => {
            return (
              <WeatherDisplay key={historyItem} value={historyItem} />
            )
          })}
        </div>

        <Footer />
      </>
    )
  } else {

    return (
      <>
        <Header toggleMode={toggleMode} darkmode={darkmode} />

        <div className={`text-${darkmode ? "olive-50" : "[#1D293D]"} pt-20 bg-${darkmode ? "[#1D293D]" : "olive-50" } w-screen min-h-screen`}>
          No History yet
        </div>

        <Footer />
      </>
    )
  }
}