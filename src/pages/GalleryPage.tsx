import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sculptures } from '../data/mockData';
import Materials from '../components/Materials';
import Testimonials from '../components/Testimonials';

const GalleryPage = () => {
  const [filteredSculptures, setFilteredSculptures] = useState(sculptures);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const materials = ['All', ...new Set(sculptures.map(s => s.material))];
  const categories = ['All', ...new Set(sculptures.map(s => s.category))];
  
  useEffect(() => {
    let result = sculptures;
    
    if (selectedMaterial !== 'All') {
      result = result.filter(s => s.material === selectedMaterial);
    }
    
    if (selectedCategory !== 'All') {
      result = result.filter(s => s.category === selectedCategory);
    }
    
    setFilteredSculptures(result);
  }, [selectedMaterial, selectedCategory]);
  
  return (
    <div className="min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore a collection of works that blend traditional craftsmanship with contemporary vision.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Material</label>
              <select 
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                {materials.map(material => (
                  <option key={material} value={material}>{material}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </motion.div>

          <p className="text-center text-sm text-gray-500 mb-8">
            {filteredSculptures.length} {filteredSculptures.length === 1 ? 'work' : 'works'}
          </p>
          
          {filteredSculptures.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-900 font-medium mb-2">Nothing in this combination</p>
              <p className="text-gray-600 mb-6">Try another material or category, or view the full collection.</p>
              <button
                onClick={() => {
                  setSelectedMaterial('All');
                  setSelectedCategory('All');
                }}
                className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : null}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredSculptures.map((sculpture, index) => (
              <motion.div 
                key={sculpture.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <Link to={`/gallery/${sculpture.id}`}>
                  <div 
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={sculpture.images[0]}
                        alt={sculpture.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {sculpture.availability && (
                        <span className="absolute top-3 left-3 bg-white/95 text-gray-900 text-xs font-medium px-2.5 py-1 rounded-full">
                          {sculpture.availability}
                        </span>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-1">{sculpture.title}</h3>
                        <p className="text-sm text-gray-200">{sculpture.material} • {sculpture.year}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      <Materials />
      <Testimonials />
    </div>
  );
};

export default GalleryPage;