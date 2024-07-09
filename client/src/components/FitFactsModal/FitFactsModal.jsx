import { useState } from "react";
import Modal from "react-modal";

function FitFactsModal({ modalIsOpen, closeModal }) {
  return (
    <div>
      <Modal
        className="fit-facts__modal"
        overlayClassName="fit-facts__overlay"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Fit Facts Modal"
      >
        <button className="fit-facts__close" onClick={closeModal}>
          Close
        </button>
        <h3>Fit the Facts</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </Modal>
    </div>
  );
}

export default FitFactsModal;
