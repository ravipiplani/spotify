import express from 'express';
import songController from '../controllers/songController';

const router = express.Router();

router.get('/api/v1/songs', songController.index);
router.get('/api/v1/songs/:id', songController.show);
router.post('/api/v1/search', songController.search);

export default router;