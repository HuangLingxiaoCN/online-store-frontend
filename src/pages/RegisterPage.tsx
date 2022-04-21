import { FormEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { RootState } from "../redux/ReduxTypes";
import { userLogin } from "../redux/Actions";
import "../sass/SignInForm.scss";

// After registeration, the header UI is not rendered correctly

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameRef = useRef<HTMLInputElement>(document.createElement("input"));
  const emailRef = useRef<HTMLInputElement>(document.createElement("input"));
  const passwordRef = useRef<HTMLInputElement>(document.createElement("input"));

  const loggedIn = useSelector((state: RootState) => state.isLoggedIn);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

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
      .then(() => {
        axios({
          url: "https://fierce-spring-store-backend.herokuapp.com/api/auth",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          data: {
            email: email,
            password: password,
          },
        })
          .then((res) => {
            const jwt = res.data;
            Cookies.set("jwt", jwt);
            if (res.status === 200) {
              // get the user information with jwt token
              axios(
                "https://fierce-spring-store-backend.herokuapp.com/api/user/me",
                {
                  headers: { "x-auth-token": jwt },
                }
              )
              .catch((err) => console.log(err));
              dispatch(userLogin(email));
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // After regisration, redirect to Home page. Should also rerender header UI
  useEffect(() => {
    if (loggedIn) {
      navigate("/", { replace: true });
    }
  }, [navigate, loggedIn]);

  return (
    <div className="form-container">
      <h1>Register Page</h1>
      <form onSubmit={submitHandler} className="signInForm">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} className="form-input" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} className="form-input" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} className="form-input" />
        <button type="submit" className="login-register-btn">Register</button>
        <Link to="/">
          <button type="button" className="backBtn">
            Go Back To Store
          </button>
        </Link>
      </form>
    </div>
  );
}
