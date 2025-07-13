import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full opacity-30 -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-50 rounded-full opacity-30 translate-x-32 translate-y-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Images Section - Arranged like reference image */}
        <div className="relative mb-16">
          <div className="flex justify-center items-center space-x-8">
            {/* Left Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Real estate consultation"
                className="w-48 h-32 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-lg"></div>
              <div className="absolute -top-8 -right-8 w-12 h-12 bg-blue-600 rounded-lg"></div>
            </div>

            {/* Center Large Image */}
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Property consultation"
                className="w-64 h-48 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-600 rounded-lg"></div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Happy clients"
                className="w-48 h-32 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-orange-500 rounded-lg"></div>
            </div>
          </div>

          {/* Additional Decorative Elements */}
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

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition-colors duration-200">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;