import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getAllSkills = async (req, res) => {
  try {
    const skills = await knex("skills")
      .select("skills.*", "favourited_skills.id as favourite_id")
      .leftJoin("favourited_skills", function () {
        this.on("skills.id", "=", "favourited_skills.skill_id").andOn(
          "favourited_skills.user_id",
          "=",
          req.user.id
        );
      });

    if (skills.length === 0) {
      return res.status(404).json({ message: "No skills found" });
    }
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Unable to retrieve skills" });
  }
};

const getSkillsByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const skills = await knex("skills")
      .select("skills.*", "favourited_skills.id as favourite_id")
      .leftJoin("favourited_skills", function () {
        this.on("skills.id", "=", "favourited_skills.skill_id").andOn(
          "favourited_skills.user_id",
          "=",
          req.user.id
        );
      })
      .where({ category });

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

const getSkillsByIntensity = async (req, res) => {
  const intensity = req.params.intensity;
  try {
    const skills = await knex("skills")
      .select("skills.*", "favourited_skills.id as favourite_id")
      .leftJoin("favourited_skills", function () {
        this.on("skills.id", "=", "favourited_skills.skill_id").andOn(
          "favourited_skills.user_id",
          "=",
          req.user.id
        );
      })
      .where({ intensity });

    if (skills.length === 0) {
      return res
        .status(404)
        .json({ message: "No skills found for this intensity level" });
    }
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Unable to retrieve skills" });
  }
};

const getFavouritedSkills = async (req, res) => {
  try {
    const skills = await knex("skills")
      .select("skills.*", "favourited_skills.id as favourite_id")
      .leftJoin("favourited_skills", function () {
        this.on("skills.id", "=", "favourited_skills.skill_id").andOn(
          "favourited_skills.user_id",
          "=",
          req.user.id
        );
      })
      .whereNotNull("favourited_skills.id");

    if (skills.length === 0) {
      return res.status(404).json({ message: "No skills found" });
    }
    res.json(skills);
  } catch (error) {
    console.error("Error retrieving favourite skills:", error);
    res.status(500).json({ message: "Unable to retrieve favourite skills" });
  }
};

const getSkillById = async (req, res) => {
  const id = req.params.id;
  try {
    const skills = await knex("skills")
      .select("skills.*", "favourited_skills.id as favourite_id")
      .leftJoin("favourited_skills", function () {
        this.on("skills.id", "=", "favourited_skills.skill_id").andOn(
          "favourited_skills.user_id",
          "=",
          req.user.id
        );
      })
      .where({ "skills.id": id });

    const skill = skills[0];
    if (!skill) {
      return res.status(404).json({ message: "No skill found" });
    }
    res.json(skill);
  } catch (error) {
    console.error("Error retrieving skill:", error);
    res.status(500).json({ message: "Unable to retrieve skill" });
  }
};

const favouriteSkill = async (req, res) => {
  const { id: skillId } = req.params;
  try {
    await knex("favourited_skills").insert({
      user_id: req.user.id,
      skill_id: skillId,
    });
    res.status(201).json({ message: "Skill favourited successfully" });
  } catch (error) {
    console.error("Error favouriting skill: ", error);
    res.status(500).json({ message: "Unable to favourite skill" });
  }
};

const unfavouriteSkill = async (req, res) => {
  const { id: skillId } = req.params;
  try {
    await knex("favourited_skills")
      .where({
        user_id: req.user.id,
        skill_id: skillId,
      })
      .del();
    res.status(200).json({ message: "Skill unfavourited successfully" });
  } catch (error) {
    res.status(500).json({ message: "Unable to unfavourite skill" });
  }
};

export {
  getAllSkills,
  getSkillsByCategory,
  getSkillsByIntensity,
  getFavouritedSkills,
  getSkillById,
  favouriteSkill,
  unfavouriteSkill,
};
