import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams, Link } from "react-router-dom";
import SkillListItem from "../../components/SkillListItem/SkillListItem";
import "./SkillsLibrary.scss";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const API_URL = import.meta.env.VITE_API_URL;

function SkillsLibrary() {
  const { category } = useParams();
  const { intensity } = useParams();
  const location = useLocation();

  const [skillsList, setSkillsList] = useState([]);
  const [error, setError] = useState(null);

  const fetchAllSkills = async () => {
    try {
      const authToken = sessionStorage.getItem("token");

      const { data } = await axios.get(`${API_URL}/skills`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setSkillsList(data);
    } catch (error) {
      console.error("Error fetching all skills", error);
      setError("Failed to fetch skills. Please try again later.");
    }
  };

  const fetchSkillsByCategory = async (category) => {
    try {
      const authToken = sessionStorage.getItem("token");

      const { data } = await axios.get(
        `${API_URL}/skills/category/${category}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setSkillsList(data);
    } catch (error) {
      console.error("Couldn't get list of skills", error);
      setError("Failed to fetch skills. Please try again later.");
    }
  };

  const fetchSkillsByIntensity = async (intensity) => {
    try {
      const authToken = sessionStorage.getItem("token");

      const { data } = await axios.get(
        `${API_URL}/skills/intensity/${intensity}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setSkillsList(data);
    } catch (error) {
      console.error("Couldn't get list of skills", error);
      setError("Failed to fetch skills. Please try again later.");
    }
  };

  const fetchFavouriteSkills = async () => {
    try {
      const authToken = sessionStorage.getItem("token");

      const response = await axios.get(`${API_URL}/skills/favourites`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.data.length > 0) {
        setSkillsList(response.data);
        console.log(skillsList);
      } else {
        setSkillsList([]);
      }
    } catch (error) {
      console.error("Couldn't get list of skills", error);
    }
  };

  const handleFavouriteSkill = async (skillId) => {
    try {
      const authToken = sessionStorage.getItem("token");

      await axios.post(
        `${API_URL}/skills/${skillId}/favourite`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (location.pathname === "/favourites") {
        fetchFavouriteSkills();
      } else if (category) {
        fetchSkillsByCategory(category);
      } else if (intensity) {
        fetchSkillsByIntensity(intensity);
      } else {
        fetchAllSkills();
      }
    } catch (error) {
      console.error("Failed to favourite skill", error);
      setError("Failed to favourite skill");
    }
  };

  const handleUnfavouriteSkill = async (skillId) => {
    try {
      const authToken = sessionStorage.getItem("token");

      await axios.delete(`${API_URL}/skills/${skillId}/unfavourite`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (location.pathname === "/favourites") {
        fetchFavouriteSkills();
      } else if (category) {
        fetchSkillsByCategory(category);
      } else if (intensity) {
        fetchSkillsByIntensity(intensity);
      } else {
        fetchAllSkills();
      }
    } catch (error) {
      console.error("Error unfavouriting skill", error);
      setError("Failed to unfavourite skill. Please try again later.");
    }
  };

  useEffect(() => {
    if (location.pathname === "/favourites") {
      fetchFavouriteSkills();
    } else if (category) {
      fetchSkillsByCategory(category);
    } else if (intensity) {
      fetchSkillsByIntensity(intensity);
    } else {
      fetchAllSkills();
    }
  }, [category, intensity, location.pathname]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  let headerText;
  if (location.pathname === "/favourites") {
    headerText = "Favourite Tools";
  } else if (category) {
    headerText = "Recommended Tools";
  } else if (intensity) {
    headerText = "Tools by Intensity Level";
  } else {
    headerText = "All Tools Library";
  }

  let backLink;
  if (location.pathname === "/favourites") {
    backLink = null;
  } else if (category) {
    backLink = "/";
  } else if (intensity) {
    backLink = "/";
  } else {
    backLink = null;
  }

  console.log(skillsList);

  return (
    <div className="skills-library">
      <div className="skills-library__header">
        {backLink && (
          <Link to={"/"}>
            <ArrowBackRoundedIcon className="skills-library__back-icon" />
          </Link>
        )}
        <h1 className="skills-library__header-text">{headerText}</h1>
      </div>
      <div className="skills-library__list-container">
        {skillsList.length > 0 ? (
          skillsList.map((skill) => (
            <SkillListItem
              key={skill.id}
              skill={skill}
              handleFavouriteSkill={handleFavouriteSkill}
              handleUnfavouriteSkill={handleUnfavouriteSkill}
            />
          ))
        ) : location.pathname === "/favourites" ? (
          <p className="skills-library__no-favourites">
            You haven't favourited any tools yet.
          </p>
        ) : (
          <p>No tools found.</p>
        )}
      </div>
    </div>
  );
}

export default SkillsLibrary;
