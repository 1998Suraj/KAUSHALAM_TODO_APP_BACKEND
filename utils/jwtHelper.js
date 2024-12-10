const jwt = require('jsonwebtoken'); // Import jwt package

// Define the generateToken function
const generateToken = (userId) => {
  const payload = { userId };
  const secretKey = process.env.JWT_SECRET || 'your_secret_key';
  const options = { expiresIn: '1h' };

  return jwt.sign(payload, secretKey, options);
};

module.exports = {
  generateToken,
};
