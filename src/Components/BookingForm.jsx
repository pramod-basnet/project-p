import React, { useState } from 'react';

const BookingForm = ({ place, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    persons: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} to ${place.name} for ${formData.persons} person(s)!`);
    onClose(); // Close form after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Book Now: {place.name}</h2>

        <label className="block mb-2 text-left">Full Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-2 text-left">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border rounded"
        />
        <label className="block mb-2 text-left" htmlFor="phone">Phone (Nepal)</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="98XXXXXXXX"
          onChange={handleChange}
          pattern="^(98|97)[0-9]{8}$"
          maxLength={10}
          required
          className="w-full mb-4 p-2 border rounded"
        />
        <small className="text-sm text-gray-500">Must be a valid Nepali mobile number (starts with 98 or 97)</small>



        <label className="block mb-2 text-left" htmlFor="persons">
        Number of Persons
      </label>
      <input
        type="number"
        name="persons"
        id="persons"
        min="1"
        value={formData.persons}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <p>Current Number: {formData.persons}</p>

        <p className="mb-6 text-sm text-gray-600">Price per person: Rs. {place.price}</p>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
