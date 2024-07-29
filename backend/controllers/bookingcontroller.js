import Booking from "../models/bookingmodel.js";

export const createBooking = async (req, res, next) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json(savedBooking);
  } catch (err) {
    next(err);
  }
};

export const getBooking = async (req, res, next) => {
  const { person } = req.query;
  try {
    const booking = await Booking.find({ personname: person });
    res.status(200).json(booking);
  } catch (err) {
    next(err);
  }
};

export const deleteBooking = async (req, res, next) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Booking has been deleted.");
  } catch (err) {
    next(err);
  }
};