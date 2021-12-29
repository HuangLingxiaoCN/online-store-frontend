import React from "react";
import { Link } from "react-router-dom";

// import Home from '../../pages/Home'
import SearchBar from "./SearchBar";
import NavBar from "./Navigation/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import "../../css/Header.css";

export default function Header({setSearchText}: any) {

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
      <NavBar />
    </div>
  );
}
