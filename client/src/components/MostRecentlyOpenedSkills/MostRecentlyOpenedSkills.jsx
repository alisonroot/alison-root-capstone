import "./MostRecentlyOpenedSkills.scss";

function MostRecentlyOpenedSkills({ skills }) {
  return (
    <div>
      <h2>You Last Opened:</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MostRecentlyOpenedSkills;
