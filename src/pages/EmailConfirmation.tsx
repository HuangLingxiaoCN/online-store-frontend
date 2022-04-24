import axios from "axios";

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import '../sass/EmailConfirmation.scss';

export default function EmailConfirmation() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios(
      `https://fierce-spring-store-backend.herokuapp.com/api/user/confirm/${id}`
    )
      .then((response) => {
        console.log(response);
        // after confirm email, get jwt token and update redux state
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, navigate]);

  return (
    <div>
      <h1>Your email is now confirmed!</h1>
      <button onClick={() => {
        navigate("/login")
      }} className="goBackToLogin-btn">Go back to login</button>
    </div>
  );
}
