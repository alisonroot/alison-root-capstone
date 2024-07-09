import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getAllSkills = async (req, res) => {
  try {
    const skills = await knex("skills");
    if (skills.length === 0) {
      return res
        .status(404)
        .json({ message: "No skills found for this category" });
    }
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Unable to retrieve skills" });
  }
};

const getSkillsByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const skills = await knex("skills").where({ category });
    if (skills.length === 0) {
      return res
        .status(404)
        .json({ message: "No skills found for this category" });
    }
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Unable to retrieve skills" });
  }
};

const getSkillById = async (req, res) => {
  const id = req.params.id;
  try {
    const skills = await knex("skills").where({ id });
    const skill = skills[0]
    if (!skill) {
      return res.status(404).json({ message: "No skill found"})
    }
    res.json(skill)
  } catch (error) {
    res.status(500).json({ message: "Unable to retrieve skill"})
  }
}

export { getAllSkills, getSkillsByCategory, getSkillById };
