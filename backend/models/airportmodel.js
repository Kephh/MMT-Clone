import mongoose from "mongoose";
const AirportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("airports", AirportSchema);

