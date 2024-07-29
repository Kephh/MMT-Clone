import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema(
  {
    personname: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["H", "F"],
    },
    hotelname: {
      type: String,
    },
    hotelcity: {
      type: String,
    },
    airline: {
      type: String,
    },
    flightfrom: {
      type: String,
    },
    flightto: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Bookings", BookingSchema);

