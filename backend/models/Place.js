// backend/models/Place.js
import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ['hotel', 'restaurant', 'attraction', 'hidden'] },
    description: { type: String },
    address: { type: String },
    location: {
      lat: { type: Number },
      lng: { type: Number }
    },
    contact: { type: String },
    rating: { type: Number, default: 0 },
    images: [String],
    priceRange: { type: String },
    shareableUrl: { type: String },
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true }
  },
  { timestamps: true }
);

export default mongoose.model('Place', placeSchema);
