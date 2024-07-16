import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./EmergencyPlan.scss";
import TextField from "@mui/material/TextField";
import ButtonColour from "../../components/ButtonColour/ButtonColour";

const API_URL = import.meta.env.VITE_API_URL;

function EmergencyPlan() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    support_person_1_name: "",
    support_person_1_phone: "",
    support_person_2_name: "",
    support_person_2_phone: "",
    professional_support_1_name: "",
    professional_support_1_phone: "",
    professional_support_2_name: "",
    professional_support_2_phone: "",
    emergency_care_address: "",
    emergency_care_phone: "",
    warning_signs: "",
    stay_safe: "",
    strengths_resources: "",
    self_soothe: "",
  });

  const [formId, setFormId] = useState(null);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const fetchFormData = async () => {
    try {
      const authToken = sessionStorage.getItem("token");

      const response = await axios.get(`${API_URL}/forms/emergency`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const { forms } = response.data;
      if (forms && forms.length > 0) {
        const existingForm = forms[0];
        setFormData(existingForm);
        setFormId(existingForm.id);
      }
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  useEffect(() => {
    fetchFormData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const authToken = sessionStorage.getItem("token");

      if (formId) {
        if (
          window.confirm(
            "Save your plan as is? Empty fields may cause information you previously saved to be deleted."
          )
        ) {
          await axios.put(`${API_URL}/forms/emergency/${formId}`, formData, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
          alert("Plan saved successfully");
        } else {
          return;
        }
      } else {
        await axios.post(`${API_URL}/forms/emergency`, formData, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        alert("Plan saved successfully");
      }
      navigate("/emergency");
    } catch (error) {
      console.error("Error submitting plan:", error);
      alert("Couldn't save plan. Please try again.");
    }
  };

  const handleListClick = () => {
    window.confirm("Leave the page? Any changes will be lost.");
    navigate("/emergency");
  };

  return (
    <form className="emergency-plan" onSubmit={handleSubmit}>
      <div className="emergency-plan__header">
        <h1 className="emergency-plan__title">Your Emergency Plan</h1>
        <button
          className="emergency-plan__list-button"
          onClick={handleListClick}
        ></button>
      </div>
      <div className="emergency-plan__input-section">
        <div className="emergency-plan__sub-section">
          <h2 className="emergency-plan__subheader">Personal Support</h2>
          <div className="emergency-plan__support">
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Name"
                id="support_person_1_name"
                className="emergency-plan__textfield"
                size="small"
                value={formData.support_person_1_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Phone Number"
                id="support_person_1_phone"
                className="emergency-plan__textfield"
                size="small"
                value={formData.support_person_1_phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="emergency-plan__support">
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Name"
                id="support_person_2_name"
                className="emergency-plan__textfield"
                size="small"
                value={formData.support_person_2_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Phone Number"
                id="support_person_2_phone"
                className="emergency-plan__textfield"
                size="small"
                value={formData.support_person_2_phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="emergency-plan__sub-section">
          <h2 className="emergency-plan__subheader">Professional Support</h2>
          <div className="emergency-plan__support">
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Name"
                id="professional_support_1_name"
                className="emergency-plan__textfield"
                size="small"
                value={formData.professional_support_1_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Phone Number"
                id="professional_support_1_phone"
                className="emergency-plan__textfield"
                size="small"
                value={formData.professional_support_1_phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="emergency-plan__support">
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Name"
                id="professional_support_2_name"
                className="emergency-plan__textfield"
                size="small"
                value={formData.professional_support_2_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Phone Number"
                id="professional_support_2_phone"
                className="emergency-plan__textfield"
                size="small"
                value={formData.professional_support_2_phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="emergency-plan__sub-section">
          <h2 className="emergency-plan__subheader">Emergency Care</h2>
          <div className="emergency-plan__support">
            <TextField
              variant="outlined"
              label="Address"
              id="emergency_care_address"
              size="small"
              value={formData.emergency_care_address}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="Phone Number"
              id="emergency_care_phone"
              size="small"
              value={formData.emergency_care_phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="emergency-plan__sub-section">
          <h2 className="emergency-plan__subheader emergency-plan__subheader-crisis">
            Crisis Management Plans
          </h2>
          <div className="emergency-plan__crisis-container">
            <TextField
              multiline
              rows={4}
              variant="outlined"
              label="Warning Signs"
              id="warning_signs"
              helperText="Signs that you might be heading into a crisis."
              className="emergency-plan__crisis-plan"
              value={formData.warning_signs}
              onChange={handleInputChange}
            />
            <TextField
              multiline
              rows={4}
              variant="outlined"
              label="Reasons to Stay Safe"
              id="stay_safe"
              helperText="Motivation for managing your crisis effectively (eg. goals, plans)."
              className="emergency-plan__crisis-plan"
              value={formData.stay_safe}
              onChange={handleInputChange}
            />
            <TextField
              multiline
              rows={4}
              variant="outlined"
              label="Strengths and Resources"
              id="strengths_resources"
              helperText="Personal strengths and available resources."
              className="emergency-plan__crisis-plan"
              value={formData.strengths_resources}
              onChange={handleInputChange}
            />
            <TextField
              multiline
              rows={4}
              variant="outlined"
              label="Self-Soothing and Distractions"
              id="self_soothe"
              helperText="Go-to strategies for self-soothing and distracting yourself."
              className="emergency-plan__crisis-plan"
              value={formData.self_soothe}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <ButtonColour
          onClick={handleSubmit}
          buttonText="Save"
          extraClass="emergency-plan__submit-button"
          type="submit"
        />
      </div>
    </form>
  );
}

export default EmergencyPlan;
