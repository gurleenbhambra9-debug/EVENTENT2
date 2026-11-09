import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import { getAdminDashboard } from "../controller/adminController.js";

const router = express.Router();

router.get("/", authMiddleware, adminMiddleware, getAdminDashboard);

export default router;