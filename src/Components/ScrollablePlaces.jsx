const ScrollablePlaces = ({ title, places }) => {
  const handleBooking = (place) => {
    alert(`Booking started for ${place.name} at ₹${place.price}`);
  };
  

  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="flex overflow-x-auto space-x-6">
        {places.map((place, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0 flex flex-col"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
              <p className="text-gray-700 mb-2 flex-grow">{place.description}</p>
              <p className="text-green-700 font-semibold mb-4">
                Price: ₹{place.price} per person
              </p>
              <button
                onClick={() => handleBooking(place)}
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollablePlaces;