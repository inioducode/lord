import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
    },

    text: {
      type: String,
      required: true,
    },
    
    photo: {
        type: String,
        required: false,
    } 
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);
