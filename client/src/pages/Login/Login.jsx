import "./Login.scss";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      });

      sessionStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <main className="login">
      <form className="login_form" onSubmit={handleSubmit}>
        <h1 className="login__title">Log In</h1>
        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password"></input>
        <button className="login__button">Log In</button>
        {error && <div className="signup__message">{error}</div>}
      </form>
      <p className="login__login-question">
        Need an account?{" "}
        <Link className="login__login-link" to="/register">
          Log in
        </Link>
      </p>
    </main>
  );
}

export default Login;
