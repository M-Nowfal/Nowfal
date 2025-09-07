import express from "express";
import {
  addMessage, checkAdmin,
  deleteMessage, getMessages,
  replyToMessage
} from "../controllers/message.controller.js";

const router = express.Router();

router.route("/admin").post(checkAdmin);
router.route("/messages").get(getMessages).post(addMessage).delete(deleteMessage);
router.route("/reply").post(replyToMessage);

export default router;
