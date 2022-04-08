import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import useWindowSize from "react-use/lib/useWindowSize";
import "../sass/CheckOutSuccess.scss";

export default function CheckOutSuccess() {
  const { width, height } = useWindowSize();
  return (
    <div className="checkOutSuccess-container">
      <Confetti width={width} height={height} />
      <h1>Congratulations, Check out successfully !</h1>
      <div className="goBackBtn-afterCheckOut-container">
        <Link to="/">
          <button type="button" className="goBackBtn-afterCheckOut">
            Go Back To Store
          </button>
        </Link>
      </div>
    </div>
  );
}
