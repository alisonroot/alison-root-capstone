import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "./SavedExerciseDetails.scss";
import exerciseQuestions from "../../data/exercise-questions.json";

const API_URL = import.meta.env.VITE_API_URL;

function SavedExerciseDetails() {
  const { formType, formId } = useParams();
  const navigate = useNavigate();
  const [exercise, setExercise] = useState(null);
  const [error, setError] = useState(null);

  const fetchExerciseById = async (formType, formId) => {
    try {
      const authToken = sessionStorage.getItem("token");

      const { data } = await axios.get(
        `${API_URL}/forms/${formType}/${formId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setExercise(data);
    } catch (error) {
      console.error("Couldn't get exercise", error);
      setError("Failed to fetch exercise. Please try again later.");
    }
  };

  useEffect(() => {
    fetchExerciseById(formType, formId);
  }, [formType, formId]);

  if (!exercise) {
    return <p>Loading...</p>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  let questionKey;
  if (formType === "behaviour") {
    questionKey = "behaviourSolutionAnalysis";
  } else if (formType === "feelings") {
    questionKey = "feelingsModel";
  } else {
    console.error("Invalid formType:", formType);
    return <p>Invalid formType</p>;
  }

  // console.log(exercise);

  const { data, exerciseType, created_at } = exercise;

  const questions = exerciseQuestions[questionKey] || [];

  console.log("formType:", formType);
  console.log("exerciseQuestions:", exerciseQuestions);
  console.log("questions:", questions);

  return (
    <div className="saved-exercise-details">
      <div className="saved-exercise-details__header">
        <div className="saved-exercise-details__header-text">
          <button
            className="saved-exercise-details__back-button"
            onClick={handleBackClick}
          >
            <ArrowBackRoundedIcon className="saved-exercise-details__back-icon" />
          </button>
          <div>
            <h1 className="saved-exercise-details__title">{exerciseType}</h1>
            <p className="saved-exercise-details__date">
              Completed on {new Date(created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="saved-exercise-details__input-section">
        <div className="saved-exercise-details__container">
          {questions.map((question) => (
            <TextField
              key={question.title}
              label={question.title}
              helperText={question.helperText}
              value={data[question.id]}
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              margin="normal"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SavedExerciseDetails;
