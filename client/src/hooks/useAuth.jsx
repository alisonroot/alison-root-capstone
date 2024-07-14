import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [failedAuth, setFailedAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const login = async (token) => {
    try {
      const response = await axios.get("http://localhost:8080/auth/profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setUser(response.data);
      setFailedAuth(false);
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
    setIsLoading(false);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      setFailedAuth(true);
      setIsLoading(false);
    } else {
      login(token);
    }
  }, []);

  const authValues = {
    user,
    login,
    logout,
    isLoading,
    failedAuth,
    setFailedAuth,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
