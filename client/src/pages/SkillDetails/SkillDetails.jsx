import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function SkillDetails() {
  const { id } = useParams()
  const [skillData, setSkillData] = useState([])

  const fetchSkillsById = async (id) => {
    try {
      const { data } = await axios.get(
        `${API_URL}/skills/${id}`
      );
      console.log(data)
      setSkillData(data);
    } catch (error) {
      console.error("Couldn't get skill", error);
    }
  };

  useEffect(() => {
      fetchSkillsById(id)
  }, [id])

  if(!skillData) {
    return <p>Loading...</p>
  }

  const { name, content, explanation, is_acronym, tag } = skillData;

  return (
    <div>
      <h1>{name}</h1>
      <p>{explanation}</p>
      <p>{content}</p>
      <p>{tag}</p>
    </div>
  );
}

export default SkillDetails;
