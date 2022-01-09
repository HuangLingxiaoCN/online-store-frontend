import { useLocation } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import Header from "../components/header/Header";

import "../sass/ItemDetail.scss";

export default function ItemDetail() {
  const { state }: any = useLocation();
  const { imageUrl, name, genre, price, description } = state;

  return (
    <>
      <div style={{ minHeight: '100vh'}}>
        <Header />
        <div className='detail-container'>
          <img src={imageUrl} alt={name} className="detailImage" />
          <div>
            <h4>{name}</h4>
            <p>{genre}</p>
            <p>{description}</p>
            <h2>€{price}</h2>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
