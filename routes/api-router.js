import express from 'express';
import { getAllMessages, addNewMessage } from '../controllers/msg-api-controller.js';
import { getAllLabs } from '../controllers/exam-api-controller.js';

const router = express.Router();

router.route('/messages')
.get(getAllMessages)
.post(addNewMessage);

router.route('/labs')
.get(getAllLabs);

export default router;