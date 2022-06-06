import { Router } from 'express';
import { signUp } from '../controller/sign-up';
import { body } from 'express-validator';
import { requestValidator } from '../middleware/requestValidationError';

const router = Router();

router.post(
  '/signup',
  [
    body('name').notEmpty().withMessage('Please provide your name!'),
    body('email').isEmail().notEmpty().withMessage('Please provide your valid email!'),
    body('password').notEmpty().isLength({ min: 6 }).withMessage('Password minimum 6 characters long!'),
  ],
  requestValidator,
  signUp
);

export { router as authRoute };
