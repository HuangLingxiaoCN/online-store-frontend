import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";

export default function AdminProductDetail() {
  const navigate = useNavigate();
  const { state }: any = useLocation();
  const {
    imageUrl,
    name,
    price,
    genre,
    numberInStock,
    ownerEmail,
    description,
  } = state;

  return (
    <div>
      <button
        onClick={() => {
          navigate("/admin/products", { replace: true });
        }}
        className="back-to-home-btn"
      >
        <FontAwesomeIcon
          icon={faAngleDoubleLeft}
          style={{ marginRight: "5px" }}
        />
        Back to Admin Products page
      </button>
      <div className="detail-container">
        <img src={imageUrl} alt={name} className="detailImage" />
        <div className="info-container">
          <h1>{name}</h1>
          <h2 className="price">€{price}</h2>
          <p className="genre">Genre: {genre}</p>
          <p className="numberInStock">Number In Stock: {numberInStock}</p>
          <p className="ownerEmail">Seller: {ownerEmail}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}
