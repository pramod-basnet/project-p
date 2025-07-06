import React from 'react';

const Footer1 = () => {
  const testimonials = [
    {
      id: 1,
      image: 'https://placehold.co/100x100/A78BFA/ffffff?text=NS',
      name: 'Noah Schumacher',
      description:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      stars: 5,
    },
    {
      id: 2,
      image: 'https://placehold.co/100x100/FACC15/ffffff?text=JP',
      name: 'Julia Patel',
      description:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      stars: 5,
    },
    {
      id: 3,
      image: 'https://placehold.co/100x100/EC4899/ffffff?text=NL',
      name: 'Natalia Lowe',
      description:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      stars: 5,
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-16 font-sans antialiased">
      <div
        className="relative w-full bg-cover bg-center shadow-xl p-4 md:p-10"
        style={{
          backgroundImage:
            "url('https://placehold.co/1200x600/6B7280/ffffff?text=Travel+Background')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Our Favorite Travelers
          </h2>

          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

const TestimonialCard = ({ image, name, description, stars }) => {
  const renderStars = (count) => (
    <div className="flex justify-center mt-2">
      {Array(count)
        .fill()
        .map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.416 3.908 1.48-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
        ))}
    </div>
  );

  return (
    <div className="bg-white text-gray-800 rounded-xl p-6 shadow-md transform transition-transform hover:scale-105 hover:shadow-xl">
      <p className="text-sm mb-4">{description}</p>
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border-4 border-purple-300 shadow mb-3"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            'https://placehold.co/100x100/cccccc/333333?text=User';
        }}
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      {renderStars(stars)}
    </div>
  );
};

export default Footer1;
