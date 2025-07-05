import React from 'react';

// Main App component
const Footer1 = () => {
  // Data for the testimonials
  const testimonials = [
   
    {
      id: 1,
      image: 'https://placehold.co/100x100/A78BFA/ffffff?text=NS', // Placeholder image
      name: 'Noah Schumacher',
      description: 'Boost your product and service\'s credibility by adding testimonials from your clients. People love recommendations so feedback from others who\'ve tried it is invaluable.',
      stars: 5,
    },
    {
      id: 2,
      image: 'https://placehold.co/100x100/FACC15/ffffff?text=JP', // Placeholder image
      name: 'Julia Patel',
      description: 'Boost your product and service\'s credibility by adding testimonials from your clients. People love recommendations so feedback from others who\'ve tried it is invaluable.',
      stars: 5,
    },
    {
      id: 3,
      image: 'https://placehold.co/100x100/EC4899/ffffff?text=NL', // Placeholder image
      name: 'Natalia Lowe',
      description: 'Boost your product and service\'s credibility by adding testimonials from your clients. People love recommendations so feedback from others who\'ve tried it is invaluable.',
      stars: 5,
    },
  ];

  return (
     <div className=" w-full h-screen  bg-gray-200 flexflex items-center  justify-center p-4 font-sans antialiased">
      {/* Main container with background image effect */}
      <div
        className="relative w-full max-w-6xl bg-cover bg-center rounded-xl shadow-lg p-6 md:p-10 lg:p-12"
        style={{ backgroundImage: "url('https://placehold.co/1200x600/6B7280/ffffff?text=Travel+Background')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>

        {/* Content wrapper */}
        <div className="relative z-10 text-center">
          {/* Section Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 drop-shadow-lg">
            Our favorite travelers
          </h1>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                image={testimonial.image}
                name={testimonial.name}
                description={testimonial.description}
                stars={testimonial.stars}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// TestimonialCard component
const TestimonialCard = ({ image, name, description, stars }) => {
  // Function to render star icons
  const renderStars = (count) => {
    const starIcons = [];
    for (let i = 0; i < count; i++) {
      starIcons.push(
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.416 3.908 1.48-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      );
    }
    return <div className="flex justify-center mt-2">{starIcons}</div>;
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Testimonial Description */}
      <p className="text-gray-700 text-base mb-4 flex-grow">
        {description}
      </p>
      {/* User Image */}
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border-4 border-purple-300 shadow-md mb-3"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/cccccc/333333?text=User'; }} // Fallback image
      />
      {/* User Name */}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {name}
      </h3>
      {/* Star Rating */}
      {renderStars(stars)}
    </div>
  );
};

export default Footer1;
