import express from "express";
import {
  registerNewUser,
  logInUser,
  getUserProfile,
} from "../controllers/auth-controller.js";

const router = express.Router();

router.post("/register", registerNewUser);

router.post("/login", logInUser);

router.get("/profile", getUserProfile);

export default router;
