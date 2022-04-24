import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "../sass/EmailToBeConfirmed.scss";

export default function EmailToBeConfirmed() {
  const { state }: any = useLocation();
  const [emailResent, setEmailResent] = useState<Boolean>(false);

  const resendConfirmationEmail = () => {
    axios
      .post(
        "https://fierce-spring-store-backend.herokuapp.com/api/user/reconfirm",
        { email: state.email }
      )
      .then((response) => {
        console.log(response);
        setEmailResent(true);
      });
  };

  return (
    <div>
      <h1>
        The new account is registered successfully! Confirm your email before
        accessing the application
      </h1>
      <button onClick={resendConfirmationEmail} className="resend-btn">
        Resend Email
      </button>
      <p>{emailResent ? "Email has been resent." : ""}</p>
    </div>
  );
}
