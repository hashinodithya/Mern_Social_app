import express from 'express'

import { getPosts, createPosts, updatePost, deletePost, likePost} from '../controller/postController.js'

const router = express.Router();

router.get('/',getPosts);

router.post('/',createPosts);

router.patch('/:id',updatePost)

router.delete('/:id',deletePost)

router.patch('/:id/likePost', likePost)

export default router;