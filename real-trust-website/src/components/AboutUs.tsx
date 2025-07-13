import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Images Section */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Real estate consultation"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-600 rounded-lg"></div>
            </div>

            {/* Center Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Property consultation"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-600 rounded-2xl"></div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Happy clients"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-orange-500 rounded-lg"></div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-30 -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-orange-100 rounded-full opacity-30 -z-10"></div>
        </div>

        {/* Content Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            With over 5 years of experience in the real estate industry, we've established ourselves as trusted advisors in property consultation, design, and marketing. Our team combines deep market knowledge with innovative strategies to deliver exceptional results for our clients.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We believe that every property has unique potential, and our role is to unlock that potential through strategic planning, creative design solutions, and targeted marketing campaigns. Our comprehensive approach ensures that whether you're buying, selling, or investing, you receive the highest level of service and expertise.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;