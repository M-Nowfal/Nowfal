import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now }
});

const messageModel = mongoose.models.Message || mongoose.model("Message", messageSchema);

export default messageModel;
