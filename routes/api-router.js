import express from 'express';
import passport from 'passport';
import { getAllMessages, addNewMessage, updateMessage, deleteMessage } from '../controllers/msg-api-controller.js';
import { getAllLabs } from '../controllers/exam-api-controller.js';
import { registerNewUser, logInUser } from '../controllers/user-api-controller.js';

const router = express.Router();

router.route('/messages')
.get(getAllMessages)
.post(passport.authenticate('jwt', { session: false }), addNewMessage);

router.route('/users')
.post(registerNewUser);

router.route('/login')
.post(passport.authenticate('local', {session: false}), logInUser);

router.route('/labs')
.get(getAllLabs);

router.route('/messages/:messageId')
.patch(passport.authenticate('jwt', { session: false }), updateMessage)
.delete(passport.authenticate('jwt', { session: false }), deleteMessage)

export default router;