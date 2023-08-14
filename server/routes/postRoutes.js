import express from 'express';
const router = express.Router();
import { getPosts, createPosts } from '../controllers/postController.js';

router.route('/').get(getPosts).post(createPosts);

export default router;