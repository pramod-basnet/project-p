// Import jsonwebtoken for token verification
const jwt = require('jsonwebtoken');
// Import Supabase client
const supabase = require('../config/supabase'); // NEW

// Middleware to protect routes (ensure user is authenticated)
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      // Verify token with our JWT_SECRET
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch user from Supabase based on the ID from the token
      const { data: users, error: findUserError } = await supabase
        .from('users')
        .select('id, name, email, is_admin') // Select necessary fields
        .eq('id', decoded.id)
        .single(); // Expect a single user

      if (findUserError || !users) {
        console.error('Error fetching user from Supabase or user not found:', findUserError);
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      // Attach user object to the request.
      // Map is_admin to isAdmin for consistency with previous code.
      req.user = {
        id: users.id,
        name: users.name,
        email: users.email,
        isAdmin: users.is_admin,
      };

      next();
    } catch (error) {
      console.error('Token verification failed:', error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Middleware to check if the user is an admin
const admin = (req, res, next) => {
  // Check if user exists and is an admin (isAdmin property is set by protect middleware)
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as an admin' });
  }
};

module.exports = { protect, admin };