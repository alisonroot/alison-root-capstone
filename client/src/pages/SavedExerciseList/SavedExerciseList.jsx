import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SavedExerciseList.scss";

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
    <div className="saved-exercise-list">
      <h1>Your Saved Exercises</h1>
      <div className="saved-exercise-list__container">
        {exercises.length > 0 ? (
          exercises.map((exercise) => (
            <div className="saved-exercise-list__item" key={exercise.id}>
              <Link to={`/exercises/saved/${exercise.formType}/${exercise.id}`}>
                <div className="saved-exercise-list__details">
                  <p>{exercise.exerciseType}</p>
                  <p>
                    Date Created:{" "}
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
  );
}

export default SavedExercises;
