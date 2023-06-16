import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Tour",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: false,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Review", reviewSchema);
