import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { WeatherDisplay } from "../components/WeatherDisplay"


export function Homepage({ toggleMode, darkmode }) {
  const [search, setSearch] = useState("");



  if (search) {
    return (
      <>
        <title>
          Home | Zinecast
        </title>
        <link rel="icon" href="../../public/favicon.png" />

        <div className="bg-white min-h-screen flex flex-col w-screen">
          <div className="mb-10">
            <Header onSearch={setSearch} />
          </div>

          <div className="text-2xl text-[#1D293D] mt-10 font-bold">
            Results
          </div>

          <WeatherDisplay value={search} />
        </div>

        <Footer />
      </>
    )
  };

  return (

    <>
      <title>
        Home | Zinecast
      </title>
      <link rel="icon" href="../../public/favicon.png" />

      <div className="bg-white min-h-screen flex flex-col w-screen">
        <div className="mb-10">
          <Header onSearch={setSearch} toggleMode={toggleMode} darkmode={darkmode} />
        </div>

        <video autoPlay loop muted playsInline  src={`../../public/${!darkmode ? "lightMode" : "darkMode"}.mp4`} />

        <section className="w-screen mt-8">
          <article className="font-thin">
            <h1 className="font-bold text-3xl mb-4">The Ever-Changing Story of Weather: Nature’s Invisible Force</h1>

            Weather is one of the most powerful and constant forces shaping life on Earth. It influences how we dress, where we go, what we eat, and even how we feel. From the gentle morning sunshine to the dramatic crash of thunderstorms, weather is not just a background condition—it is an active, living system that affects every human being, every day.

            <h3 className="font-bold text-md mt-4 mb-2">Understanding Weather: What It Really Means</h3>

            Weather refers to the state of the atmosphere at a particular place and time. It includes elements such as temperature, humidity, wind, rainfall, and atmospheric pressure. Unlike climate, which describes long-term patterns over years or decades, weather is immediate and constantly changing.

            In tropical regions like parts of Nigeria, weather patterns are often defined by heat, humidity, and seasonal rainfall. The air can feel heavy, skies can shift quickly, and storms can appear suddenly, reminding us of nature’s unpredictability.

            <strong>The Science Behind Weather</strong>,

            Weather is driven by the sun. The Earth receives uneven heating because of its shape and rotation. Some areas receive more sunlight than others, creating temperature differences. These differences cause air to move, forming winds, clouds, and storms.

            When warm air rises, it cools and condenses into clouds. If enough moisture gathers, it falls as rain. This is why you often see clouds building up before a downpour. In coastal regions, like areas near Rivers State, moisture from nearby water bodies increases humidity and the likelihood of rainfall.

            Daily Weather Patterns and Their Impact

            Looking at current conditions, you might notice a mix of sunshine, clouds, and occasional thunderstorms. This pattern is common in tropical climates, especially during certain seasons. Warm temperatures combined with moisture create the perfect environment for afternoon or evening storms.
            <p className="mt-4" />
            <h3 className="font-lg font-bold inline-block">These daily changes affect:</h3>

            Transportation, Rain can slow down traffic and reduce visibility
            Health,Heat and humidity can cause fatigue or dehydration
            Agriculture,armers depend heavily on rainfall patterns
            Energy usage:Hot days increase the need for cooling systems

            Weather is not just something we observe—it directly shapes how society functions.

            Weather and Human Emotion

            Interestingly, weather also affects mood. Bright sunny days often bring energy and positivity, while cloudy or rainy days can make people feel calm—or sometimes even gloomy. The connection between weather and mental health is real, and many people adjust their routines based on how the sky looks.

            In warm climates, the heat can sometimes feel overwhelming, but it also creates vibrant environments where life thrives year-round.

            Storms: Nature’s Dramatic Expression

            Thunderstorms are one of the most fascinating weather events. They are formed when warm, moist air rises rapidly into cooler parts of the atmosphere. This creates towering clouds, lightning, thunder, and heavy rainfall.

            While storms can be beautiful, they also remind us of nature’s power. Strong winds, flooding, and lightning can cause damage if precautions are not taken. That’s why staying aware of weather changes is important.

            Why Weather Forecasting Matters

            Weather forecasting has become an essential part of modern life. With the help of satellites, sensors, and computer models, scientists can predict upcoming conditions with increasing accuracy.

            Forecasts help people:

            Plan their day
            Prepare for extreme weather
            Protect crops and property
            Stay safe during storms

            Even something as simple as knowing it might rain can change your entire schedule.

            Climate Change and the Future of Weather

            In recent years, weather patterns have become more unpredictable. Rising global temperatures are affecting rainfall, increasing the frequency of extreme events, and altering seasonal cycles.

            This means:

            Hotter days are becoming more common
            Rainfall patterns are shifting
            Storms may become more intense

            Understanding weather today is not just about convenience—it’s about preparing for the future.

            Conclusion: Living With the Sky Above Us

            Weather is more than just a daily update—it is a powerful system that connects all life on Earth. It teaches us to adapt, to prepare, and to respect the forces of nature.

            Whether it’s a calm sunny day or a stormy afternoon, the weather is always telling a story. And by paying attention, we learn how to live better within the world around us.

          </article>

        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 px-4 w-screen h-auto mb-4">
          <div>
            <WeatherDisplay value="texas" />
          </div>
          <div>
            <WeatherDisplay value="toronto" />
          </div>
          <div>
            <WeatherDisplay value="london" />
          </div>
          <div>
            <WeatherDisplay value="accra" />
          </div>
          <div>
            <WeatherDisplay value="china" />
          </div>
          <div>
            <WeatherDisplay value="tokyo" />
          </div>
          <div>
            <WeatherDisplay value="asaba" />
          </div>
          <div>
            <WeatherDisplay value="owerri" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )



};