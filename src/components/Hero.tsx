import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pb-16"
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
        className="relative z-10 max-w-7xl mx-auto px-16 sm:px-24 text-center"
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
      
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-gray-900 sm:h-14 sm:w-14"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-gray-900 sm:h-14 sm:w-14"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
      </button>

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4 text-white">
        <span className="text-xs tracking-[0.25em] tabular-nums">0{currentSlide + 1}</span>
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-0.5 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'w-10 bg-white' : 'w-5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : undefined}
            />
          ))}
        </div>
        <span className="text-xs tracking-[0.25em] text-white/60 tabular-nums">0{slides.length}</span>
      </div>
    </section>
  );
};

export default Hero;
