import express from "express";
import Survey from "../models/survey.js";
const router = express.Router();

// POST route to save survey data
router.post("/submit", async (req, res) => {
  try {
    const surveyData = new Survey(req.body);
    await surveyData.save();
    res.status(201).json({ message: "Survey data saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save survey data" });
  }
});

export default router;
