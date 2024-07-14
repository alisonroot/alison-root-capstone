import { Link } from "react-router-dom";
import "./EmergencyPlan.scss";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import TextField from "@mui/material/TextField";
import Button from "../../components/Button/Button";

function EmergencyPlan() {
  const handleSubmit = () => {};
  return (
    <form className="emergency-plan">
      <div className="emergency-plan__header">
        <div className="emergency-plan__header-text">
          <Link to={"/emergency"}>
            <ArrowBackRoundedIcon className="emergency-plan__back-icon" />
          </Link>
          <h1 className="emergency-plan__title">Create Your Emergency Plan</h1>
        </div>
      </div>
      <div className="emergency-plan__input-section">
        <div className="emergency-plan__sub-section">
          <h2 className="emergency-plan__subheader">Personal Support System</h2>
          <div className="emergency-plan__support">
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Name"
                id="supportPerson1Name"
                className="emergency-plan__textfield"
                size="small"
              />
            </div>
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Phone Number"
                id="supportPerson1Phone"
                className="emergency-plan__textfield"
                size="small"
              />
            </div>
          </div>
          <div className="emergency-plan__support">
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Name"
                id="supportPerson2Name"
                className="emergency-plan__textfield"
                size="small"
              />
            </div>
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Phone Number"
                id="supportPerson2Phone"
                className="emergency-plan__textfield"
                size="small"
              />
            </div>
          </div>
          <div className="emergency-plan__support">
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Name"
                id="supportPerson3Name"
                className="emergency-plan__textfield"
                size="small"
              />
            </div>
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Phone Number"
                id="supportPerson3Phone"
                className="emergency-plan__textfield"
                size="small"
              />
            </div>
          </div>
        </div>
        <div className="emergency-plan__sub-section">
          <h2 className="emergency-plan__subheader">
            Professional Support System
          </h2>
          <div className="emergency-plan__support">
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Name"
                id="professionalSupport1Name"
                className="emergency-plan__textfield"
                size="small"
              />
            </div>
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Phone Number"
                id="professionalSupport1Phone"
                className="emergency-plan__textfield"
                size="small"
              />
            </div>
          </div>
          <div className="emergency-plan__support">
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Name"
                id="professionalSupport2Name"
                className="emergency-plan__textfield"
                size="small"
              />
            </div>
            <div className="emergency-plan__support-item">
              <TextField
                variant="outlined"
                label="Phone Number"
                id="professionalSupport2Phone"
                className="emergency-plan__textfield"
                size="small"
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
              id="emergencyCareAddress"
              size="small"
            />
            <TextField
              variant="outlined"
              label="Phone Number"
              id="emergencyCarePhoneNumber"
              size="small"
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
              id="warningSigns"
              helperText="Signs that you might be heading into a crisis."
              className="emergency-plan__crisis-plan"
            />
            <TextField
              multiline
              rows={4}
              variant="outlined"
              label="Reasons to Stay Safe"
              id="reasonsToStaySafe"
              helperText="Motivation for managing your crisis effectively (eg. goals, plans)."
              className="emergency-plan__crisis-plan"
            />
            <TextField
              multiline
              rows={4}
              variant="outlined"
              label="Strengths and Resources"
              id="strengthsAndResources"
              helperText="Personal strengths and available resources."
              className="emergency-plan__crisis-plan"
            />
            <TextField
              multiline
              rows={4}
              variant="outlined"
              label="Self-Soothing Techniques"
              id="selfSootheMethods"
              helperText="Your favorite ways to self-soothe."
              className="emergency-plan__crisis-plan"
            />
            <TextField
              multiline
              rows={4}
              variant="outlined"
              label="Distraction Strategies"
              id="distractionStrategies"
              helperText="Go-to strategies for distraction during a crisis."
              className="emergency-plan__crisis-plan"
            />
          </div>
        </div>
        <Button
          onClick={handleSubmit}
          buttonText="Save"
          extraClass="emergency-plan__submit-button"
        />
      </div>
    </form>
  );
}

export default EmergencyPlan;
