import { services } from '../data/mockData';

const ServicesPage = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive artistic services from conception to installation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
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

        <div className="bg-gray-900 text-white rounded-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Commission Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                <p className="text-sm">Consultation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                <p className="text-sm">Concept & Sketch</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                <p className="text-sm">Material Selection</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
                <p className="text-sm">Sculpting</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">5</div>
                <p className="text-sm">Delivery & Installation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Request a Commission
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;