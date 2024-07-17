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
      return res.status(200).json({ message: "No skills favourited" });
    }
    res.json(skills);
  } catch (error) {
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

const openedSkillCounter = async (req, res) => {
  const { id: skillId } = req.params;
  const userId = req.user.id;

  try {
    await knex.raw(
      `
      INSERT INTO user_open_count (user_id, skill_id, opened_count, created_at, edited_at)
      VALUES (?, ?, 1, NOW(), NOW())
      ON DUPLICATE KEY UPDATE
      opened_count = opened_count + 1,
      edited_at = NOW();
      `,
      [userId, skillId]
    );

    res.status(200).json({ message: "Successfully incremented open count" });
  } catch (error) {
    console.error("Error incrementing opened count: ", error);
    res.status(500).json({ message: "Error incrementing opened count" });
  }
};

const getOpenedSkills = async (req, res) => {
  const userId = req.user.id;
  const { sortBy } = req.query;

  try {
    const skills = await knex("user_open_count")
      .join("skills", "user_open_count.skill_id", "skills.id")
      .select(
        "skills.id",
        "skills.name",
        "skills.tag",
        "skills.intensity",
        "skills.preview",
        "user_open_count.opened_count",
        "user_open_count.edited_at"
      )
      .where("user_open_count.user_id", userId)
      .orderBy(
        sortBy === "recent"
          ? "user_open_count.edited_at"
          : "user_open_count.opened_count",
        "desc"
      );

    if (skills.length === 0) {
      return res.status(200).json({ message: "No skills opened yet" });
    }

    res.status(200).json(skills);
  } catch (error) {
    console.error("Error fetching skills: ", error);
    res.status(500).json({ message: "Error fetching skills" });
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
  openedSkillCounter,
  getOpenedSkills,
};
