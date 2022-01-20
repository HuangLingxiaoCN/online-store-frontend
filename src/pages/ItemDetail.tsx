import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

import "../sass/ItemDetail.scss";

export default function ItemDetail() {
  const { state }: any = useLocation();
  const { imageUrl, name, genre, price, description } = state;
  const navigate = useNavigate();

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
          className="back-to-home-btn"
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} style={{ marginRight: "5px" }} />Back to Home page
        </button>
        <div className="detail-container">
          <img src={imageUrl} alt={name} className="detailImage" />
          <div className="info-container">
            <h1>{name}</h1>
            <h2 className="price">€{price}</h2>
            <p className="genre">Genre: {genre}</p>
            <p className="description">{description}</p>
            <button className="add-to-cart-btn-detail">Add To Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
