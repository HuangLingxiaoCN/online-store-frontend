import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Footer } from "../components/UI/footer/Footer";
import profile from "../assets/profile.jpg";
import Listings from "../components/profile/listings/Listings";
import "../sass/Profile.scss";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [listings, setListings] = useState([]);
  const [orders, setOrders] = useState([]);
  const jwt = Cookies.get("jwt")!;

  useEffect(() => {
    axios
      .get("https://fierce-spring-store-backend.herokuapp.com/api/user/me", {
        headers: { "x-auth-token": jwt },
      })
      .then((res) => {
        setUserEmail(res.data.email);
        setUserName(res.data.name);
        setListings(res.data.listings);
      });
  }, [jwt]);

  useEffect(() => {
    if (userEmail !== "") {
      axios(
        `https://fierce-spring-store-backend.herokuapp.com/api/orders/getOrders/${userEmail}`
      )
        .then((res: any) => {
          console.log(res);
          setOrders(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [userEmail]);

  return (
    <div>
      <button
        onClick={() => {
          navigate("/", { replace: true });
        }}
        className="back-to-home-btn"
      >
        <FontAwesomeIcon
          icon={faAngleDoubleLeft}
          style={{ marginRight: "5px" }}
        />
        Back to Home page
      </button>
      <div className="profile-body-container">
        <div className="profile-bucket">
          <img src={profile} alt="profile" />
          <div className="profile-info">
            <p className="profile-username">{userName}</p>
            <p className="profile-useremail">{userEmail}</p>
          </div>
        </div>
        {/* Listings */}
        <h2>Listings: </h2>
        <Listings
          listings={listings}
          userEmail={userEmail}
          setListings={setListings}
        />

        {/* Order History Section */}
      </div>
      <Footer />
    </div>
  );
}
