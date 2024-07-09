import express from "express";
import {
  getAllSkills,
  getSkillsByCategory, 
  getSkillById
} from "../controllers/skills-controller.js";

const router = express.Router();

router.get("/", getAllSkills);

router.get("/category/:category", getSkillsByCategory);

router.get("/:id", getSkillById)

export default router;
