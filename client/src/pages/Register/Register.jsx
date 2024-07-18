import "./Register.scss";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { TextField } from "@mui/material";
import ButtonColour from "../../components/ButtonColour/ButtonColour";
import logo from "../../../public/logo-white.png";

function Register() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { setFailedAuth, login, user } = useAuth();

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

    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target["confirm-password"].value;

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/auth/register", {
        email,
        password,
      });

      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        setFailedAuth(false);
        login(response.data.token);
        setSuccess(true);
        setError(null);
        navigate("/");
      } else {
        setSuccess(false);
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      setSuccess(false);
      setError(error.response?.data?.message);
    }
  };

  return (
    <main className="register">
      <img className="login__logo" src={logo} alt="" />
      <form className="register__form" onSubmit={handleSubmit}>
        <h1 className="register__title">Create an Account</h1>
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
        <TextField
          variant="standard"
          label="Confirm Password"
          className="register__input"
          type="password"
          id="confirm-password"
        />
        {error && <p className="register__message">{error}</p>}
        <ButtonColour extraClass="register__button" buttonText="Register" />
      </form>
      <p className="register__account-question">
        Already have an account?{" "}
        <Link className="register__account-link" to="/login">
          Log in
        </Link>
      </p>
    </main>
  );
}

export default Register;
