import express from "express";
import {
  getBooking,
  createBooking,
  deleteBooking,
} from "../controllers/bookingcontroller.js";

const router = express.Router();

router.get("/", getBooking);
router.post("/", createBooking);
router.delete("/:id", deleteBooking);

export default router;
