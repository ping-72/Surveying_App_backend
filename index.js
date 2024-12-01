import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectToDatabase from "./config/db.js";
import surveyRoutes from "./routes/surveyRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Hello from Nodejs server");
});

app.use("/api/survey", surveyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
