import express from 'express';
import { authUser, getUserProfile, registerUser, getAllUsers, deleteUser} from '../controllers/userController.js';
import { protect, verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login',authUser);

router.route('/profile').get(protect, getUserProfile);

router.route('/').post(registerUser).get( protect, verifyAdmin, getAllUsers)

router.route('/:id').delete(protect,verifyAdmin, deleteUser)

export default router;