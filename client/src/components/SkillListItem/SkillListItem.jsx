function SkillListItem({ skill }) {
  const { name, preview, tag } = skill;

  return (
    <div className="skill-list-item">
      <h2 className="skill-list-item__title">{name}</h2>
      <p className="skill-list-item__preview">{preview}</p>
      <p className="skill-list-item__tag">{tag}</p>
    </div>
  );
}

export default SkillListItem;
