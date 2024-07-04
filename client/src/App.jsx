import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import FilterQuestion from "./pages/FilterQuestion/FilterQuestion";
import SkillsLibrary from "./pages/SkillsLibrary/SkillsLibrary";
import SkillDetails from "./pages/SkillDetails/SkillDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/filter/:id" element={FilterQuestion} />
        <Route path="/skills" element={SkillsLibrary} />
        <Route path="/skills/:id" element={SkillDetails} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
