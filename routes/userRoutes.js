import express from 'express';
import { updateProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.put('/update-profile', protect, updateProfile);

export default router;
