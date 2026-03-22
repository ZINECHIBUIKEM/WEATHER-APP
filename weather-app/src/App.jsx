import './App.css'
import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";
import { Homepage } from "./pages/Homepage";
import { Recentspage } from "./pages/Recentspage";
import { Searchpage } from "./pages/Searchpage";



function App() {
  const [ darkmode, setDarkmode ] = useState(false);
  


  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/recents-page" element={<Recentspage />} />
      <Route path="/search-page" element={<Searchpage />} />
    </Routes>
  )
}

export default App
