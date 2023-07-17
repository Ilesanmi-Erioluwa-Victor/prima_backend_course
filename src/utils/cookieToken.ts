import { getJwtToken } from '../helpers/getJwtToken';
import Response from 'express';

const cookieToken = (user: any, res: Response) => {
  const token: string = getJwtToken(user.id);

  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  user.password = undefined;
};
