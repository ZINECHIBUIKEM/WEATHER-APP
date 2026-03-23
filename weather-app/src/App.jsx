import './App.css'
import { Route, Routes } from "react-router";
import { useState } from "react";
import { Homepage } from "./pages/Homepage";
import { Recentspage } from "./pages/Recentspage";



function App() {
  const [ darkmode, setDarkmode ] = useState(false);
  


  return (
    <Routes>
      <Route path="/" element={<Homepage toggleMode={setDarkmode} darkmode={darkmode} />} />
      <Route path="/recents-page" element={<Recentspage toggleMode={setDarkmode} />} />
    </Routes>
  )
}

export default App
