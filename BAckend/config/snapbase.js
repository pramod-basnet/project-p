// Import createClient from the Supabase client library
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

// Get Supabase URL and Anon Key from environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// Create and export the Supabase client instance
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test connection (optional, but good for debugging)
async function testSupabaseConnection() {
  try {
    // A simple query to check connectivity, e.g., fetching a non-existent table
    // This will throw an error if connection fails or credentials are bad
    await supabase.from('non_existent_table').select('*');
    console.log('Supabase client initialized successfully.');
  } catch (error) {
    // If the error is just "table not found", it means connection is okay.
    // If it's a connection error, it will be more severe.
    if (error.message && error.message.includes('table "non_existent_table" does not exist')) {
      console.log('Supabase client initialized successfully (table not found is expected for test).');
    } else {
      console.error('Failed to initialize Supabase client:', error.message);
      // You might want to exit the process here if the connection is critical
      // process.exit(1);
    }
  }
}

// Call the test function when this module is imported
testSupabaseConnection();

module.exports = supabase;
