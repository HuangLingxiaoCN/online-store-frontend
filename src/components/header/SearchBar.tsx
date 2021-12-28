import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../css/SearchBar.css";

export default function SearchBar() {

  return (
    <div className="searchBar-container">
      <input type="text" placeholder="Search for the product you want" />
      <button className="searchBtn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
