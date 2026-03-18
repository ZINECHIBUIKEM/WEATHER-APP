import './App.css'
import { Route, Routes } from "react-router";
import { Homepage } from "./pages/Homepage";
import { Resultspage } from "./pages/Resultspage";
import { Blogpage } from "./pages/Blogpage";
import { Contactpage } from "./pages/Contactpage";
import { Searchpage } from "./pages/Searchpage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/results-page" element={<Resultspage />} />
      <Route path="/blog-page" element={<Blogpage />} />
      <Route path="/contact-page" element={<Contactpage />} />
      <Route path="/search-page" element={<Searchpage />} />
    </Routes>
  )
}

export default App
