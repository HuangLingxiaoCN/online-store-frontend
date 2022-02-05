import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import NavBar from "./Navigation/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import "../../sass/Header.scss";

export default function Header({setSearchText, cartItemsQuantity, setCartItemsQuantity}: any) {

  const emptySearch = () => {
    setSearchText('')
  }

  return (
    <div className="header">
      <Link to="/" onClick={emptySearch}>
        <FontAwesomeIcon
          icon={faStore}
          style={{ fontSize: "4rem", color: "#000000" }}
        />
      </Link>
      <SearchBar setSearchText={setSearchText} />
      <NavBar cartItemsQuantity={cartItemsQuantity} setCartItemsQuantity={setCartItemsQuantity} />
    </div>
  );
}
