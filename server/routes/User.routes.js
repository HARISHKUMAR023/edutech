// routes/authRoutes.js
const express = require('express');
const { register, login, getAdminContent, getUserContent } = require('../Controllers/User.controllers');
const { protect } = require('../Middleware/Auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/admin', protect(['admin']), getAdminContent);
router.get('/user', protect(['user', 'admin']), getUserContent);
router.get('/me', protect, (req, res) => {
    res.status(200).json(req.user);
});

module.exports = router;
