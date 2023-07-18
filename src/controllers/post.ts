import prisma from '../prisma';
import { cookieToken } from '../utils/cookieToken';
import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export const sign_up = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error('Please provide all required fields');
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    cookieToken(user, res);
  } catch (error) {}
};
