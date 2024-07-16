import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const createForm = async (req, res) => {
  const { formType } = req.params;
  const formData = req.body;

  try {
    let table;
    switch (formType) {
      case "emergency":
        table = "emergency_plan";
        break;
      case "behaviour":
        table = "behaviour_solution_analysis";
        break;
      case "feelings":
        table = "feelings_model";
        break;
      default:
        return res.status(400).json({ message: "Invalid form type" });
    }

    await knex(table).insert({
      user_id: req.user.id,
      ...formData,
    });

    res.status(201).json({ message: "Form added successfully" });
  } catch (error) {
    console.error("Error adding form: ", error);
    res.status(500).json({ message: "Unable to add form" });
  }
};

const updateEmergencyPlan = async (req, res) => {
  const { formId } = req.params;
  const formData = req.body;

  try {
    await knex("emergency_plan")
      .where({ id: formId })
      .update({ ...formData });
    res.status(200).json({ message: "Form updated successfully" });
  } catch (error) {
    console.error("Error updating form: ", error);
    res.status(500).json({ message: "Unable to update form" });
  }
};

const getEmergencyPlan = async (req, res) => {
  const { id: user_id } = req.user;

  try {
    const forms = await knex("emergency_plan").where({ user_id });
    res.status(200).json({ forms });
  } catch (error) {
    console.error("Error fetching forms: ", error);
    res.status(500).json({ message: "Unable to fetch forms" });
  }
};

const getAllExercises = async (req, res) => {
  const { id: user_id } = req.user;

  try {
    const behaviourSolutionAnalysis = await knex("behaviour_solution_analysis")
      .where({ user_id })
      .select(
        "*",
        knex.raw("'Behaviour and Solution Analysis' as exerciseType"),
        knex.raw("'behaviour' as formType")
      );

    const feelingsModel = await knex("feelings_model")
      .where({ user_id })
      .select(
        "*",
        knex.raw("'Feelings Model' as exerciseType"),
        knex.raw("'feelings' as formType")
      );

    const exercises = [...behaviourSolutionAnalysis, ...feelingsModel].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    res.status(200).json({ exercises });
  } catch (error) {
    console.error("Error fetching exercises: ", error);
    res.status(500).json({ message: "Unable to fetch exercises" });
  }
};

const getExerciseById = async (req, res) => {
  const { formType, formId } = req.params;

  try {
    let table;
    switch (formType) {
      case "behaviour":
        table = "behaviour_solution_analysis";
        break;
      case "feelings":
        table = "feelings_model";
        break;
      default:
        return res.status(400).json({ message: "Invalid form type" });
    }

    const exercise = await knex(table).where({ id: formId }).first();

    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    const exerciseType =
      formType === "behaviour"
        ? "Behaviour and Solution Analysis"
        : "Feelings Model";

    res.status(200).json({ ...exercise, exerciseType, formType });
  } catch (error) {
    console.error("Error fetching exercise: ", error);
    res.status(500).json({ message: "Unable to fetch exercise" });
  }
};

const deleteExercise = async (req, res) => {
  const { formType, formId } = req.params;

  try {
    let table;
    switch (formType) {
      case "behaviour":
        table = "behaviour_solution_analysis";
        break;
      case "feelings":
        table = "feelings_model";
        break;
      default:
        return res.status(400).json({ message: "Invalid form type" });
    }

    await knex(table).where({ id: formId }).del();
    res.status(200).json({ message: "Form deleted successfully" });
  } catch (error) {
    console.error("Error deleting form: ", error);
    res.status(500).json({ message: "Unable to delete form" });
  }
};

export {
  createForm,
  updateEmergencyPlan,
  getEmergencyPlan,
  getAllExercises,
  getExerciseById,
  deleteExercise,
};
