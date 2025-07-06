// Import the Supabase client
const supabase = require('../config/supabase');

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private (requires authentication)
const createBooking = async (req, res) => {
  const {
    packageName, // Matches the SQL table column name
    bookingDate,
    numberOfTravelers,
    totalPrice,
    contactName,
    contactEmail,
    contactPhone,
  } = req.body;

  // Ensure user is authenticated and req.user.id is available from authMiddleware
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: 'Not authorized, user ID not found' });
  }

  if (!packageName || !bookingDate || !numberOfTravelers || !totalPrice || !contactName || !contactEmail) {
    return res.status(400).json({ message: 'Please enter all required booking fields' });
  }

  try {
    // Insert the new booking into Supabase
    const { data: newBooking, error: insertError } = await supabase
      .from('bookings')
      .insert([
        {
          package_name: packageName, // Match SQL column name
          user_id: req.user.id,      // Match SQL column name
          booking_date: bookingDate, // Match SQL column name
          number_of_travelers: numberOfTravelers, // Match SQL column name
          total_price: totalPrice,   // Match SQL column name
          contact_name: contactName,
          contact_email: contactEmail,
          contact_phone: contactPhone,
          status: 'pending',
          is_paid: false,
        },
      ])
      .select(); // Return the inserted data

    if (insertError) throw insertError;
    if (newBooking && newBooking.length > 0) {
      res.status(201).json(newBooking[0]);
    } else {
      res.status(400).json({ message: 'Invalid booking data' });
    }
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: error.message || 'Server error while creating booking' });
  }
};

// @desc    Get booking by ID
// @route   GET /api/bookings/:id
// @access  Private (only owner or admin can view)
const getBookingById = async (req, res) => {
  try {
    // Fetch booking from Supabase
    const { data: booking, error: findError } = await supabase
      .from('bookings')
      .select('*, users(id, name, email)') // Select booking and join user data
      .eq('id', req.params.id)
      .single(); // Expect a single record

    if (findError && findError.code !== 'PGRST116') throw findError; // PGRST116 is 'No rows found'
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Check if the logged-in user is the owner of the booking or an admin
    // Note: Supabase returns joined data with the table name as key (e.g., booking.users.id)
    if (booking.user_id === req.user.id || req.user.isAdmin) {
      res.json(booking);
    } else {
      res.status(403).json({ message: 'Not authorized to view this booking' });
    }
  } catch (error) {
    console.error('Error fetching booking by ID:', error);
    res.status(500).json({ message: error.message || 'Server error while fetching booking' });
  }
};

// @desc    Get all bookings for a logged-in user
// @route   GET /api/bookings/mybookings
// @access  Private
const getUserBookings = async (req, res) => {
  try {
    // Fetch bookings for the authenticated user from Supabase
    const { data: bookings, error: findError } = await supabase
      .from('bookings')
      .select('*')
      .eq('user_id', req.user.id) // Filter by user_id
      .order('created_at', { ascending: false }); // Order by creation date

    if (findError) throw findError;
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    res.status(500).json({ message: error.message || 'Server error while fetching user bookings' });
  }
};

// @desc    Get all bookings (Admin only)
// @route   GET /api/bookings
// @access  Private/Admin
const getAllBookings = async (req, res) => {
  try {
    // Fetch all bookings from Supabase, joining user data
    const { data: bookings, error: findError } = await supabase
      .from('bookings')
      .select('*, users(id, name, email)') // Select all from bookings, and specific fields from joined users
      .order('created_at', { ascending: false });

    if (findError) throw findError;
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching all bookings:', error);
    res.status(500).json({ message: error.message || 'Server error while fetching all bookings' });
  }
};

// @desc    Update booking status (Admin only)
// @route   PUT /api/bookings/:id/status
// @access  Private/Admin
const updateBookingStatus = async (req, res) => {
  const { status, isPaid, paidAt } = req.body;

  try {
    // Update booking in Supabase
    const { data: updatedBooking, error: updateError } = await supabase
      .from('bookings')
      .update({
        status: status,
        is_paid: isPaid, // Match SQL column name
        paid_at: paidAt, // Match SQL column name
      })
      .eq('id', req.params.id)
      .select(); // Return the updated data

    if (updateError) throw updateError;
    if (!updatedBooking || updatedBooking.length === 0) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(updatedBooking[0]);
  } catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({ message: error.message || 'Server error while updating booking status' });
  }
};

// @desc    Delete a booking (Admin only)
// @route   DELETE /api/bookings/:id
// @access  Private/Admin
const deleteBooking = async (req, res) => {
  try {
    // Delete booking from Supabase
    const { error: deleteError } = await supabase
      .from('bookings')
      .delete()
      .eq('id', req.params.id);

    if (deleteError) throw deleteError;
    // Supabase delete doesn't return data on success, only error if failed.
    // We can check if any rows were affected if needed, but for now,
    // if no error, assume success.
    res.json({ message: 'Booking removed' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ message: error.message || 'Server error while deleting booking' });
  }
};

// Export the controller functions
module.exports = {
  createBooking,
  getBookingById,
  getUserBookings,
  getAllBookings,
  updateBookingStatus,
  deleteBooking,
};