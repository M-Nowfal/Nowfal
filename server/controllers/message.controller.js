import messageModel from "../models/messageModel.js";
import nodemailer from "nodemailer";

export const getMessages = async (_req, res, next) => {
  try {
    const messages = await messageModel.find();
    res.status(200).json({ messages });
  } catch (err) {
    next(err);
  }
};

export const addMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    await messageModel.create({ name, email, message });
    res.status(201).json({ message: "Message Sent successfully!" });
  } catch (err) {
    next(err);
  }
};

export const deleteMessage = async (req, res, next) => {
  try {
    const { id } = req.body;
    await messageModel.findByIdAndDelete(id);
    res.status(201).json({ message: "Message deleted successfully!" });
  } catch (err) {
    next(err);
  }
};

export const replyToMessage = async (req, res, next) => {
  try {
    const { email, replyMsg, senderName } = req.body;

    const mailOptions = {
      from: `Nowfal <${process.env.ADMIN_EMAIL}>`,
      to: email,
      subject: "Thank you for reaching out!",
      text: replyMsg,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #2563eb;">Thank you for your message, ${senderName || 'there'}!</h2>
          <p>I appreciate you taking the time to contact me. Here's my response to your inquiry:</p>
          
          <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <p style="font-style: italic;">"${replyMsg}"</p>
          </div>
          
          <p>If you have any further questions, please don't hesitate to reply to this email.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p>Best regards,</p>
            <p style="font-weight: bold;">Nowfal</p>
            <p style="color: #64748b; font-size: 14px;">${process.env.ADMIN_EMAIL}</p>
          </div>
        </div>
      `
    };
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASS
      }
    });
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Reply sent successfully" });
  } catch (err) {
    console.log(err);
    next(err);
  }
}
