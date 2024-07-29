import Flight from "../models/flightsmodel.js";
import Airport from "../models/airportmodel.js";

export const getFlights = async (req, res, next) => {
  const { from, to, ...others } = req.query;
  try {
    const allflights = await Flight.find({ ...others, from: from, to: to });
    res.status(200).json(allflights);
  } catch (err) {
    next(err);
  }
};

export const getFlightByID = async (req, res, next) => {
  try {
    const fli = await Flight.findById(req.params.id);
    res.status(200).json(fli);
  } catch (err) {
    next(err);
  }
};

export const getAirport = async (req, res, next) => {
  const { code } = req.query;
  try {
    if (code) {
      const port = await Airport.find({ code: code });
      res.status(200).json(port);
    } else {
      const allports = await Airport.find();
      res.status(200).json(allports);
    }
  } catch (err) {
    next(err);
  }
};

export const getAirportByID = async (req, res, next) => {
  try {
    const air = await Airport.findById(req.params.id);
    res.status(200).json(air);
  } catch (err) {
    next(err);
  }
};
