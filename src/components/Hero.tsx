import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();
  
  const slides = [
    {
      id: 1,
      backgroundImage: 'https://images.pexels.com/photos/4100720/pexels-photo-4100720.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Timeless Sculptures',
      subtitle: 'Crafted by Hand',
      description: 'Bringing stone, metal, and wood to life through dedication, vision, and the pursuit of timeless beauty.',
      buttonText: 'View Gallery'
    },
    {
      id: 2,
      backgroundImage: 'https://images.pexels.com/photos/6492399/pexels-photo-6492399.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Master Craftsmanship',
      subtitle: 'Artistic Excellence',
      description: 'Over two decades of honing traditional techniques with contemporary vision.',
      buttonText: 'Explore Works'
    },
    {
      id: 3,
      backgroundImage: 'https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Natural Harmony',
      subtitle: 'Organic Beauty',
      description: 'Celebrating the organic forms and textures of the natural world through sculpture.',
      buttonText: 'See Process'
    }
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const goToGallery = () => {
    navigate('/gallery');
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        </div>
      ))}
      
      {/* Slide Content */}
      <motion.div 
        key={currentSlide}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          {slides[currentSlide].title}
          <br />
          <span className="text-gray-200">{slides[currentSlide].subtitle}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          {slides[currentSlide].description}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToGallery}
          className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform transition-all duration-200"
        >
          {slides[currentSlide].buttonText}
        </motion.button>
      </motion.div>
      
      {/* Slider Controls - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-end space-y-4">
        {/* Navigation Arrows */}
        <div className="flex space-x-2">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white bg-opacity-80 text-gray-800 flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 shadow-lg"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white bg-opacity-80 text-gray-800 flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 shadow-lg"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Slide Indicators */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-6' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
