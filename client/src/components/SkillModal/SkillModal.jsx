import Modal from "react-modal";
import "./SkillModal.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function SkillModal({
  isOpen,
  closeModal,
  modalType,
  contentLabel,
  closeText,
}) {
  const checkFactsContent = (
    <>
      <h2 className="skill-modal__header">Check the Facts</h2>
      <div className="skill-modal__divider"></div>
      <div className="skill-modal__text">
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">Understand Your Emotions</h3>
          <p>
            Emotions are valid but may not always match the facts. Checking the
            facts helps you decide if your emotion fits the situation.
          </p>
        </div>
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">Steps</h3>
          <ol className="skill-modal__steps">
            <li className="skill-modal__steps-item">
              <strong>Identify the Emotion:</strong> Name and rate the intensity
              of your emotion.
            </li>
            <li className="skill-modal__steps-item">
              <strong>Describe the Situation:</strong> Write down the triggering
              event, focusing on facts.
            </li>
            <li className="skill-modal__steps-item">
              <strong>Identify the Thoughts:</strong> Note your thoughts. Are
              they evidence-based or assumptions?
            </li>
            <li className="skill-modal__steps-item">
              <strong>Consider Alternatives:</strong> Think of other
              explanations for the situation.
            </li>
            <li className="skill-modal__steps-item">
              <strong>Check for Distortions:</strong> Look for cognitive
              distortions (e.g., catastrophizing).
            </li>
            <li className="skill-modal__steps-item">
              <strong>Assess the Fit:</strong> Does your emotion match the
              facts?
            </li>
          </ol>
        </div>
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">Example</h3>
          <p>
            <strong>Emotion:</strong> Anger
          </p>
          <p>
            <strong>Situation:</strong> No response to a text message.
          </p>
          <p>
            <strong>Thought:</strong> "They are ignoring me."
          </p>
          <p>
            <strong>Alternative:</strong> "They might be busy."
          </p>
          <p>
            <strong>Fit the Facts:</strong> "They’ve been responsive before, so
            they’re likely busy."
          </p>
        </div>
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">Conclusion</h3>
          <p>
            Aligning your emotions with the facts leads to healthier responses.
            Remember, it's okay to feel, but facts can guide balanced reactions.
          </p>
        </div>
      </div>
    </>
  );

  const stopContent = (
    <>
      <h2 className="skill-modal__header">STOP</h2>
      <div className="skill-modal__divider"></div>
      <div className="skill-modal__text">
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">Stop</h3>
          <p>
            Pause the situation or the impulsive reaction. Take a moment to
            recognize and acknowledge the initial impulse.
          </p>
        </div>
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">Take a Step Back</h3>
          <p>
            Step back mentally and create a space between the impulse and your
            reaction. Gain perspective on the situation.
          </p>
        </div>
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">Observe</h3>
          <p>
            Observe your thoughts, emotions, and physical sensations without
            judgment. Notice what is happening internally and externally.
          </p>
        </div>
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">Proceed Mindfully</h3>
          <p>
            After pausing, stepping back, and observing, choose a response that
            aligns with your values and goals. Proceed with clarity and
            intention.
          </p>
        </div>
      </div>
    </>
  );

  let modalContent =
    modalType === "check-facts" ? checkFactsContent : stopContent;

  return (
    <div className="skill-modal">
      <Modal
        className="skill-modal__modal"
        overlayClassName="skill-modal__overlay"
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={contentLabel}
      >
        <div className="skill-modal__container">
          <button className="skill-modal__close" onClick={closeModal}>
            <CloseOutlinedIcon />
          </button>
          {modalContent}
          <div className="skill-modal__divider"></div>
          <button className="skill-modal__close-button" onClick={closeModal}>
            <p className="skill-modal__close-text">{closeText}</p>
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default SkillModal;
