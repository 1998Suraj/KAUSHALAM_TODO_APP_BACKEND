const jwt = require('jsonwebtoken'); // Import jwt package

// Define the generateToken function
const generateToken = (userId) => {
  const payload = { userId };
  const secretKey = 'Suraj@123';
  const options = { expiresIn: '1h' };

  return jwt.sign(payload, secretKey, options);
};

module.exports = {
  generateToken,
};
