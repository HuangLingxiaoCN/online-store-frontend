// import axios from "axios";
// import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Footer } from "../components/footer/Footer";
import profile from "../assets/profile.jpg";
import Listings from "../components/UI/listings/Listings";
import "../sass/Profile.scss";

export default function ProfilePage() {
  // const jwt: any = Cookies.get("jwt");

  const location: any = useLocation();
  const navigate = useNavigate();
  const {userEmail, userName, listings} = location.state;

  console.log(listings);
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
      <Listings listings={listings} />
      </div>
      <Footer />
    </div>
  );
}
