import express from "express";
import {
  createTour,
  deleteTour,
  updateTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  getStudy,
  getWork,
  getothers,
  getTourist
} from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create new tour
router.post("/", verifyAdmin, createTour);

// Update tour
router.put("/:id", verifyAdmin, updateTour);

// Delete tour
router.delete("/:id", verifyAdmin, deleteTour);

// Get single tour
router.get("/:id", getSingleTour);

// Get all tours
router.get("/", getAllTour);

// Get tour by search
router.get("/search", getTourBySearch);
router.get("/search/featured", getFeaturedTour);
router.get("/search/studyvisa", getStudy);
router.get("/search/workvisa", getWork);
router.get("/search/others", getothers);
router.get("/search/tourist", getTourist);
router.get("/search/count", getTourCount);

export default router;
