import './App.css'
import { Route, Routes } from "react-router";
import { Homepage } from "./pages/Homepage";
import { Resultspage } from "./pages/Resultspage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/results-page" element={<Resultspage />} />
    </Routes>
  )
}

export default App
