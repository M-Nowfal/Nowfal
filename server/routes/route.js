import express from "express";
import {
  addMessage, deleteMessage, 
  getMessages, replyToMessage
} from "../controllers/message.controller.js";
import { checkAdmin } from "../controllers/admin.controller.js";
import { getViewsCount, increaseViewCount } from "../controllers/view.controller.js";

const router = express.Router();

router.route("/admin").post(checkAdmin);

router.route("/messages").get(getMessages).post(addMessage).delete(deleteMessage);
router.route("/reply").post(replyToMessage);

router.route("/increaseviews").patch(increaseViewCount);
router.route("/getviews").get(getViewsCount);

export default router;
