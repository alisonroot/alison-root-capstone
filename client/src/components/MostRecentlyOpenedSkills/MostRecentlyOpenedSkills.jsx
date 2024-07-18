import "./MostRecentlyOpenedSkills.scss";
import { Link } from "react-router-dom";

function MostRecentlyOpenedSkills({ skills }) {
  return (
    <div className="recent-skills">
      <h2 className="recent-skills__title">Recently Used Tools</h2>
      <ul className="recent-skills__list">
        {skills.map((skill) => (
          <Link
            className="recent-skills__link"
            key={skill.id}
            to={`/skills/${skill.id}`}
          >
            <p className="recent-skills__name">{skill.name}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default MostRecentlyOpenedSkills;
