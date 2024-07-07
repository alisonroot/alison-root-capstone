import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SkillListItem from "../../components/SkillListItem/SkillListItem";

const API_URL = import.meta.env.VITE_API_URL;

function SkillsLibrary() {
  const { category } = useParams();

  const [skillsList, setSkillsList] = useState([]);

  const fetchAllSkills = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/skills`);
      setSkillsList(data);
    } catch (error) {
      console.error("Error fetching all skills", error);
    }
  };

  const fetchSkillsByCategory = async (category) => {
    try {
      const { data } = await axios.get(
        `${API_URL}/skills/category/${category}`
      );
      console.log(data);
      setSkillsList(data);
    } catch (error) {
      console.error("Couldn't get list of skills", error);
    }
  };

  useEffect(() => {
    if (category) {
      fetchSkillsByCategory(category);
    } else {
      fetchAllSkills();
    }
  }, [category]);

  return (
    <div className="skills-library">
      <div className="skills-library__header">
        <h1>Skills Library</h1>
      </div>
      {skillsList.map((skill) => (
        <SkillListItem key={skill.id} skill={skill} />
      ))}
    </div>
  );
}

export default SkillsLibrary;
