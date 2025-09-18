import mongoose from "mongoose";

const viewCountSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const viewCountModel = mongoose.models.ViewCount || mongoose.model("ViewCount", viewCountSchema);

export default viewCountModel;
