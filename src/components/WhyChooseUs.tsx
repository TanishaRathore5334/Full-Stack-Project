import React from 'react';
import { TrendingUp, Palette, Target } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section id="services" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-blue-600 rounded-full"></div>
      <div className="absolute bottom-40 left-40 w-8 h-8 bg-orange-500 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-blue-600 font-medium text-sm">NOT YOUR AVERAGE</span>
              </div>
              <h2 className="text-4xl font-bold text-blue-600">
                Not Your Average Realtor
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We're not just another real estate agency. We're your partners in success, 
                offering comprehensive consultation, innovative design solutions, and strategic 
                marketing that sets us apart from the competition.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 inline-block">
                Why Choose Us?
              </h3>
              
              <div className="grid gap-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-12 w-12 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Potential ROI</h4>
                    <p className="text-gray-600 leading-relaxed">We help you maximize your return on investment through strategic planning and market analysis. Our proven methods ensure optimal results for your real estate ventures.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Palette className="h-12 w-12 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Design</h4>
                    <p className="text-gray-600 leading-relaxed">Our creative design solutions transform spaces into stunning, functional environments. We combine aesthetics with practicality to create spaces that sell.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Target className="h-12 w-12 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Marketing</h4>
                    <p className="text-gray-600 leading-relaxed">Strategic marketing campaigns that reach the right audience at the right time. We use cutting-edge digital marketing techniques to maximize your property's exposure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Images arranged like reference */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Top Row */}
              <div className="space-y-6">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Professional consultation"
                    className="w-full h-48 object-cover rounded-full shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Happy clients"
                    className="w-full h-40 object-cover rounded-full shadow-lg"
                  />
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Real estate professional"
                    className="w-full h-32 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-orange-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;