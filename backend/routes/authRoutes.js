import express from "express";
import { login, logoutuser, register } from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logoutuser);

export default router;
