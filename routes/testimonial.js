import express from "express";


import {
  createTestimonial,
  getSingleTestimonial,
  getAllTestimonial ,
  
} from "../controllers/testimonialControler.js";


const router = express.Router();

// Create new testimonial
router.post("/", createTestimonial);

// Update testimonial
router.put("/:id", getSingleTestimonial);

// Get all testimonial
router.get("/", getAllTestimonial );



export default router;
