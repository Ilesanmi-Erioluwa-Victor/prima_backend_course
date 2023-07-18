import { getJwtToken } from '../helpers/getJwtToken';
import Response from 'express';
import { StatusCodes } from 'http-status-codes';

export const cookieToken = (user: any, res: any) => {
  const token: string = getJwtToken(user.id);

  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  user.password = undefined;
  res.status(StatusCodes.OK).cookie('userToken', token, options).json({
    success: true,
    token,
  });
};
