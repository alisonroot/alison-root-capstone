import "./MostUsedSkills.scss";
import { Link } from "react-router-dom";

const MostUsedSkills = ({ skills }) => {
  return (
    <div className="most-used">
      <h2 className="most-used__title">Most Opened Skills</h2>
      <ul className="most-used__list">
        {skills.map((skill) => (
          <Link
            className="most-used__link"
            key={skill.id}
            to={`/skills/${skill.id}`}
          >
            <p className="most-used__name">{skill.name}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MostUsedSkills;
