import express from "express";
import {
  createForm,
  updateEmergencyPlan,
  getEmergencyPlan,
  getAllExercises,
  getExerciseById,
  deleteExercise,
} from "../controllers/forms-controller.js";
import authorize from "../middleware/auth-middleware.js";

const router = express.Router();

// create new entry of any of the three types of plans
router.post("/:formType", authorize, createForm);

// update and get emergency
router.put("/emergency/:formId", authorize, updateEmergencyPlan);
router.get("/emergency", authorize, getEmergencyPlan);

// get all entries for both exercises together in a sorted array
router.get("/exercises", authorize, getAllExercises);

// get or delete a specific exercise
router.get("/:formType/:formId", getExerciseById);
router.delete("/:formType/:formId", deleteExercise);

export default router;
