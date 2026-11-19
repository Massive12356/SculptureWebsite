import { Link } from 'react-router-dom';
import Process from '../components/Process';
import Services from '../components/Services';
import { motion } from 'framer-motion';
import { team, milestones } from '../data/mockData';

const AboutPage = () => {
  const exhibitions = [
    { year: 2023, title: 'Modern Abstractions', venue: 'Metropolitan Art Center' },
    { year: 2022, title: 'Form & Substance', venue: 'Contemporary Sculpture Gallery' },
    { year: 2021, title: 'Timeless Figures', venue: 'National Museum of Fine Arts' },
    { year: 2020, title: 'Earth & Stone', venue: 'Regional Arts Foundation' },
    { year: 2019, title: 'Human Form Reimagined', venue: 'University Art Museum' },
  ];

  return (
    <div className="min-h-screen">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About SCULPTMOORE</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A New York atelier, open since 2004, led by Diana Moore with a studio director, a master carver, and an intern beside her.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The atelier</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  SCULPTMOORE sits on Artisan Lane in the Creative District. Diana Moore opened it in 2004 after years at a classical carving bench. The practice is still led from that bench: she draws every commission and finishes every surface.
                </p>
                <p>
                  Beside her, James keeps the schedule and the clients honest, Luca blocks the stone, and Maya supports the bench as the studio intern — preparing materials, documenting the work, and learning the craft from the first clay model to the finished surface.
                </p>
                <p>
                  The work is marble, bronze, wood, and steel — traditional methods, used for rooms and public places that need a form to last. The studio also keeps a public promise: material reused where it can be, apprentices paid, and one civic work a year for a place that could not otherwise commission it.
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
                  src="https://res.cloudinary.com/cmpwim01/image/upload/v1795085858/IMG_6173.jpg"
                  alt="The atelier"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Four people. Most days you will find all of them in the studio or the yard behind it.
              </p>
            </div>

            {team.filter((member) => member.lead).map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-8 grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 h-72 md:h-full">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">{member.role}</p>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{member.name}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">{member.bio}</p>
                  <p className="text-sm font-medium text-gray-900">Focus · {member.focus}</p>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.filter((member) => !member.lead).map((member, index) => (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.45 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-medium text-gray-500 mb-1">{member.role}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                    <p className="text-sm text-gray-800">{member.focus}</p>
                  </div>
                </motion.article>
              ))}
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
                  Working with Carrara and Calacatta marble, the studio uses carving techniques 
                  passed down through generations of stone carvers, with Diana leading the bench.
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
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Studio timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-sm font-bold tracking-wider text-gray-500 mb-2">{milestone.year}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Exhibitions</h2>
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
            <p className="text-center text-gray-600 mt-8">
              The studio also keeps a public commitment beyond the exhibition list.{' '}
              <Link to="/contact" className="font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600">
                Ask about community and material stewardship.
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
      
      <Process />
      <Services />
    </div>
  );
};

export default AboutPage;