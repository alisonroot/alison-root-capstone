import Modal from "react-modal";
import "./FitFactsModal.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function FitFactsModal({ isOpen, closeModal }) {
  return (
    <div className="fit-facts">
      <Modal
        className="fit-facts__modal"
        overlayClassName="fit-facts__overlay"
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Fit Facts Modal"
      >
        <div className="fit-facts__container">
          <button className="fit-facts__close" onClick={closeModal}>
            <CloseOutlinedIcon />
          </button>
          <h2 className="fit-facts__header">Check the Facts</h2>
          <div className="fit-facts__divider"></div>
          <div className="fit-facts__text">
            <div className="fit-facts__section">
              <h3 className="fit-facts__subheader">Understand Your Emotions</h3>
              <p>
                Emotions are valid but may not always match the facts. Checking
                the facts helps you decide if your emotion fits the situation.
              </p>
            </div>
            <div className="fit-facts__section">
              <h3 className="fit-facts__subheader">Steps</h3>
              <ol className="fit-facts__steps">
                <li className="fit-facts__steps-item">
                  <strong>Identify the Emotion:</strong> Name and rate the
                  intensity of your emotion.
                </li>
                <li className="fit-facts__steps-item">
                  <strong>Describe the Situation:</strong> Write down the
                  triggering event, focusing on facts.
                </li>
                <li className="fit-facts__steps-item">
                  <strong>Identify the Thoughts:</strong> Note your thoughts.
                  Are they evidence-based or assumptions?
                </li>
                <li className="fit-facts__steps-item">
                  <strong>Consider Alternatives:</strong> Think of other
                  explanations for the situation.
                </li>
                <li className="fit-facts__steps-item">
                  <strong>Check for Distortions:</strong> Look for cognitive
                  distortions (e.g., catastrophizing).
                </li>
                <li className="fit-facts__steps-item">
                  <strong>Assess the Fit:</strong> Does your emotion match the
                  facts?
                </li>
              </ol>
            </div>
            <div className="fit-facts__section">
              <h3 className="fit-facts__subheader">Example</h3>
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
                <strong>Fit the Facts:</strong> "They’ve been responsive before,
                so they’re likely busy."
              </p>
            </div>
            <div className="fit-facts__section">
              <h3 className="fit-facts__subheader">Conclusion</h3>
              <p>
                Aligning your emotions with the facts leads to healthier
                responses. Remember, it's okay to feel, but facts can guide
                balanced reactions.
              </p>
            </div>
          </div>
          <div className="fit-facts__divider"></div>
          <button className="fit-facts__close-button" onClick={closeModal}>
            <p className="fit-facts__close-text">RETURN TO QUESTION</p>
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default FitFactsModal;
