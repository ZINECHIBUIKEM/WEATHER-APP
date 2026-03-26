import './App.css'
import { Route, Routes } from "react-router";
import { useState } from "react";
import { Homepage } from "./pages/Homepage";
import { Savedpage } from "./pages/Savedpage";



function App() {
  const [ darkmode, setDarkmode ] = useState(false);
  


  return (
    <Routes>
      <Route path="/" element={<Homepage toggleMode={setDarkmode} darkmode={darkmode} />} />
      <Route path="/saved-page" element={<Savedpage toggleMode={setDarkmode} darkmode={darkmode} />} />
    </Routes>
  )
}

export default App
