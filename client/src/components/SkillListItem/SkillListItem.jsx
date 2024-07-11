import { Link } from "react-router-dom";
import "./SkillListItem.scss";

function SkillListItem({ skill }) {
  const { name, preview, tag, id } = skill;

  return (
    <Link className="skill-details-link" to={`/skills/${id}`}>
      <div className="skill-list-item">
        <div className="skill-list-item__text">
          <h2 className="skill-list-item__title">{name}</h2>
          <p className="skill-list-item__preview">{preview}</p>
        </div>
        <div className="skill-list-item__extras">
          <div className="skill-list-item__favourite"></div>
          <p className="skill-list-item__tag">{tag}</p>
        </div>
      </div>
    </Link>
  );
}

export default SkillListItem;
