import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [failedAuth, setFailedAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const login = async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }

    try {
      const response = await axios.get("http://localhost:8080/auth/profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setFailedAuth(true);
    }

    setIsLoading(false);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    setFailedAuth(true);
  };

  useEffect(() => {
    login();
  }, []);

  const authValues = {
    user,
    login,
    logout,
  };

  if (failedAuth) {
    return (
      <main className="dashboard">
        <p>You must be logged in to see this page.</p>
        <p>
          <Link to="/login">Log in</Link>
        </p>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="dashboard">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
