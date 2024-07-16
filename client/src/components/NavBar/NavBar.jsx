import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import ListIcon from "@mui/icons-material/List";

function NavBar() {
  return (
    <footer>
      <div className="nav-bar">
        <NavLink className="nav-bar__link" to={"/"}>
          {({ isActive }) => (
            <>
              {isActive ? (
                <HomeIcon className="nav-bar__icon nav-bar__icon--active" />
              ) : (
                <HomeOutlinedIcon className="nav-bar__icon" />
              )}
              <p className="nav-bar__text">Home</p>
            </>
          )}
        </NavLink>
        <NavLink className="nav-bar__link" to={"/skills/all"}>
          {({ isActive }) => (
            <>
              {isActive ? (
                <LibraryBooksIcon className="nav-bar__icon nav-bar__icon--active" />
              ) : (
                <LibraryBooksOutlinedIcon className="nav-bar__icon" />
              )}
              <p className="nav-bar__text">Library</p>
            </>
          )}
        </NavLink>
        <NavLink className="nav-bar__link" to={"/skills/favourites"}>
          {({ isActive }) => (
            <>
              {isActive ? (
                <FavoriteRoundedIcon className="nav-bar__icon nav-bar__icon--active" />
              ) : (
                <FavoriteBorderRoundedIcon className="nav-bar__icon" />
              )}
              <p className="nav-bar__text">Favourites</p>
            </>
          )}
        </NavLink>
        <NavLink className="nav-bar__link" to={"/emergency/plan"}>
          {({ isActive }) => (
            <>
              {isActive ? (
                <ListIcon className="nav-bar__icon nav-bar__icon--active" />
              ) : (
                <ListOutlinedIcon className="nav-bar__icon" />
              )}
              <p className="nav-bar__text">Planning</p>
            </>
          )}
        </NavLink>
      </div>
    </footer>
  );
}

export default NavBar;
