import React, { useState } from 'react';

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ fullName: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content - Main Image with Overlay Text */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Real estate consultation"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-start pl-12">
                <div className="text-white space-y-2">
                  <h1 className="text-5xl font-bold leading-tight">
                    Consultation,
                  </h1>
                  <h1 className="text-5xl font-bold leading-tight">
                    Design
                  </h1>
                  <h1 className="text-5xl font-bold leading-tight">
                    & Marketing
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-blue-600 p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Get a Free</h2>
              <h2 className="text-2xl font-bold text-white">Consultation</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-700 text-white placeholder-blue-200 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-700 text-white placeholder-blue-200 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-700 text-white placeholder-blue-200 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-700 text-white placeholder-blue-200 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition-colors duration-200"
              >
                GET FREE QUOTE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;