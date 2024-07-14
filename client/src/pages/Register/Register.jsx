import "./Register.scss";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";

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
      <form className="register_form" onSubmit={handleSubmit}>
        <h1 className="register__title">Sign Up</h1>
        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"></input>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
        ></input>
        <button className="register__button">Sign Up</button>
        {success && <div className="signup__message">Signed up!</div>}
        {error && <div className="signup__message">{error}</div>}
      </form>
      <p className="register__login-question">
        Have an account?{" "}
        <Link className="register__login-link" to="/login">
          Log in
        </Link>
      </p>
    </main>
  );
}

export default Register;
