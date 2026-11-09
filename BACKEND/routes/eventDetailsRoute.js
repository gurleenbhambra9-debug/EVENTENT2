import { createEventDetails, getEventDetails } from "../controller/eventDetailsController.js";
import express from 'express';
const router= express.Router();
import authMiddle from '../middleware/authmiddleware.js';

router.post('/eventdetails', authMiddle, createEventDetails);
router.get('/eventdetails', authMiddle, getEventDetails);
export default router;