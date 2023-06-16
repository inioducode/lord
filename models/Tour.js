import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    type:{
      type: String,
      required: true,
    },


    title: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
   
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    
    
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
