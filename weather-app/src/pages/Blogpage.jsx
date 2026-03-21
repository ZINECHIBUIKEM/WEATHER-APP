import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WeatherDisplay } from "../components/WeatherDisplay";

export function Blogpage() {
  return (
    <>
      <Header />

      <div className="pt-20 w-screen min-h-screen">
        <WeatherDisplay value="berlin" />
      </div>

      <Footer />
    </>
  )
}