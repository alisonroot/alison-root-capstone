import express from "express";
import cors from "cors";
import "dotenv/config";
import skillsRoutes from "./routes/skills-routes.js";
import authRoutes from "./routes/auth-routes.js";
import formRoutes from "./routes/forms-routes.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.use("/skills", skillsRoutes);
app.use("/auth", authRoutes);
app.use("/forms", formRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
