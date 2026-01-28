import Hero from '../components/Hero';
import { sculptures, services, testimonials } from '../data/mockData';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our latest and most celebrated sculptures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sculptures.slice(0, 6).map((sculpture) => (
              <div key={sculpture.id} className="group">
                <div className="rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={sculpture.images[0]}
                    alt={sculpture.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{sculpture.title}</h3>
                  <p className="text-gray-600">{sculpture.material} • {sculpture.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive artistic services from conception to installation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div 
                key={service.id}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              What people are saying about our work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-gray-800 p-8 rounded-lg border border-gray-700"
              >
                <div className="text-yellow-400 text-2xl mb-4">
                  ★★★★★
                </div>
                <p className="text-gray-300 italic mb-6 text-lg">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let’s Create Something Timeless
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Ready to commission a unique piece? Let's bring your vision to life.
          </p>
          <a 
            href="/services"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Request a Commission
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;