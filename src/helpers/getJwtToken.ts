import jwt from 'jsonwebtoken';

export const getJwtToken = (userId: string): string => {
  return jwt.sign(userId, process.env.);
};
