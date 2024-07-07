function SkillListItem({ skill }) {
  const { title, preview_text, tag } = skill;

  return (
    <div className="skill-list-item">
      <h2 className="skill-list-item__title">{title}</h2>
      <p className="skill-list-item__preview">{preview_text}</p>
      <p className="skill-list-item__tag">{tag}</p>
    </div>
  );
}

export default SkillListItem;
