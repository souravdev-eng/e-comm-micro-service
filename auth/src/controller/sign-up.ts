import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { User } from '../model/userModel';

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, role, name } = req.body;

  const user = User.build({ name, email, password, role });

  const token = jwt.sign({ name, email, role }, process.env.JWT_KEY!, {
    expiresIn: '30d',
  });

  await user.save();

  res.status(201).json({ token, user });
};
