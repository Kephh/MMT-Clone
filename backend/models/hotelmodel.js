import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema(
  {
    name: { 
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hotels", HotelSchema);
