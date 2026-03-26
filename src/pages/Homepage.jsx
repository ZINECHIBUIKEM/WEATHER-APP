import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { WeatherDisplay } from "../components/WeatherDisplay"


export function Homepage({ toggleMode, darkmode }) {
  const [search, setSearch] = useState("");

  const [showOverlay, setShowOverlay] = useState(false);


  function handleSave() {
    setShowOverlay(true);

    setTimeout(() => {
      setShowOverlay(false);
    }, 2000);
  };


  if (search) {
    return (
      <>
        <title>
          Zinecast
        </title>
        <link rel="icon" href="/favicon.png" />

        <div className={`bg-${darkmode ? "[#1D293D]" : "olive-50"} min-h-screen flex flex-col w-screen`}>
          <div className="mb-10">
            <Header showOverlay={showOverlay} setShowOverlay={setShowOverlay} handleSave={handleSave} onSearch={setSearch} toggleMode={toggleMode} darkmode={darkmode} />
          </div>

          <div className={`text-2xl text-${darkmode ? "olive-50" : "[#1D293D]"} mt-15 mb-7 font-bold`}>
            Result
          </div>
          <div className="p-5">
            <WeatherDisplay value={search} darkmode={darkmode} />
          </div>

        </div>

        <Footer />
      </>
    )
  } else {
    return (

      <>
        <title>
          Zinecast
        </title>
        <link rel="icon" href="/favicon.png" />

        <div className={`bg-${darkmode ? "[#1D293D]" : "olive-50"} min-h-screen flex flex-col w-screen`}>
          <div className="mb-10">
            <Header onSearch={setSearch} toggleMode={toggleMode} darkmode={darkmode} />
          </div>

          <video autoPlay loop muted playsInline src={`/${!darkmode ? "lightMode" : "darkMode"}.mp4`} className="lg:-mt-60" />

          <section className="w-screen flex flex-col items-center justify-between px-4 mt-3 md:mt-4 text-[#1D293D]">
            <article className={`font-thin ${darkmode ? "text-white" : "text-[#1D293D]"}`}>
              <h1 className={`font-bold text-xl mb-4 text-${darkmode ? "white" : "[#1D293D]"} md:text-4xl px-5`}>A Smarter Way to Check the Weather</h1>

              In today’s fast-paced world, time is everything. Whether you’re heading out for work, planning a trip, or simply deciding what to wear, knowing the weather shouldn’t take more than a few seconds. Yet, many platforms overload users with unnecessary details, slow interfaces, or cluttered designs that make a simple task feel complicated.

              This is exactly the problem our platform was built to solve.

              <h3 className="font-bold text-md mt-4 mb-2">A Simple Idea with Real Impact</h3>

              At its core, this application is designed with one goal in mind: to help people access accurate weather forecasts instantly. No distractions, no confusion—just a clean and efficient way to get the information you need, when you need it.

              Instead of navigating through multiple pages or dealing with overwhelming data, users can simply search for any city and receive real-time weather updates within seconds. The experience is fast, intuitive, and built for everyday use.

              <strong>Built for Speed and Clarity</strong>,

              Every design decision in this platform focuses on simplicity:

              A minimal search interface that gets you started immediately
              Instant results powered by real-time data
              A clean visual layout that highlights what matters most
              Search history tracking for quick access to previous locations

              This ensures that users spend less time figuring out the app—and more time using it
              <p className="mt-4" />
              <h3 className="font-lg font-bold inline-block">Search. See. Go. — Weather, without the wait.</h3>
            </article>

            <div className={`h-[0.5px] w-[80%] mt-10 bg-${darkmode ? "olive-50" : "slate-800"} opacity-20`} />

          </section>

          <span className={`text-2xl font-bold mt-20 text-${darkmode ? "white" : "[#1D293D]"} md:text-4xl`}>
            Current Weather Highlights
          </span>
          <div className="grid grid-cols-1  mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 px-4 w-screen h-auto mb-4">
            <div>
              <WeatherDisplay value="texas" darkmode={darkmode} />
            </div>
            <div>
              <WeatherDisplay value="toronto" darkmode={darkmode} />
            </div>
            <div>
              <WeatherDisplay value="london" darkmode={darkmode} />
            </div>
            <div>
              <WeatherDisplay value="accra" darkmode={darkmode} />
            </div>
            <div>
              <WeatherDisplay value="china" darkmode={darkmode} />
            </div>
            <div>
              <WeatherDisplay value="tokyo" darkmode={darkmode} />
            </div>
            <div>
              <WeatherDisplay value="asaba" darkmode={darkmode} />
            </div>
            <div>
              <WeatherDisplay value="owerri" darkmode={darkmode} />
            </div>
          </div>
        </div>

        <Footer />
      </>
    )
  }

};