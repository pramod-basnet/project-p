import React from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <>
      <Navbar title="" />

      {/* About Section */}
      <section className="bg-white py-16 px-6 w-[92%] mx-auto mt-10 rounded-xl shadow">
        <h1 className="text-4xl font-bold text-center text-amber-900 mb-6">Who We Are</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
          We are a dedicated tourism management team focused on delivering memorable and affordable travel experiences. 
          Our goal is to connect travelers with the best destinations, cultural experiences, and accommodations — all with 
          ease and reliability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-blue-900">Our Mission</h2>
            <p className="text-gray-700">
              To simplify travel planning for everyone by offering a one-stop platform that combines convenience,
              affordability, and world-class support. We believe travel should be enjoyable, not stressful.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-blue-900">Our Vision</h2>
            <p className="text-gray-700">
              To become the leading tourism platform for students, families, and solo travelers across Nepal and beyond. 
              We aim to inspire exploration and make traveling accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-blue-50 w-[92%] mx-auto mt-10 rounded-xl shadow px-6">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/120x120/?man"
              alt="Team Member"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Hemraj Chettri</h3>
            <p className="text-gray-600">Project Leader</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/120x120/?woman"
              alt="Team Member"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Hemraj Chettri </h3>
            <p className="text-gray-600">Frontend Developer</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/120x120/?person"
              alt="Team Member"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Hemraj Chettri</h3>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-white text-center p-6 mt-16">
        <p>&copy; {new Date().getFullYear()} Tourism Management System. All rights reserved.</p>
      </footer>
    </>
  );
};

export default About;