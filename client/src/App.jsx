import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import FilterQuestion from "./pages/FilterQuestion/FilterQuestion";
import SkillsLibrary from "./pages/SkillsLibrary/SkillsLibrary";
import SkillDetails from "./pages/SkillDetails/SkillDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filter/:id" element={<FilterQuestion />} />
        <Route path="/skills" element={<SkillsLibrary />} />
        <Route path="/skills/favourites" element={<SkillsLibrary />} />
        <Route path="/skills/:id" element={<SkillDetails />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
