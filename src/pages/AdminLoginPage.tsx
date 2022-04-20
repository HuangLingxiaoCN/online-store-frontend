import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import "../sass/SignInForm.scss";

export default function AdminLoginPage() {
  const emailRef = useRef<HTMLInputElement>(document.createElement("input"));
  const passwordRef = useRef<HTMLInputElement>(document.createElement("input"));

  const [errorMessage, setErrorMessage] = useState<String>('');

  const navigate = useNavigate();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Authenticate user with email and password
    axios({
      url: "https://fierce-spring-store-backend.herokuapp.com/api/auth/isAdmin",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        email: email,
        password: password,
      },
    }).then((res) => {
      Cookies.set("jwt", res.data);
      if(res.status === 200) {
        navigate("/admin", { replace: true });
      }
    })
    .catch((err) => {
      if(err.response.data.statusCode === 401) {
        setErrorMessage('Login Failed. Please check your email or password');
      }

      if(err.response.data.statusCode === 403) {
        setErrorMessage('Access denied. This account is not authorized to access the resource.');
      }
    })
  };

  return (
    <div className="form-container">
      <h1>Admin Login</h1>
      <form onSubmit={submitHandler} className="signInForm">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} className="form-input" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
          className="form-input"
        />
        <p className="errorMessage">{errorMessage}</p>
        <button type="submit" className="login-register-btn">Log in as Admin</button>
        <Link to="/">
          <button type="button" className="backBtn">
            Go Back To Store
          </button>
        </Link>
      </form>
    </div>
  );
}
