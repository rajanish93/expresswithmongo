import express from 'express';
import {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
} from '../controllers/blogController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createBlog);
router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.put('/:id', authMiddleware, updateBlog);
router.delete('/:id', authMiddleware, deleteBlog);

export default router;
