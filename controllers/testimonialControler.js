import Testimonial from "../models/testimonials.js";

export const createTestimonial = async (req, res) => {
  try {
    const newTestimonial = await Testimonial.create(req.body);

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: newTestimonial,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Please try again.",
    });
  }
};

export const getSingleTestimonial = async (req, res) => {
  const id = req.params.id;

  try {
    const testimonial = await Testimonial.findById(id).populate("reviews");

    if (!testimonial) {
      res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Success",
        data: testimonial,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

export const getAllTestimonial = async (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const limit = 8;

  try {
    const testimonials = await Testimonial.find({})
      .skip(page * limit)
      .limit(limit);

    res.status(200).json({
      success: true,
      count: testimonials.length,
      message: "Success",
      data: testimonials,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,

    });
  }
};
