import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import "./NavBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import EventNoteIcon from "@mui/icons-material/EventNote";
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
        {/* <NavLink className="nav-bar__link" to={"/schedule"}>
          {({ isActive }) => (
            <>
              {isActive ? (
                <EventNoteIcon className="nav-bar__icon nav-bar__icon--active" />
              ) : (
                <EventNoteOutlinedIcon className="nav-bar__icon" />
              )}
              <p className="nav-bar__text">Schedule</p>
            </>
          )}
        </NavLink> */}
      </div>
    </footer>
  );
}

export default NavBar;
