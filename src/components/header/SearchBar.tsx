import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../css/SearchBar.css";

export default function SearchBar({setSearchText}: any) {
  const [input, setInput] = useState<any>('')

  const handleInputChange = (event: any) => {
    setInput(event.target.value)
  }

  const handlerSearchClick = (e: any) => {
    setSearchText(input)
  }

  const handlerSearchEnter = (event: any) => {
    if(event.code === 'Enter') {
      setSearchText(input)
    }
  }

  return (
    <div className="searchBar-container">
      <input type="text" placeholder="Search for the product you want" value={input} onChange={handleInputChange} onKeyUp={handlerSearchEnter} />
      <button className="searchBtn" onClick={handlerSearchClick}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
