import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connect(String(process.env.DB_URI));
    console.log("DataBase connected!");
  } catch (err) {
    console.error(err);
  }
};

export default connect;