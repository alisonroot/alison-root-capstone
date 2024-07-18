import "./Login.scss";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { TextField } from "@mui/material";
import ButtonColour from "../../components/ButtonColour/ButtonColour";
import logo from "../../../public/logo-white.png";

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
      <img className="login__logo" src={logo} alt="" />
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Log In</h1>
        <TextField
          variant="standard"
          label="Email Address"
          className="register__input"
          type="email"
          id="email"
        />
        <TextField
          variant="standard"
          label="Password"
          className="register__input"
          type="password"
          id="password"
        />
        {error && <p className="login__message">{error}</p>}
        <ButtonColour extraClass="login__button" buttonText="Log In" />
      </form>
      <p className="login__account-question">
        Don't have an account?{" "}
        <Link className="login__account-link" to="/register">
          Create account
        </Link>
      </p>
    </main>
  );
}

export default Login;
