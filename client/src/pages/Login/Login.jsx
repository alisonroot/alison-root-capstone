import "./Login.scss";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";

function Login() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setFailedAuth, user, login } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    setError(null);
  }, [setFailedAuth]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      });

      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        setFailedAuth(false);
        login(response.data.token);
        navigate("/");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError(error.response?.data);
    }
  };

  return (
    <main className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Log In</h1>
        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password"></input>
        <button className="login__button">Log In</button>
        {error && <div className="login__message">{error}</div>}
      </form>
      <p className="login__login-question">
        Need an account?{" "}
        <Link className="login__login-link" to="/register">
          Sign Up
        </Link>
      </p>
    </main>
  );
}

export default Login;
