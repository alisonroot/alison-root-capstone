import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SkillListItem from "../../components/SkillListItem/SkillListItem";

const API_URL = import.meta.env.VITE_API_URL;

function SkillsLibrary() {
  const { category } = useParams();

  const [skillsList, setSkillsList] = useState([]);
  const [error, setError] = useState(null);

  const fetchAllSkills = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/skills`);
      console.log(data)
      setSkillsList(data);
    } catch (error) {
      console.error("Error fetching all skills", error);
      setError("Failed to fetch skills. Please try again later.")
    }
  };

  const fetchSkillsByCategory = async (category) => {
    try {
      const { data } = await axios.get(
        `${API_URL}/skills/category/${category}`
      );
      console.log(data)
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="skills-library">
      <div className="skills-library__header">
        <h1>Skills Library</h1>
      </div>
      {skillsList.length > 0 ? (
  skillsList.map((skill) => (
    <SkillListItem key={skill.id} skill={skill} />
  ))
) : (
  <p>No skills found.</p>
)}
    </div>
  );
}

export default SkillsLibrary;
