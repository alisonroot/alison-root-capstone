import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ListIcon from "@mui/icons-material/List";

function NavBar() {
  return (
    <footer>
      <div className="nav-bar">
        <NavLink to={"/skills"}>
          <LibraryBooksIcon className="nav-bar__icon" />
        </NavLink>
        <NavLink to={"/skills/favourites"}>
          <BookmarksIcon className="nav-bar__icon" />
        </NavLink>
        <NavLink to={"/"}>
          <DeviceThermostatIcon className="nav-bar__icon nav-bar__icon-large" />
        </NavLink>
        <NavLink to={"/"}>
          <ListIcon className="nav-bar__icon" />
        </NavLink>
        <NavLink to={"/"}>
          <EventNoteIcon className="nav-bar__icon" />
        </NavLink>
      </div>
    </footer>
  );
}

export default NavBar;
