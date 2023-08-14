import express from 'express';
const router = express.Router();

import { getDalle, createImage } from '../controllers/dalleController.js';

router.route('/').get(getDalle);
router.route('/').post(createImage);

export default router;