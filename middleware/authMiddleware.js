const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.protect = async (req, res, next) => {
    let token;

    // Check for token in Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];  // Extract token
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        // Decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Log the decoded token to check if it's correct
        console.log('Decoded Token:', decoded);  // Debugging log

        // Attach the user to the request object (excluding password)
        req.user = await User.findById(decoded.id).select('-password');  // Exclude password

        // Log the user object to ensure it contains role
        console.log('User from DB:', req.user);  // Debugging log

        next();  // Proceed to the next middleware/route handler
    } catch (err) {
        console.error('Token verification failed:', err);  // Debugging log
        return res.status(401).json({ message: 'Not authorized, token failed' });
    }
};
