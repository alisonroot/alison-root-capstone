import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ListIcon from "@mui/icons-material/List";

import LibraryIcon from "../../assets/icons/library.svg";
import FavouritesIcon from "../../assets/icons/bookmark.svg";
import ThermometerIcon from "../../assets/icons/thermometer8.svg";
import PlanningIcon from "../../assets/icons/plan.svg";
import SavedPlansIcon from "../../assets/icons/plan3.svg";

function NavBar() {
  return (
    <footer>
      <div className="nav-bar">
        <NavLink className="nav-bar__link" to={"/skills"}>
          {/* <LibraryBooksIcon className="nav-bar__icon" /> */}
          <img src={LibraryIcon} className="nav-bar__icon" alt="library icon" />
          <p className="nav-bar__text">Library</p>
        </NavLink>
        <NavLink className="nav-bar__link" to={"/skills/favourites"}>
          {/* <BookmarksIcon className="nav-bar__icon" /> */}
          <img
            src={FavouritesIcon}
            className="nav-bar__icon"
            alt="favourites icon"
          />
          <p className="nav-bar__text">Favourites</p>
        </NavLink>
        <NavLink className="nav-bar__link" to={"/"}>
          {/* <DeviceThermostatIcon className="nav-bar__icon-large" /> */}
          <img
            src={ThermometerIcon}
            className="nav-bar__icon nav-bar__icon-large"
            alt="thermometer icon"
          />
          <p className="nav-bar__text">Find Skill</p>
        </NavLink>
        <NavLink className="nav-bar__link" to={"/"}>
          {/* <ListIcon className="nav-bar__icon" /> */}
          <img src={PlanningIcon} className="nav-bar__icon" alt="plan icon" />
          <p className="nav-bar__text">Planning</p>
        </NavLink>
        <NavLink className="nav-bar__link" to={"/"}>
          {/* <EventNoteIcon className="nav-bar__icon" /> */}
          <img
            src={SavedPlansIcon}
            className="nav-bar__icon"
            alt="plans icon"
          />
          <p className="nav-bar__text">Schedule</p>
        </NavLink>
      </div>
      <div className="nav-bar__rounded"></div>
    </footer>
  );
}

export default NavBar;
