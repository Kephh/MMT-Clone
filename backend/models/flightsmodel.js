import mongoose from "mongoose"; 
const FlightSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  flightName: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});

export default mongoose.model("flights", FlightSchema);
