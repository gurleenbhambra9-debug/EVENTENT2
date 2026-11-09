import express from 'express'
import { createRequirements, getRequirements } from '../controller/requirementsController.js'
const router= express.Router()
import authMiddle from '../middleware/authMiddleware.js'

router.post('/requirements', authMiddle, createRequirements)
router.get('/getrequirements', authMiddle, getRequirements)
export default router;