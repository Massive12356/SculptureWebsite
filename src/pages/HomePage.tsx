import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { sculptures, services, testimonials, studioStats, clients } from '../data/mockData';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {studioStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/4100720/pexels-photo-4100720.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Elena Marlowe at the carving bench"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">The atelier</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A working studio on Artisan Lane
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Sculptor Studio has made private and civic sculpture since 2004. Elena Marlowe still draws every commission. A team of carvers, a bronze fabricator, and an install crew carry the work from the bench to the site.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Collectors come for a single piece. Cities and campuses come for something that has to stand outside for decades. Both leave with a schedule, a fixed price, and a person to call.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Meet the studio
              </Link>
              <Link to="/csr" className="border border-gray-300 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Our responsibility
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Works */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our latest and most celebrated sculptures
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sculptures.slice(0, 6).map((sculpture, index) => (
              <motion.div 
                key={sculpture.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to={`/gallery/${sculpture.id}`}>
                  <div className="rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={sculpture.images[0]}
                      alt={sculpture.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">{sculpture.title}</h3>
                    <p className="text-gray-600">{sculpture.material} • {sculpture.year}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Services Overview */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive artistic services from conception to installation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block text-gray-900 font-medium underline underline-offset-4 hover:text-gray-600">
              See the full practice
            </Link>
          </div>
        </div>
      </motion.section>

      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Selected clients</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {clients.map((client) => (
              <span key={client} className="text-gray-800 font-medium">{client}</span>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="py-20 bg-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              What people are saying about our work
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                whileHover={{ y: -5 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* CTA Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Let’s Create Something Timeless
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Ready to commission a unique piece? Let's bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request a Commission
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;