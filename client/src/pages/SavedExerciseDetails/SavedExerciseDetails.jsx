import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "./SavedExerciseDetails.scss";

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
          <h1 className="saved-exercise-details__header">
            {exercise.exerciseType}
          </h1>
        </div>
        <p>Created on {new Date(exercise.created_at).toLocaleDateString()}</p>
      </div>
      <div className="saved-exercise-details">
        {Object.keys(exercise).map((key) => (
          <TextField
            key={key}
            label={key}
            value={exercise[key]}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            margin="normal"
          />
        ))}
      </div>
    </div>
  );
}

export default SavedExerciseDetails;
