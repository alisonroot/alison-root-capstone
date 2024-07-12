import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import FilterQuestion from "./pages/FilterQuestion/FilterQuestion";
import SkillsLibrary from "./pages/SkillsLibrary/SkillsLibrary";
import SkillDetails from "./pages/SkillDetails/SkillDetails";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/question/:questionId"
            element={
              <ProtectedRoute>
                <FilterQuestion />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/skills/all"
            element={
              <ProtectedRoute>
                <SkillsLibrary />
              </ProtectedRoute>
            }
          />
          <Route
            path="/skills/category/:category"
            element={
              <ProtectedRoute>
                <SkillsLibrary />
              </ProtectedRoute>
            }
          />
          <Route
            path="/skills/intensity/:intensity"
            element={
              <ProtectedRoute>
                <SkillsLibrary />
              </ProtectedRoute>
            }
          />
          <Route
            path="/skills/favourites"
            element={
              <ProtectedRoute>
                <SkillsLibrary />
              </ProtectedRoute>
            }
          />
          <Route
            path="/skills/:id"
            element={
              <ProtectedRoute>
                <SkillDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
