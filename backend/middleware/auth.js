import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  console.log('Auth middleware triggered');
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token verified:', decoded);

    req.user = {id: decoded.id};
    next();
  } catch (err) {
    console.log('middleware error');
    res.status(400).json({ error: 'Invalid token.' });
  }
};

export default auth;