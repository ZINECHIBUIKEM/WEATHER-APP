import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WeatherDisplay } from "../components/WeatherDisplay";

export function Recentspage() {

const historyLog = JSON.parse(localStorage.getItem("history")) || false;

  
  if (historyLog) {
    return (
      <>
        <Header />

        <div className="pt-20 w-screen min-h-screen">
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
        <Header />

        <div className="pt-20 w-screen min-h-screen">
          No History yet
        </div>

        <Footer />
      </>
    )
  }
}