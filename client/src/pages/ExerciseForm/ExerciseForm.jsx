import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ExerciseForm.scss";
import TextField from "@mui/material/TextField";
import ButtonColour from "../../components/ButtonColour/ButtonColour";
import exerciseQuestions from "../../data/exercise-questions.json";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const API_URL = import.meta.env.VITE_API_URL;

function ExercisePage() {
  const navigate = useNavigate();
  const { formType } = useParams();
  const [formData, setFormData] = useState({});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (formType === "behaviour") {
      setQuestions(exerciseQuestions.behaviourSolutionAnalysis);
    } else if (formType === "feelings") {
      setQuestions(exerciseQuestions.feelingsModel);
    }
  }, [formType]);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const authToken = sessionStorage.getItem("token");

      await axios.post(`${API_URL}/forms/${formType}`, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      alert("Exercise saved successfully");

      navigate("/exercises");
    } catch (error) {
      console.error("Error submitting exercise:", error);
      alert("Couldn't save exercise. Please try again.");
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <form className="exercise-form" onSubmit={handleSubmit}>
      <div className="exercise-form__header">
        <div className="skill-details__header-text">
          <button
            className="emergency-page__back-button"
            onClick={handleBackClick}
          >
            <ArrowBackRoundedIcon className="emergency-page__back-icon" />
          </button>
          <h1 className="exercise-form__title">
            {" "}
            {formType === "behaviour"
              ? "Behaviour Chain Analysis"
              : "Model of Emotions"}
          </h1>
        </div>
      </div>
      <div className="exercise-form__input-section">
        <div className="exercise-form__container">
          {questions.map((question) => (
            <TextField
              key={question.id}
              multiline
              rows={4}
              variant="outlined"
              label={question.title}
              helperText={question.helperText}
              className="exercise-form__input"
              id={question.id}
              value={formData[question.id] || ""}
              onChange={handleInputChange}
            />
          ))}
        </div>
        <ButtonColour
          onClick={handleSubmit}
          buttonText="Save"
          extraClass="exercise-form__submit-button"
          type="submit"
        />
      </div>
    </form>
  );
}

export default ExercisePage;
