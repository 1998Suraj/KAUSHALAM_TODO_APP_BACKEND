const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, "Suraj@123");
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Error Section");
    res.status(401).json({ message: 'Unauthorized' });
  }
};