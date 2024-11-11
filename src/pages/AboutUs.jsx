import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-6 max-w-4xl"> 
        <h1 className="text-4xl font-bold text-center mb-6">About Clothy</h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Welcome to Clothy, your ultimate destination for fashion and style. We believe that clothing is not just about covering your body, but an expression of who you are. 
        </p>
        
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img 
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Clothy, our mission is to provide high-quality clothing that empowers individuals to express their unique style. We curate collections that are not only trendy but also sustainable.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Quality: We prioritize high-quality materials.</li>
              <li>Sustainability: We are committed to environmentally friendly practices.</li>
              <li>Diversity: We celebrate individuality and inclusivity.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-4">Join Us on Our Journey!</h2>
        <p className="text-lg text-center text-gray-700 mb-6">
          Follow us on social media and be a part of our community. Together, let's redefine fashion.
        </p>

        <div className="flex justify-center">
          <NavLink to="/all" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            Shop Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
