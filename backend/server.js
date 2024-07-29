import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoutes.js";
import usersRoute from "./routes/userRoutes.js";
import hotelsRoute from "./routes/hotelRoutes.js";
import bookingsRoute from "./routes/bookingRoutes.js";
import flightRoute from "./routes/flightRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./db/connectdb.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB(); //Connect MongoDB

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/booking", bookingsRoute);
app.use("/api/air", flightRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

app.listen(port, () => console.log(`> Server running on port ${port}`));
