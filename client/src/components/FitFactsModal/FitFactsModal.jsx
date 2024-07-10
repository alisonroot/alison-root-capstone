import Modal from "react-modal";
import "./FitFactsModal.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function FitFactsModal({ isOpen, closeModal }) {
  return (
    <div>
      <Modal
        className="fit-facts__modal"
        overlayClassName="fit-facts__overlay"
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Fit Facts Modal"
      >
        <button className="fit-facts__close-button" onClick={closeModal}>
          <CloseOutlinedIcon />
        </button>
        <div className="fit-facts__content">
          <h3>Fit the Facts</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </Modal>
    </div>
  );
}

export default FitFactsModal;
