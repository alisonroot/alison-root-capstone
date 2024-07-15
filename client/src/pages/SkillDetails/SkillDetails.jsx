import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./SkillDetails.scss";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const API_URL = import.meta.env.VITE_API_URL;

function SkillDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [skillData, setSkillData] = useState([]);

  const fetchSkillsById = async (id) => {
    try {
      const authToken = sessionStorage.getItem("token");

      const { data } = await axios.get(`${API_URL}/skills/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setSkillData(data);
    } catch (error) {
      console.error("Couldn't get skill", error);
    }
  };

  const handleFavouriteSkill = async (id) => {
    try {
      const authToken = sessionStorage.getItem("token");

      await axios.post(
        `${API_URL}/skills/${id}/favourite`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      fetchSkillsById(id);
    } catch (error) {
      console.error("Failed to favourite skill", error);
      setError("Failed to favourite skill");
    }
  };

  const handleUnfavouriteSkill = async (id) => {
    try {
      const authToken = sessionStorage.getItem("token");

      await axios.delete(`${API_URL}/skills/${id}/unfavourite`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      fetchSkillsById(id);
    } catch (error) {
      console.error("Error unfavouriting skill", error);
      setError("Failed to unfavourite skill. Please try again later.");
    }
  };

  useEffect(() => {
    fetchSkillsById(id);
  }, [id]);

  const toggleFavourite = async (event) => {
    event.preventDefault();
    if (favourite_id) {
      await handleUnfavouriteSkill(id);
    } else {
      await handleFavouriteSkill(id);
    }
  };

  if (!skillData) {
    return <p>Loading...</p>;
  }

  const { name, content, explanation, tag, favourite_id } = skillData;

  const renderContentWithLineBreaks = (content) => {
    if (!content) return null;
    return content.split("\n").map((line, index) => (
      <p className="skill-details__content-paragraph" key={index}>
        {line}
      </p>
    ));
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="skill-details">
      <div className="skill-details__header">
        <div className="skill-details__header-text">
          <button
            className="skill-details__back-button"
            onClick={handleBackClick}
          >
            <ArrowBackRoundedIcon className="skill-details__back-icon" />
          </button>
          <h1 className="skill-details__name">{name}</h1>
        </div>
        <button className="skill-details__favourite" onClick={toggleFavourite}>
          {favourite_id ? (
            <FavoriteRoundedIcon className="skill-details__favourite-icon skill-details__favourite-icon--filled" />
          ) : (
            <FavoriteBorderRoundedIcon className="skill-details__favourite-icon" />
          )}
        </button>
      </div>
      <div className="skill-details__text">
        <p className="skill-details__tag">{tag}</p>
        <h3 className="skill-details__introduction">Introduction</h3>
        <p className="skill-details__content-paragraph">{explanation}</p>
        <h3 className="skill-details__instructions">Instructions</h3>
        <div className="skill-details__content">
          {renderContentWithLineBreaks(content)}
        </div>
      </div>
    </div>
  );
}

export default SkillDetails;
