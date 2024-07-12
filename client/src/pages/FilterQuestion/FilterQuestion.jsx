import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./FilterQuestion.scss";
import FitFactsModal from "../../components/FitFactsModal/FitFactsModal";
import questions from "../../data/filter-questions.json";
import Modal from "react-modal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import HikingIcon from "@mui/icons-material/Hiking";
import SelfImprovementRoundedIcon from "@mui/icons-material/SelfImprovementRounded";
import AirIcon from "@mui/icons-material/Air";
import LocalFloristRoundedIcon from "@mui/icons-material/LocalFloristRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import DoNotDisturbRoundedIcon from "@mui/icons-material/DoNotDisturbRounded";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import DirectionsRunRoundedIcon from "@mui/icons-material/DirectionsRunRounded";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";

const iconMap = {
  SelfImprovementRoundedIcon,
  HikingIcon,
  AirIcon,
  LocalFloristRoundedIcon,
  CheckBoxOutlinedIcon,
  IndeterminateCheckBoxOutlinedIcon,
  BuildCircleOutlinedIcon,
  DoNotDisturbRoundedIcon,
  SentimentDissatisfiedIcon,
  DirectionsRunRoundedIcon,
  ThumbUpOutlinedIcon,
  ThumbDownOutlinedIcon,
};

const getIconComponent = (iconName, color) => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? (
    <IconComponent
      className="filter-question__button-icon"
      style={{ color: color }}
    />
  ) : null;
};

function FilterQuestion({ questionId, isOpen, closeModal, color }) {
  // const { questionId } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [isFitFactsModalOpen, setIsFitFactsModalOpen] = useState(false);

  useEffect(() => {
    const question = questions.find((question) => question.id === questionId);
    if (question) {
      setQuestion(question);
    }
  }, [questionId]);

  const openFitFactsModal = () => {
    setIsFitFactsModalOpen(true);
  };

  const closeFitFactsModal = () => {
    setIsFitFactsModalOpen(false);
  };

  if (!question) {
    return null;
  }

  return (
    <div className="filter-question">
      <Modal
        className="filter-question__modal"
        overlayClassName="filter-question__overlay"
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Question Modal"
      >
        <div className="filter-question__container">
          <button className="filter-question__close" onClick={closeModal}>
            <CloseOutlinedIcon />
          </button>
          <h2 className="filter-question__question-text">
            {question.question}
          </h2>
          <div className="filter-question__button-container">
            <Button
              extraClass="filter-question__button"
              buttonText={question.button1}
              onClick={() => navigate(question.button1path)}
              icon={getIconComponent(question.button1icon, color)}
            />
            <Button
              extraClass="filter-question__button"
              buttonText={question.button2}
              onClick={() => navigate(question.button2path)}
              icon={getIconComponent(question.button2icon, color)}
            />
          </div>
          {question.extraButton && (
            <Button
              extraClass="filter-question__modal-button"
              buttonText={question.extraButtonText}
              onClick={openFitFactsModal}
            >
              icon={<HelpCenterOutlinedIcon />}
            </Button>
          )}
          <Link
            className="filter-question__skip-link"
            to={`/skills/intensity/${question.intensitypath}`}
          >
            See all {question.intensity} techniques
          </Link>
          <FitFactsModal
            isOpen={isFitFactsModalOpen}
            closeModal={closeFitFactsModal}
          />
        </div>
      </Modal>
    </div>
  );
}

export default FilterQuestion;
