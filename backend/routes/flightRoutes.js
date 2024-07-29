import express from "express";
import {
  getFlights,
  getFlightByID,
  getAirport,
  getAirportByID,
} from "../controllers/flightcontroller.js";

const router = express.Router();

router.get("/flights", getFlights);
router.get("/flights/:id", getFlightByID);
router.get("/airports", getAirport);
router.get("/airports/:id", getAirportByID);

export default router;
