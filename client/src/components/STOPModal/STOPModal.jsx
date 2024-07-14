import Modal from "react-modal";
import "./STOPModal.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function StopSkillModal({ isOpen, closeModal }) {
  return (
    <div className="stop-skill">
      <Modal
        className="stop-skill__modal"
        overlayClassName="stop-skill__overlay"
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="stop-skill Modal"
      >
        <div className="stop-skill__container">
          <button className="stop-skill__close" onClick={closeModal}>
            <CloseOutlinedIcon />
          </button>
          <h2 className="stop-skill__header">STOP</h2>
          <div className="stop-skill__divider"></div>
          <div className="stop-skill__text">
            <div className="stop-skill__section">
              <h3 className="stop-skill__subheader">Stop</h3>
              <p>
                Pause the situation or the impulsive reaction. Take a moment to
                recognize and acknowledge the initial impulse.
              </p>
            </div>
            <div className="stop-skill__section">
              <h3 className="stop-skill__subheader">Take a Step Back</h3>
              <p>
                Step back mentally and create a space between the impulse and
                your reaction. Gain perspective on the situation.
              </p>
            </div>
            <div className="stop-skill__section">
              <h3 className="stop-skill__subheader">Observe</h3>
              <p>
                Observe your thoughts, emotions, and physical sensations without
                judgment. Notice what is happening internally and externally.
              </p>
            </div>
            <div className="stop-skill__section">
              <h3 className="stop-skill__subheader">Proceed Mindfully</h3>
              <p>
                After pausing, stepping back, and observing, choose a response
                that aligns with your values and goals. Proceed with clarity and
                intention.
              </p>
            </div>
          </div>
          <div className="stop-skill__divider"></div>
          <button className="stop-skill__close-button" onClick={closeModal}>
            <p className="stop-skill__close-text">SEE QUESTION</p>
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default StopSkillModal;
