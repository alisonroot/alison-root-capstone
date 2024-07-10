import "./HomePage.scss";
import Thermometer from "../../components/Thermometer/Thermometer";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import FilterQuestion from "../FilterQuestion/FilterQuestion";
import intensityLevels from "../../data/intensity-levels.json";

function HomePage() {
  // const navigate = useNavigate();
  const [intensity, setIntensity] = useState(35);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(null);

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

  const openQuestionModal = (questionId) => {
    setCurrentQuestionId(questionId);
    setIsQuestionModalOpen(true);
  };

  const closeQuestionModal = () => {
    setIsQuestionModalOpen(false);
    setCurrentQuestionId(null);
  };

  // const handleButtonClick = () => {
  //   const questionId = selectedIntensity.questionId;
  //   navigate(`/question/${questionId}`);
  // };

  const handleButtonClick = () => {
    const questionId = selectedIntensity.questionId;
    openQuestionModal(questionId);
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
      <FilterQuestion
        isOpen={isQuestionModalOpen}
        closeModal={closeQuestionModal}
        questionId={currentQuestionId}
        color={selectedIntensity.color}
      />
    </main>
  );
}

export default HomePage;
