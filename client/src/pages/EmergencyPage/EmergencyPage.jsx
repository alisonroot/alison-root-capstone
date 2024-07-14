import { useState } from "react";
import { Link } from "react-router-dom";
import "./EmergencyPage.scss";
import SkillModal from "../../components/SkillModal/SkillModal";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";

function EmergencyPage() {
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  const openEmergencyModal = () => {
    setIsEmergencyModalOpen(true);
  };

  const closeEmergencyModal = () => {
    setIsEmergencyModalOpen(false);
  };

  const handleEmergencyClick = () => {
    openEmergencyModal();
  };

  return (
    <div className="emergency-page">
      <div className="emergency-page__header">
        <div className="emergency-page__header-text">
          <Link to={"/"}>
            <ArrowBackRoundedIcon className="emergency-page__back-icon" />
          </Link>
          <h1 className="emergency-page__title">Emergency Plan</h1>
          <button
            className="home-page__emergency-button"
            onClick={handleEmergencyClick}
          >
            <CrisisAlertIcon className="home-page__emergency-icon" />
          </button>
          <SkillModal
            contentLabel="Emergency Modal"
            isOpen={isEmergencyModalOpen}
            closeModal={closeEmergencyModal}
            modalType="stop"
            closeText="RETURN TO EMERGENCY PLAN"
            onClick={closeEmergencyModal}
          />
        </div>
      </div>
      <div className="emergency-page__section">
        <h2 className="emergency-page__subheader">Crisis Support</h2>
        <ul className="emergency-page__list">
          <li className="emergency-page__list-item">
            <strong>Suicide Crisis Helpline: </strong>call{" "}
            <a href="tel:988">9-8-8</a> or text <a href="sms:988">9-8-8</a>
          </li>
          <li className="emergency-page__list-item">
            <strong>Canadian Mental Health Association: </strong>{" "}
            <a href="https://cmha.ca/find-help/find-cmha-in-your-area/">
              Find your local branch
            </a>
          </li>
        </ul>
      </div>
      <div className="emergency-page__section">
        <h2 className="emergency-page__subheader">Your Safety Plan</h2>
        <Link to={"/emergency/plan"}>Create or edit your plan</Link>
      </div>
    </div>
  );
}

export default EmergencyPage;
