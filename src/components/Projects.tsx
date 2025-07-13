import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Consultation",
      subtitle: "Property Advisory Services",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert consultation services for property investment and development strategies."
    },
    {
      id: 2,
      title: "Design",
      subtitle: "Interior & Exterior Design",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Innovative design solutions that maximize property value and appeal."
    },
    {
      id: 3,
      title: "Marketing & Design",
      subtitle: "Digital Marketing Solutions",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Comprehensive marketing strategies to showcase your property effectively."
    },
    {
      id: 4,
      title: "Consultation & Marketing",
      subtitle: "Full Service Package",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Complete consultation and marketing services for optimal results."
    },
    {
      id: 5,
      title: "Consultation",
      subtitle: "Investment Advisory",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Strategic investment consultation for long-term property success."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We know what buyers are looking for and suggest projects that will bring 
            clients top dollar for the sale of their homes.
          </p>
        </div>

        {/* Projects Grid - Horizontal Layout */}
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {projects.map((project) => (
            <div key={project.id} className="flex-shrink-0 w-64 group cursor-pointer">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{project.subtitle}</p>
                  <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                  
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded text-sm transition-colors duration-200">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;