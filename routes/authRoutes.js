import express from 'express';
import {
    register,
    login,
    forgotPassword,
    resetPassword,
    updateProfile,
} from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.put('/profile', authMiddleware, updateProfile);

export default router;
