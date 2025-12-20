import mongoose from "mongoose"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed ")
    console.error(error.message)
  }
};

export default connectDB






