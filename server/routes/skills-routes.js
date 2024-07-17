import express from "express";
import {
  getAllSkills,
  // getSkillsByCategory,
  // getSkillsByIntensity,
  getFavouritedSkills,
  getSkillById,
  favouriteSkill,
  unfavouriteSkill,
  openedSkillCounter,
  getOpenedSkills,
} from "../controllers/skills-controller.js";
import authorize from "../middleware/auth-middleware.js";

const router = express.Router();

// get all skills (includes queries for sorting)
router.get("/", authorize, getAllSkills);
router.get("/favourites", authorize, getFavouritedSkills);

// routes for open counts
router.post("/:id/opencount", authorize, openedSkillCounter);
router.get("/opencount", authorize, getOpenedSkills);

// routes for favouriting and unfavouriting
router.post("/:id/favourite", authorize, favouriteSkill);
router.delete("/:id/unfavourite", authorize, unfavouriteSkill);

// get specific skill
router.get("/:id", authorize, getSkillById);

export default router;
