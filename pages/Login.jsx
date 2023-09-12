import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../api.js";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    loginUser(loginFormData)
    .then(data => {
        setError(null)
        localStorage.setItem("loggedin", true)
        navigate(-1, { replace: true })
    })
      .catch((error) => setError(error))
      .finally(() => setStatus("idle") );
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      {location ? location.state?.message : "null"}
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>
          {status == "submitting" ? "Loggin In..." : "Log In"}
        </button>
        <h4>{error?.message}</h4>
      </form>
    </div>
  );
}
