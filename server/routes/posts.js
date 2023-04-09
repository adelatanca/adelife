import express from 'express';
import {
  deletePost,
  getFeedPosts,
  getUserPosts,
  likePost,
} from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getFeedPosts);
router.get('/:userId/posts', verifyToken, getUserPosts);

router.patch('/:id/like', verifyToken, likePost);

router.delete('/:userId/delete-post/:postId', verifyToken, deletePost);

export default router;
