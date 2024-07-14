import express from "express";
import {
  createForm,
  updateForm,
  getForm,
} from "../controllers/forms-controller.js";
import authorize from "../middleware/auth-middleware.js";

const router = express.Router();

router.post("/", authorize, createForm);
router.put("/:formId", authorize, updateForm);
router.get("/:userId", authorize, getForm);

export default router;
