import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'

import "../sass/Form.scss";

export default function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(document.createElement("input"));
  const passwordRef = useRef<HTMLInputElement>(document.createElement("input"));
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const navigate = useNavigate()

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
    }).then(res => {
      const jwt = res.data;
      Cookies.set('jwt', jwt);
      if(res.status === 200) {
        // get the user with jwt token
        axios("https://fierce-spring-store-backend.herokuapp.com/api/user/me", { headers: { "x-auth-token": jwt } })
          .catch(err => console.log(err))
        setIsLoggedIn(true)
      }
    });
  };

  let result: any = <div></div>;

  if(isLoggedIn) {
    navigate('/', { replace: true })
  }

  if(!isLoggedIn) {
    result = <div>
    <h1>Login Page</h1>
    <form onSubmit={submitHandler}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" ref={emailRef} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" ref={passwordRef} />
      <button type="submit">Log in</button>
    </form>
  </div>
  }

  return result;
}
