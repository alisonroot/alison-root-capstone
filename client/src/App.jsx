import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SkillsLibrary from "./pages/SkillsLibrary/SkillsLibrary";
import SkillDetails from "./pages/SkillDetails/SkillDetails";
import EmergencyPage from "./pages/EmergencyPage/EmergencyPage";
import EmergencyPlan from "./pages/EmergencyPlan/EmergencyPlan";
import SavedExerciseList from "./pages/SavedExerciseList/SavedExerciseList";
import SavedExerciseDetails from "./pages/SavedExerciseDetails/SavedExerciseDetails";
import ExerciseForm from "./pages/ExerciseForm/ExerciseForm";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
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
            exact
            path="/skills"
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
            path="/favourites"
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
          <Route
            path="/emergency"
            element={
              <ProtectedRoute>
                <EmergencyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/emergency/plan"
            element={
              <ProtectedRoute>
                <EmergencyPlan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exercises"
            element={
              <ProtectedRoute>
                <SavedExerciseList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exercises/saved/:formType/:formId"
            element={
              <ProtectedRoute>
                <SavedExerciseDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exercises/:formType"
            element={
              <ProtectedRoute>
                <ExerciseForm />
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
