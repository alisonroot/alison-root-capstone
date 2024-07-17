import "./MostUsedSkills.scss";

const MostUsedSkills = ({ skills }) => {
  return (
    <div>
      <h2>Most Used Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MostUsedSkills;
