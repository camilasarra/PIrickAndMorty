
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import NavLinkComp from "../navLink/NavLinkComp.jsx";
import style from "./Nav.module.css"

function Nav({ onSearch }) {
  return (
    <div className={style.containernav}>
      <div className={style.logo}></div>
      <Link to="/home">
        <button className={style.homebtn}>Home</button>
      </Link>
      <NavLinkComp to={"/favorites"}>
        <button className={style.fav}>Favorites</button>
      </NavLinkComp>
      <NavLinkComp to="/about">
        {" "}
        <button className={style.about}>About</button>
      </NavLinkComp>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
