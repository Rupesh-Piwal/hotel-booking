import express from "express";
import authMiddleware from "../Middleware/Middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/bookings");

export default router;
