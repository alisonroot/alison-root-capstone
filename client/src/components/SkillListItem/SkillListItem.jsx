import { Link } from "react-router-dom";

function SkillListItem({ skill }) {
  const { name, preview, tag, id } = skill;

  return (
    <Link to={`/skills/${id}`}>
    <div className="skill-list-item">
      <h2 className="skill-list-item__title">{name}</h2>
      <p className="skill-list-item__preview">{preview}</p>
      <p className="skill-list-item__tag">{tag}</p>
    </div>
    </Link>
  );
}

export default SkillListItem;
