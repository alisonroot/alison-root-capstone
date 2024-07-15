import "./HomePage.scss";
import Thermometer from "../../components/Thermometer/Thermometer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterQuestion from "../FilterQuestion/FilterQuestion";
import intensityLevels from "../../data/intensity-levels.json";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Drawer from "@mui/material/Drawer";
import { useAuth } from "../../hooks/useAuth";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SosRoundedIcon from "@mui/icons-material/SosRounded";
import ButtonColour from "../../components/ButtonColour/ButtonColour";

function HomePage() {
  const navigate = useNavigate();

  const [intensity, setIntensity] = useState(35);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { logout } = useAuth();

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
    if (!isQuestionModalOpen) {
      setCurrentQuestionId(questionId);
      setIsQuestionModalOpen(true);
    }
  };

  const closeQuestionModal = () => {
    setIsQuestionModalOpen(false);
    setCurrentQuestionId(null);
  };

  const handleButtonClick = () => {
    const questionId = selectedIntensity.questionId;
    openQuestionModal(questionId);
  };

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleEmergencyClick = () => {
    navigate("/emergency");
  };

  return (
    <main className="home-page">
      <div className="home-page__header">
        <button className="home-page__menu-button" onClick={toggleDrawer(true)}>
          <MenuRoundedIcon className="home-page__menu-icon" />
        </button>
        <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
          <div
            className="home-page__drawer"
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <ul>
              <li>
                <button
                  className="home-page__logout-button"
                  onClick={handleLogout}
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </Drawer>
        {/* <h1 className="home-page__title">Emotional intensity</h1> */}
        <div className="home-page__button-container">
          <button
            className="home-page__header-button home-page__info-button"
            onClick={handleEmergencyClick}
          >
            <InfoOutlinedIcon className="home-page__button-icon" />
          </button>
          <button
            className="home-page__header-button home-page__emergency-button"
            onClick={handleEmergencyClick}
          >
            <SosRoundedIcon className="home-page__button-icon" />
          </button>
        </div>
      </div>
      <div className="home-page__thermometer">
        <div className="intensity-label">
          {intensityLevels.map((level, index) => (
            <div
              className="intensity-label__container"
              key={index}
              onClick={() => handleLabelClick(level.threshold)}
            >
              <h2
                className="intensity-label__level"
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
        <div className="home-page__thermometer-fill-box"></div>
      </div>
      <div className="home-page__filter-button-container">
        <ButtonColour
          onClick={handleButtonClick}
          buttonText="See suggested techniques"
          extraClass="home-page__filter-button"
        />
      </div>
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
