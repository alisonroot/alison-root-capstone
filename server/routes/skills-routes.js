import express from "express";
import {
  getAllSkills,
  getSkillsByCategory,
  getSkillById,
  favouriteSkill,
  unfavouriteSkill,
} from "../controllers/skills-controller.js";
import authorize from "../middleware/auth-middleware.js";

const router = express.Router();

router.get("/", authorize, getAllSkills);
router.get("/category/:category", authorize, getSkillsByCategory);
router.get("/:id", authorize, getSkillById);

router.post("/:id/favourite", authorize, favouriteSkill);
router.delete("/:id/unfavourite", authorize, unfavouriteSkill);

export default router;
