import express from 'express'
import { customerInformation } from '../controller/customerController.js';
const router= express.Router();

router.post('/customer', customerInformation)
export default router;