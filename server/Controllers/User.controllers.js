// controllers/authController.js
const User = require('../Model/User.model');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const user = await User.create({ username, password, role });
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ message: 'User registration failed', error });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message: 'User login failed', error });
    }
};

const getAdminContent = (req, res) => {
    res.status(200).json({ message: 'Admin content' });
};

const getUserContent = (req, res) => {
    res.status(200).json({ message: 'User content' });
};

module.exports = {
    register,
    login,
    getAdminContent,
    getUserContent
};
