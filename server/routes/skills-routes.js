import express from "express";
import {
  getAllSkills,
  getSkillsByCategory,
} from "../controllers/skills-controller.js";

const router = express.Router();

router.get("/", getAllSkills);

router.get("/category/:category", getSkillsByCategory);

export default router;
