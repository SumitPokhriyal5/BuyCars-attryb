import express from 'express';
import { userSignin, userSignUp } from '../controllers/User.controller.js';

const userRouter = express.Router();

userRouter.post("/signin", userSignin);
userRouter.post("/signup", userSignUp);

export default userRouter;