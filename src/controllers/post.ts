import prisma from '../prisma';
import { cookieToken } from '../utils/cookieToken';
import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
          throw new Error("Please provide all required fields")
      }
  } catch (error) {}
};
