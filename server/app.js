import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./utils/connect.js";
import router from "./routes/route.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "DELETE"]
}));

app.use(express.json());

// Routers
app.use("/api/nowfal", router);

app.use((err, _req, res, next) => {
  res.status(500).json({ message: `Internal server error ${err.message}` });
  next();
});

// Server listening
const PORT = process.env.PORT;

(async () => {
  await connect();
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
})();
