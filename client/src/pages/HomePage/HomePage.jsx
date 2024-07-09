import "./HomePage.scss";
import Thermometer from "../../components/Thermometer/Thermometer";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const intensityLevels = [
  {
    label: "Crisis",
    color: "#FF0909",
    description: "Calm yourself and self‑soothe",
    threshold: 95,
    questionId: "5",
  },
  {
    label: "High",
    color: "#FC8E24",
    description: "Practice accepting your current reality",
    threshold: 75,
    questionId: "4",
  },
  {
    label: "Medium",
    color: "#FABA2C",
    description: "Recognize your feelings and choose actions",
    threshold: 50,
    questionId: "3",
  },
  {
    label: "Low",
    color: "#BCAC61",
    description: "Grounding and breathing techniques",
    threshold: 30,
    questionId: "2",
  },
  {
    label: "Feeling Fine",
    color: "#7D9D96",
    description: "Practice staying in the moment",
    threshold: 15,
    questionId: "1",
  },
];

function HomePage() {
  const navigate = useNavigate();
  const [intensity, setIntensity] = useState(35);

  const handleChange = (newIntensity) => {
    setIntensity(newIntensity);
  };

  const selectedIntensity = intensityLevels.find((level) => {
    if (intensity <= 15) return level.label === "Feeling Fine";
    if (intensity <= 35) return level.label === "Low";
    if (intensity <= 60) return level.label === "Medium";
    if (intensity <= 85) return level.label === "High";
    return level.label === "Crisis";
  });

  const handleLabelClick = (threshold) => {
    setIntensity(threshold);
  };

  const handleButtonClick = () => {
    const questionId = selectedIntensity.questionId;
    navigate(`/question/${questionId}`);
  };

  return (
    <main className="home-page">
      <div className="home-page__container">
        {/* <h1 className="home-page__title">Emotional intensity</h1> */}
      </div>
      <div className="intensity-label">
        {intensityLevels.map((level, index) => (
          <div
            className="intensity-label__container"
            key={index}
            onClick={() => handleLabelClick(level.threshold)}
          >
            <h2
              className={`intensity-label__level ${
                selectedIntensity.label === level.label
                  ? "selectedIntensity__level--selected"
                  : ""
              }`}
              style={{
                color:
                  selectedIntensity.label === level.label ? level.color : "",
              }}
            >
              {level.label}
            </h2>
            {selectedIntensity.label === level.label && (
              <p className="intensity-label__description">
                {level.description}
              </p>
            )}
          </div>
        ))}
      </div>
      <Thermometer
        className="thermometer"
        intensity={intensity}
        onChange={handleChange}
      />
      <Button
        buttonText="Suggest Techniques"
        extraClass="home-page__button"
        onClick={handleButtonClick}
      />
    </main>
  );
}

export default HomePage;
