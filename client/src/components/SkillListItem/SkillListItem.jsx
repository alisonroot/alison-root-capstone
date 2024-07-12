import { Link } from "react-router-dom";
import { useState } from "react";
import "./SkillListItem.scss";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

function SkillListItem({
  skill,
  handleFavouriteSkill,
  handleUnfavouriteSkill,
}) {
  const { name, preview, tag, id, favourite_id } = skill;

  const toggleFavourite = async (event) => {
    event.preventDefault();
    if (favourite_id) {
      await handleUnfavouriteSkill(id);
    } else {
      await handleFavouriteSkill(id);
    }
  };

  return (
    <Link className="skill-details-link" to={`/skills/${id}`}>
      <div className="skill-list-item">
        <div className="skill-list-item__text">
          <h2 className="skill-list-item__title">{name}</h2>
          <p className="skill-list-item__preview">{preview}</p>

          <p className="skill-list-item__tag">{tag}</p>
        </div>
        <div className="skill-list-item__extras">
          <button
            className="skill-list-item__favourite"
            onClick={toggleFavourite}
          >
            {favourite_id ? (
              <FavoriteRoundedIcon className="skill-list-item__favourite-icon skill-list-item__favourite-icon--filled" />
            ) : (
              <FavoriteBorderRoundedIcon className="skill-list-item__favourite-icon" />
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}

export default SkillListItem;
