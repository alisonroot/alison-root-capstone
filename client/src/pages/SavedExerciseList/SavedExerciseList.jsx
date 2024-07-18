import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SavedExerciseList.scss";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const API_URL = import.meta.env.VITE_API_URL;

function SavedExercises() {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);

  const fetchExercises = async () => {
    try {
      const authToken = sessionStorage.getItem("token");

      const { data } = await axios.get(`${API_URL}/forms/exercises`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setExercises(data.exercises);
    } catch (error) {
      console.error("Error fetching exercises", error);
      setError("Failed to fetch exercises. Please try again later.");
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="exercise-list">
      <div className="exercise-list__header">
        <h1 className="exercise-list__title">Exercises</h1>
      </div>
      <div className="exercise-list__container">
        <div className="exercise-list__form-container">
          <Link className="exercise-list__form-link" to={"/exercises/feelings"}>
            <div className="exercise-list__form-top">
              <h3 className="exercise-list__form-type">Model of Emotions</h3>
              <EditRoundedIcon className="exercise-list__edit-icon" />
            </div>
            <p className="exercise-list__form-explanation">
              Understand and describe your emotions
            </p>
          </Link>
          <Link
            className="exercise-list__form-link"
            to={"/exercises/behaviour"}
          >
            <div className="exercise-list__form-top">
              <h3 className="exercise-list__form-type">
                Behaviour Chain Analysis
              </h3>
              <EditRoundedIcon className="exercise-list__edit-icon" />
            </div>

            <p className="exercise-list__form-explanation">
              What events led to this behaviour?
            </p>
          </Link>
        </div>
        <div className="exercise-list__saved">
          <h2 className="exercise-list__section-header">
            Your Saved Exercises
          </h2>
          {exercises.length > 0 ? (
            exercises.map((exercise) => (
              <div className="exercise-list__item" key={exercise.id}>
                <Link
                  className="exercise-list__link"
                  to={`/exercises/saved/${exercise.formType}/${exercise.id}`}
                >
                  <div className="exercise-list__details">
                    <p className="exercise-list__type">
                      {exercise.exerciseType}
                    </p>
                    <p className="exercise-list__date">
                      Completed on{" "}
                      {new Date(exercise.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>You haven't saved any exercises yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SavedExercises;
