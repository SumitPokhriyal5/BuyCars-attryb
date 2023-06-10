import { Request, Response } from 'express';
import { UserModel } from '../models/User.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Sign-in for users
const userSignin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(403).send({ message: 'Provide proper data for signin' });
    return;
  }

  try {
    const matchedUser = await UserModel.findOne({ email });
    if (matchedUser) {
      bcrypt.compare(password, matchedUser.password, function (err, result) {
        if (result) {
          const token = jwt.sign(
            {
              userId: matchedUser._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: '7d' }
          );
          res.status(200).send({
            message: 'Login successful',
            user: {
              id: matchedUser._id,
              name: matchedUser.username,
              token,
            },
          });
        } else {
          res.status(400).send({ message: 'Wrong Password!', error: err });
        }
      });
    } else {
      res.status(404).send({ message: 'User not found!' });
    }
  } catch (error) {
    res.status(500).send({
      message: 'Internal server error!',
      error: error.message,
    });
  }
};

// Sign-up for users
const userSignUp = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  // if username, email or password, any thing missing then reject the request
  if (!username || !email || !password) {
    res.status(403).send({ message: 'Provide proper data for signup' });
    return;
  }

  try {
    const matchedUsers = await UserModel.find({ email });
    if (matchedUsers.length) {
      res.status(200).send({
        message: 'User already exists!',
      });
    } else {
      bcrypt.hash(password, process.env.SALT_ROUND, async function (err, hash) {
        if (err) {
          res.status(500).send({
            message: 'error in bcrypt',
            error: err
          });
        } else {
          try {
            const user = new UserModel({ username, email, password: hash });
            await user.save();

            res.status(201).send({
              message: 'Signup Successful',
            });
          } catch (error) {
            console.log('error:', error);
            res.status(400).send({
              message: error.message,
              error: error,
            });
          }
        }
      });
    }
  } catch (error) {
    res.status(500).send({
      message: 'Internal server error!',
      error: error,
    });
  }
};

export { userSignin, userSignUp };
