import mongoose from "mongoose";

let connection = { isConnected: false };

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGO);

    connection.isConnected = db.connections[0].readyState;
    console.log( "MongoDB Connected");
  } catch (error) {
    console.error(" MongoDB Connection Error:", error);
    throw new Error(error.message);
  }
};
