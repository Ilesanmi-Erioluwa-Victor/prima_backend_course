import express from 'express';
import { sign_up } from '../controllers/post';
const router = express.Router();

router.post('signup',sign_up );
export default router;
