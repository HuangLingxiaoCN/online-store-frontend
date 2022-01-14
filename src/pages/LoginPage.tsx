import { FormEvent, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import { RootState } from "../redux/Types";
import { userLogin } from "../redux/Action";
import "../sass/Form.scss";

export default function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(document.createElement("input"));
  const passwordRef = useRef<HTMLInputElement>(document.createElement("input"));

  const loggedIn = useSelector((state: RootState) => state.isLoggedIn);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Authenticate user with email and password
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
    }).then((res) => {
      const jwt = res.data;
      Cookies.set("jwt", jwt);
      if (res.status === 200) {
        // get the user information with jwt token
        axios("https://fierce-spring-store-backend.herokuapp.com/api/user/me", {
          headers: { "x-auth-token": jwt },
        }).catch((err) => console.log(err));
        dispatch(userLogin(email));
      }
    });
  };

  let result: any = <div></div>;

  if (loggedIn) {
    navigate("/", { replace: true });
  }

  if (!loggedIn) {
    result = (
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} className="form-input" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} className="form-input" />
          <button type="submit">Log in</button>
          <Link to="/">
            <button type="button" className="backBtn">
              Go Back To Store
            </button>
          </Link>
        </form>
      </div>
    );
  }

  return result;
}
