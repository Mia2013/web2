import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      throw new Error('Hiányzó fejléc');
    }

    const [prefix, userToken] = authHeader.split(' ');

    if (prefix !== 'Bearer' || !userToken) {
      throw new Error('Érvénytelen token formátum');
    }

    const verifiedUser = jwt.verify(userToken, "szuperTitkosKulcsATokenhez");
    req.userid = verifiedUser.userid;
    
    return next();
  } catch (error) {
    error.status = 401;
    error.message = 'Érvénytelen token';
    return next(error);
  }
};
