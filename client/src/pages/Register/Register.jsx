import "./Register.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8080/auth/register", {
        email: event.target.email.value,
        password: event.target.password.value,
      });

      setSuccess(true);
      setError(null);
      event.target.reset();
    } catch (error) {
      setSuccess(false);
      setError(error.response.data);
    }
  };

  return (
    <main className="register">
      <form className="register_form" onSubmit={handleSubmit}>
        <h1 className="register__title">Sign Up</h1>
        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password"></input>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="text"
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
