import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./FilterQuestion.scss";
import questions from "../../data/filter-questions.json"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

function FilterQuestion() {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const [questionData, setQuestionData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const question = questions.find((q) => q.id === questionId);
    if (question) {
      setQuestionData(question);
    }
  }, [questionId]);

  const openFitFactsModal = () => {
    console.log("Opening fit facts modal");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (!questionData) {
    return <span>Loading question</span>;
  }

  return (
    <div className="filter-question">
      <Link to={"/"}>
<ArrowBackIcon />
</Link>
      <div className="filter-question__container">
      <h3 className="filter-question__explanation-text">{questionData.explanation}</h3>
      <h2 className="filter-question__question-text">{questionData.question}</h2>
      <div className="filter-question__button-container">
        <Button
        extraClass="filter-question__button"
          buttonText={questionData.button1}
          onClick={() => navigate(questionData.button1path)}
        />
        <Button
        extraClass="filter-question__button"
          buttonText={questionData.button2}
          onClick={() => navigate(questionData.button2path)}
        />
      </div>
      {questionData.extraButton && (
        <Button
        extraClass="filter-question__modal-button"
          buttonText={questionData.extraButtonText}
          onClick={openFitFactsModal}
        />
      )}
      <FitFactsModal isOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
}

export default FilterQuestion;
