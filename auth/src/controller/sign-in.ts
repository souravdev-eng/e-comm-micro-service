import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../model/userModel';

export const signIn = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // const token = jwt.sign({ name, email, role }, process.env.JWT_KEY!, {
  //   expiresIn: '30d',
  // });

  // await user.save();

  // res.status(200).json({ token, user });
};
