const User = require('../models/user');
const jwtHelper = require('../utils/jwtHelper');
const bcrypt = require('bcryptjs');


exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = new User({ email, password });
    await user.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwtHelper.generateToken({ id: user._id });
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};