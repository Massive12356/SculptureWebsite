import Process from '../components/Process';
import Services from '../components/Services';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const exhibitions = [
    { year: 2023, title: 'Modern Abstractions', venue: 'Metropolitan Art Center' },
    { year: 2022, title: 'Form & Substance', venue: 'Contemporary Sculpture Gallery' },
    { year: 2021, title: 'Timeless Figures', venue: 'National Museum of Fine Arts' },
    { year: 2020, title: 'Earth & Stone', venue: 'Regional Arts Foundation' },
    { year: 2019, title: 'Human Form Reimagined', venue: 'University Art Museum' },
  ];

  return (
    <div className="min-h-screen pt-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About the Artist</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of dedication to the ancient art of sculpture
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Biography</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  For over two decades, I have dedicated my life to the ancient art of sculpture,
                  transforming raw materials into expressions of beauty, emotion, and timeless form.
                </p>
                <p>
                  My work is inspired by the natural world, human emotion, and the interplay of light
                  and shadow. Each piece begins as a vision—a moment of inspiration that demands to be
                  brought into physical reality through patience, skill, and unwavering dedication.
                </p>
                <p>
                  Working primarily with marble, bronze, and wood, I embrace both traditional techniques
                  passed down through generations and contemporary approaches that push the boundaries
                  of what sculpture can be.
                </p>
              </div>
            </div>
            
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.pexels.com/photos/4350236/pexels-photo-4350236.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Artist at work"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Artistic Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🏛️', title: 'Tradition Meets Innovation', desc: 'Honoring time-tested techniques while embracing modern innovation' },
                { icon: '🌿', title: "Nature's Influence", desc: 'Drawing inspiration from the organic forms and textures of the natural world' },
                { icon: '❤️', title: 'Emotional Connection', desc: 'Creating pieces that resonate deeply with those who experience them' },
              ].map((philosophy, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="text-4xl mb-4">{philosophy.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{philosophy.title}</h3>
                  <p className="text-gray-600">
                    {philosophy.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Materials & Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marble Mastery</h3>
                <p className="text-gray-600 mb-4">
                  Working with premium Carrara and Calacatta marble, I employ traditional carving techniques 
                  passed down through generations of master sculptors.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Precision hand-carving with traditional tools</li>
                  <li>Surface finishing techniques for various textures</li>
                  <li>Polishing to achieve desired luminosity</li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bronze Casting</h3>
                <p className="text-gray-600 mb-4">
                  Utilizing the ancient lost-wax casting method to create durable, detailed bronze sculptures.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Clay modeling and mold-making</li>
                  <li>Wax casting and ceramic shell formation</li>
                  <li>Patinas application for distinctive finishes</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Exhibitions & Awards</h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="overflow-x-auto"
            >
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Year</th>
                    <th className="py-3 px-6 text-left">Exhibition</th>
                    <th className="py-3 px-6 text-left">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  {exhibitions.map((exhibition, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 + (index * 0.1), duration: 0.3 }}
                      className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="py-3 px-6">{exhibition.year}</td>
                      <td className="py-3 px-6 font-medium">{exhibition.title}</td>
                      <td className="py-3 px-6">{exhibition.venue}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <Process />
      <Services />
    </div>
  );
};

export default AboutPage;