// Import the Supabase client
const supabase = require('../config/supabase');
// Import bcryptjs for password hashing
const bcrypt = require('bcryptjs');
// Import jsonwebtoken for creating and verifying tokens
const jwt = require('jsonwebtoken');

// Helper function to generate a JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if a user with the given email already exists in Supabase
    const { data: existingUsers, error: findError } = await supabase
      .from('users')
      .select('id')
      .eq('email', email);

    if (findError) throw findError;
    if (existingUsers && existingUsers.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the new user into Supabase
    const { data: newUser, error: insertError } = await supabase
      .from('users')
      .insert([
        {
          name,
          email,
          password: hashedPassword,
          is_admin: false, // Default to false
        },
      ])
      .select(); // Return the inserted data

    if (insertError) throw insertError;
    if (newUser && newUser.length > 0) {
      const user = newUser[0]; // Supabase returns an array for inserts

      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.is_admin, // Use is_admin from Supabase table
        token: generateToken(user.id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: error.message || 'Server error' });
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email in Supabase
    const { data: users, error: findError } = await supabase
      .from('users')
      .select('*') // Select all columns to get the hashed password
      .eq('email', email);

    if (findError) throw findError;
    if (!users || users.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = users[0];

    // Compare entered password with hashed password from Supabase
    if (await bcrypt.compare(password, user.password)) {
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.is_admin, // Use is_admin from Supabase table
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(500).json({ message: error.message || 'Server error' });
  }
};

// Export the controller functions
module.exports = { registerUser, authUser };
