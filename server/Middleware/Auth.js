// middleware/auth.js
const jwt = require('jsonwebtoken');

const protect = (roles = []) => {
    return (req, res, next) => {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Not authorized' });
        }
    };
};

module.exports = { protect };
