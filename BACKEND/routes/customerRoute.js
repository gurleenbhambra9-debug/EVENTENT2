import express from 'express'
import { customerInformation, getCustomerInformation } from '../controller/customerController.js';
import authMiddle from '../middleware/authmiddleware.js'
const router= express.Router();

router.post('/customer', authMiddle, customerInformation)
router.get('/getcustomer', authMiddle, getCustomerInformation)
export default router;