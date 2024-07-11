import express from "express";

const router = express.Router();

router.post("r/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Please enter the required fields");
  }
});

export default router;
