import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    //await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(`> Successfully connnected to mongoDB`);
  } catch (error) {
    console.error(`> ERROR: ${error.message}`);
  }
};

export default connectDB;
