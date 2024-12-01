import mongoose from "mongoose";

const MONGO_URI = "your-mongo-uri-here"; // Replace with your URI

mongoose.set("debug", true);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Standalone connection successful!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Standalone connection failed:", err);
  });
