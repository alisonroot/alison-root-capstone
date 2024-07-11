import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SkillDetails.scss";

const API_URL = import.meta.env.VITE_API_URL;

function SkillDetails() {
  const { id } = useParams();
  const [skillData, setSkillData] = useState([]);

  const fetchSkillsById = async (id) => {
    try {
      const { data } = await axios.get(`${API_URL}/skills/${id}`);
      console.log(data);
      setSkillData(data);
    } catch (error) {
      console.error("Couldn't get skill", error);
    }
  };

  useEffect(() => {
    fetchSkillsById(id);
  }, [id]);

  if (!skillData) {
    return <p>Loading...</p>;
  }

  const { name, content, explanation, is_acronym, tag } = skillData;

  return (
    <div className="skill-details">
      <div className="skill-details__header">
        <h1 className="skill-details__name">{name}</h1>
      </div>
      <div className="skill-details__text">
        <p className="skill-details__intro">{explanation}</p>
        <p className="skill-details__content">{content}</p>
        <p className="skill-details__tag">{tag}</p>
      </div>
    </div>
  );
}

export default SkillDetails;
