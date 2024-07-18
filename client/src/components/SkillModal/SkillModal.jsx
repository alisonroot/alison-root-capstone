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
            When you feel that your emotions seem to be in control, stop! Don’t
            react. Don’t move a muscle. Freezing for a moment helps prevent you
            from doing what your emotions want you to do (which is to act
            without thinking). Stay in control. Remember, you are the boss of
            your emotions.
          </p>
        </div>
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">Take a Step Back</h3>
          <p>
            Take a step back from the situation. Get unstuck from what is going
            on. Take a deep breath and continue breathing deeply as long as you
            need and until you are in control. Do not let your emotions control
            what you do.
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
            Ask yourself, “What do I want from this situation?” or “What are my
            goals?” or “What choice might make this situation better or worse?”
            or “What act will allow for success?” Stay calm, stay in control,
            and when you have some information and how that may impact your
            goals, you will be better prepared to deal with the situation
            effectively. Proceed with clarity and intention.
          </p>
        </div>
      </div>
    </>
  );

  const infoContent = (
    <>
      <h2 className="skill-modal__header">About DBT</h2>
      <div className="skill-modal__divider"></div>
      <div className="skill-modal__text">
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">What is DBT?</h3>
          <p>
            Dialectical Behavior Therapy (DBT) is a type of cognitive-behavioral
            therapy that focuses on helping individuals manage emotions, cope
            with stress, and improve relationships.
          </p>
        </div>
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">Wise Mind</h3>
          <p>
            Wise Mind is the balanced part of us that comprises both our
            Emotional Mind and Rational Mind. It is the place where our emotions
            and reason work together to make decisions.
          </p>
        </div>
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">Core Skills</h3>
          <p>
            <strong>Mindfulness:</strong> Being present in the moment and aware
            of your thoughts, feelings, and surroundings without judgment.
          </p>
          <p>
            <strong>Distress Tolerance:</strong> Managing and surviving crises
            without making the situation worse.
          </p>
          <p>
            <strong>Emotion Regulation:</strong> Understanding and reducing
            vulnerability to intense emotions and changing unwanted emotions.
          </p>
          <p>
            <strong>Interpersonal Effectiveness:</strong> Navigating
            relationships and interactions with others in a healthy and balanced
            way.
          </p>
        </div>
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">Why Use DBT?</h3>
          <p>
            DBT skills can help you handle emotional distress, improve
            relationships, and create a life worth living by promoting
            acceptance and change.
          </p>
        </div>
        <div className="skill-modal__section">
          <h3 className="skill-modal__subheader">Conclusion</h3>
          <p>
            Embracing DBT can lead to significant improvements in emotional
            regulation, distress tolerance, interpersonal skills, and overall
            mental health.
          </p>
        </div>
      </div>
    </>
  );

  let modalContent;
  if (modalType === "check-facts") {
    modalContent = checkFactsContent;
  } else if (modalType === "stop") {
    modalContent = stopContent;
  } else {
    modalContent = infoContent;
  }

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
