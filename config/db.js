import mongoose from "mongoose";

const connectToDatabase = async () => {
  console.log("Mongodb connection Initiated");
  const MONGO_URI = process.env.MONGO_URI;

  // Enable mongoose debugging
  mongoose.set("debug", true);

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB"); // Log when connected
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit process on failure
  }

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to MongoDB");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Mongoose connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected from MongoDB");
  });
};

export default connectToDatabase;
