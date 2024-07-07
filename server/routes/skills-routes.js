import express from "express";
import { getSkillsByCategory } from "../controllers/skills-controller.js";

const router = express.Router();

router.get("/category/:category", getSkillsByCategory);

export default router;
