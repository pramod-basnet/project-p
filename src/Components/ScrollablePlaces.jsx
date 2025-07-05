import React, { useState } from 'react';
import BookingForm from './BookingForm';

const ScrollablePlaces = ({ title, places }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

      <div className="flex overflow-x-auto space-x-6 px-4">
        {places.map((place, index) => (
          <div
            key={index}
            className="min-w-[280px] bg-white border rounded-lg shadow-md flex-shrink-0"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
              <p className="text-gray-600 mb-2">{place.description}</p>
              {place.price && (
                <p className="text-green-600 font-semibold mb-2">
                  Price: Rs. {place.price} per person
                </p>
              )}
              <button
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setSelectedPlace(place)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Form Modal */}
      {selectedPlace && (
        <BookingForm
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
        />
      )}
    </section>
  );
};

export default ScrollablePlaces;
