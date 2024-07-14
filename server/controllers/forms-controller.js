import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const userId = req.user.id;

const createForm = async (req, res) => {
  const { id: user_id } = req.user;

  try {
    await knex("emergency_plan").insert({ user_id });
    res.status(201).json({ message: "Form added successfully" });
  } catch (error) {
    console.error("Error adding form: ", error);
    res.status(500).json({ message: "Unable to add form" });
  }
};

const updateForm = async (req, res) => {
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

const getForm = async (req, res) => {
  const { id: user_id } = req.user;

  try {
    const forms = await knex("emergency_plan").where({ user_id });
    res.status(200).json({ forms });
  } catch (error) {
    console.error("Error fetching forms: ", error);
    res.status(500).json({ message: "Unable to fetch forms" });
  }
};

export { createForm, updateForm, getForm };
