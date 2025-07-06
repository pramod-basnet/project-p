// Import necessary modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// Import the Supabase client from our config file
const supabase = require('./config/supabase'); // NEW

const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define a simple root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Use the user routes
app.use('/api/users', userRoutes);
// Use the booking routes
app.use('/api/bookings', bookingRoutes);

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
// No explicit database connection function like connectDB needed here anymore,
// as Supabase client is initialized on import of config/supabase.js
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // You might want to add a log here to confirm Supabase client is ready
  // (though testSupabaseConnection in config/supabase.js already does this)
});
