import express from 'express';
import { authUser, getUserProfile, registerUser, getAllUsers} from '../controllers/userController.js';
import { protect, verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login',authUser);

router.route('/profile').get(protect, getUserProfile);

router.route('/').post(registerUser).get( protect, verifyAdmin, getAllUsers)

export default router;