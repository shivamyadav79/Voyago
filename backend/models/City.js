// backend/models/City.js
import mongoose from "mongoose";

const citySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    history: { type: String },
    description: { type: String },
    image: { type: String },
    rating: { type: Number, default: 0 },
    pinCode: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("City", citySchema);
