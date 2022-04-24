import { FormEvent, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "../sass/SignInForm.scss";

// After registeration, the header UI is not rendered correctly

export default function RegisterPage() {
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(document.createElement("input"));
  const emailRef = useRef<HTMLInputElement>(document.createElement("input"));
  const passwordRef = useRef<HTMLInputElement>(document.createElement("input"));

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // register new user
    axios({
      url: "https://fierce-spring-store-backend.herokuapp.com/api/user",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        name: name,
        email: email,
        password: password,
      },
    })
      .then((response) => {
        navigate("/EmailToBeConfirmed", {
          state: { email: response.data.data.email },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <h1>Register Page</h1>
      <form onSubmit={submitHandler} className="signInForm">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} className="form-input" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} className="form-input" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
          className="form-input"
        />
        <button type="submit" className="login-register-btn">
          Register
        </button>
        <Link to="/">
          <button type="button" className="backBtn">
            Go Back To Store
          </button>
        </Link>
      </form>
    </div>
  );
}
