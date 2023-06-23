import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";
import testimonialRoute from "./routes/testimonial.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const corsOptions = {
  origin: true,
  credentials: true,
};

// Database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed");
  }
};

connect(); // Call the connect function to establish the database connection

// Middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "/build"))); // Adjusted the path to the client build folder
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/reviews", reviewRoute); // Adjusted the route path for reviews
app.use("/api/v1/bookings", bookingRoute); // Adjusted the route path for bookings
app.use("/api/v1/testimonials", testimonialRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html")); // Adjusted the path to the client build index.html
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Listening for requests");
});
