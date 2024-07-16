import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EmergencyPage.scss";
import SkillModal from "../../components/SkillModal/SkillModal";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import SosRoundedIcon from "@mui/icons-material/SosRounded";
import TextField from "@mui/material/TextField";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";

const API_URL = import.meta.env.VITE_API_URL;

function EmergencyPage() {
  const navigate = useNavigate();
  const [emergencyPlan, setEmergencyPlan] = useState(null);
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

  const fetchEmergencyPlan = async () => {
    try {
      const authToken = sessionStorage.getItem("token");

      const response = await axios.get(`${API_URL}/forms/emergency`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setEmergencyPlan(response.data.forms[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchEmergencyPlan();
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="emergency-page">
      <div className="emergency-page__header">
        <div className="emergency-page__header-text">
          <button
            className="emergency-page__back-button"
            onClick={handleBackClick}
          >
            <ArrowBackRoundedIcon className="emergency-page__back-icon" />
          </button>
          <h1 className="emergency-page__title">Emergency Plan</h1>
        </div>
        <button
          className="emergency-page__emergency-button"
          onClick={handleEmergencyClick}
        >
          <SosRoundedIcon className="emergency-page__button-icon" />
        </button>
      </div>
      <div className="emergency-page__container">
        <div className="emergency-page__section">
          <h2 className="emergency-page__section-header">Crisis Support</h2>
          <ul className="emergency-page__list">
            <li className="emergency-page__list-item">
              <strong>Suicide Crisis Helpline: </strong>call{" "}
              <a className="emergency-page__contact-link" href="tel:988">
                9-8-8
              </a>{" "}
              or text{" "}
              <a className="emergency-page__contact-link" href="sms:988">
                9-8-8
              </a>
            </li>
            <li className="emergency-page__list-item">
              <strong>Canadian Mental Health Association: </strong>{" "}
              <a
                className="emergency-page__contact-link"
                href="https://cmha.ca/find-help/find-cmha-in-your-area/"
              >
                Find your local branch
              </a>
            </li>
          </ul>
        </div>
        <div className="emergency-page__section">
          <div className="emergency-page__plan-top">
            <h2 className="emergency-page__section-header">Saved Plan</h2>
            <Link className="emergency-page__edit-link" to={"/emergency/plan"}>
              <EditNoteRoundedIcon className="emergency-page__edit-icon" />
              {emergencyPlan ? "Edit" : "Create"}
            </Link>
          </div>
          {emergencyPlan && (
            <>
              {(emergencyPlan.support_person_1_name ||
                emergencyPlan.support_person_1_phone ||
                emergencyPlan.support_person_2_name ||
                emergencyPlan.support_person_2_phone) && (
                <div className="emergency-page__sub-section">
                  <h3 className="emergency-page__subheader">
                    Personal Support
                  </h3>
                  {(emergencyPlan.support_person_1_name ||
                    emergencyPlan.support_person_1_phone) && (
                    <div className="emergency-page__support">
                      <div className="emergency-page__support-item">
                        <TextField
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                          label="Name"
                          id="support_person_1_name"
                          className="emergency-page__textfield"
                          size="small"
                          value={emergencyPlan.support_person_1_name || ""}
                        />
                      </div>
                      <div className="emergency-page__support-item">
                        <TextField
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                          label="Phone Number"
                          id="support_person_1_phone"
                          className="emergency-page__textfield"
                          size="small"
                          value={emergencyPlan.support_person_1_phone || ""}
                        />
                      </div>
                    </div>
                  )}
                  {(emergencyPlan.support_person_2_name ||
                    emergencyPlan.support_person_2_phone) && (
                    <div className="emergency-page__support">
                      <div className="emergency-page__support-item">
                        <TextField
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                          label="Name"
                          id="support_person_2_name"
                          className="emergency-page__textfield"
                          size="small"
                          value={emergencyPlan.support_person_2_name || ""}
                        />
                      </div>
                      <div className="emergency-page__support-item">
                        <TextField
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                          label="Phone Number"
                          id="support_person_2_phone"
                          className="emergency-page__textfield"
                          size="small"
                          value={emergencyPlan.support_person_2_phone || ""}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
              {(emergencyPlan.professional_support_1_name ||
                emergencyPlan.professional_support_1_phone ||
                emergencyPlan.professional_support_2_name ||
                emergencyPlan.professional_support_2_phone) && (
                <div className="emergency-page__sub-section">
                  <h3 className="emergency-page__subheader">
                    Professional Support
                  </h3>
                  {(emergencyPlan.professional_support_1_name ||
                    emergencyPlan.professional_support_1_phone) && (
                    <div className="emergency-page__support">
                      <div className="emergency-page__support-item">
                        <TextField
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                          label="Name"
                          id="professional_support_1_name"
                          className="emergency-page__textfield"
                          size="small"
                          value={
                            emergencyPlan.professional_support_1_name || ""
                          }
                        />
                      </div>
                      <div className="emergency-page__support-item">
                        <TextField
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                          label="Phone Number"
                          id="professional_support_1_phone"
                          className="emergency-page__textfield"
                          size="small"
                          value={
                            emergencyPlan.professional_support_1_phone || ""
                          }
                        />
                      </div>
                    </div>
                  )}
                  {(emergencyPlan.professional_support_2_name ||
                    emergencyPlan.professional_support_2_phone) && (
                    <div className="emergency-page__support">
                      <div className="emergency-page__support-item">
                        <TextField
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                          label="Name"
                          id="professional_support_2_name"
                          className="emergency-page__textfield"
                          size="small"
                          value={
                            emergencyPlan.professional_support_2_name || ""
                          }
                        />
                      </div>
                      <div className="emergency-page__support-item">
                        <TextField
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                          label="Phone Number"
                          id="professional_support_2_phone"
                          className="emergency-page__textfield"
                          size="small"
                          value={
                            emergencyPlan.professional_support_2_phone || ""
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
              {(emergencyPlan.emergency_care_address ||
                emergencyPlan.emergency_care_phone) && (
                <div className="emergency-page__sub-section">
                  <h3 className="emergency-page__subheader">Emergency Care</h3>
                  <div className="emergency-page__support">
                    <div className="emergency-page__support-item">
                      <TextField
                        variant="outlined"
                        InputProps={{
                          readOnly: true,
                        }}
                        label="Name"
                        id="emergency_care_address"
                        className="emergency-page__textfield"
                        size="small"
                        value={emergencyPlan.emergency_care_address || ""}
                      />
                    </div>
                    <div className="emergency-page__support-item">
                      <TextField
                        variant="outlined"
                        InputProps={{
                          readOnly: true,
                        }}
                        label="Phone Number"
                        id="emergency_care_phone"
                        className="emergency-page__textfield"
                        size="small"
                        value={emergencyPlan.emergency_care_phone || ""}
                      />
                    </div>
                  </div>
                </div>
              )}
              {(emergencyPlan.warning_signs ||
                emergencyPlan.stay_safe ||
                emergencyPlan.strengths_resources ||
                emergencyPlan.self_soothe) && (
                <div className="emergency-page__sub-section">
                  <h3 className="emergency-page__subheader emergency-page__subheader-crisis">
                    Crisis Management Plans
                  </h3>
                  <div className="emergency-plan__crisis-container">
                    {emergencyPlan.warning_signs && (
                      <TextField
                        multiline
                        maxRows={4}
                        variant="outlined"
                        InputProps={{
                          readOnly: true,
                        }}
                        label="Warning Signs"
                        id="warning_signs"
                        helperText="Signs that you might be heading into a crisis."
                        className="emergency-page__crisis-plan"
                        value={emergencyPlan.warning_signs}
                      />
                    )}
                    {emergencyPlan.stay_safe && (
                      <TextField
                        multiline
                        maxRows={4}
                        variant="outlined"
                        InputProps={{
                          readOnly: true,
                        }}
                        label="Reasons to Stay Safe"
                        id="stay_safe"
                        helperText="Motivation for managing your crisis effectively (eg. goals, plans)."
                        className="emergency-page__crisis-plan"
                        value={emergencyPlan.stay_safe}
                      />
                    )}
                    {emergencyPlan.strengths_resources && (
                      <TextField
                        multiline
                        maxRows={4}
                        variant="outlined"
                        InputProps={{
                          readOnly: true,
                        }}
                        label="Strengths and Resources"
                        id="strengths_resources"
                        helperText="Personal strengths and available resources."
                        className="emergency-page__crisis-plan"
                        value={emergencyPlan.strengths_resources}
                      />
                    )}
                    {emergencyPlan.self_soothe && (
                      <TextField
                        multiline
                        maxRows={4}
                        variant="outlined"
                        InputProps={{
                          readOnly: true,
                        }}
                        label="Self-Soothing and Distractions"
                        id="self_soothe"
                        helperText="Go-to strategies for self-soothing and distracting yourself."
                        className="emergency-page__crisis-plan"
                        value={emergencyPlan.self_soothe}
                      />
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <SkillModal
        contentLabel="Emergency Modal"
        isOpen={isEmergencyModalOpen}
        closeModal={closeEmergencyModal}
        modalType="stop"
        closeText="RETURN TO EMERGENCY PLAN"
        onClick={closeEmergencyModal}
      />
    </div>
  );
}

export default EmergencyPage;
