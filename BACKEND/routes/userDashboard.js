import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getUserDashboard } from "../controller/userDashboardController.js";

const router = express.Router();

router.get("/", authMiddleware, getUserDashboard);

export default router;