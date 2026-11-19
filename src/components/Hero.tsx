import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cloudinary = (id: string) =>
  `https://res.cloudinary.com/cmpwim01/image/upload/f_auto,q_auto:best,c_fill,g_auto,w_2400,h_1400,e_sharpen:50/${id}`;

const slides = [
  {
    id: 1,
    backgroundImage: cloudinary('v1795085833/IMG_1211.jpg'),
    title: 'Timeless Sculptures',
    subtitle: 'Crafted by Hand',
    description: 'Bringing stone, metal, and wood to life through dedication, vision, and the pursuit of timeless beauty.',
    buttonText: 'View Gallery'
  },
  {
    id: 2,
    backgroundImage: cloudinary('v1795085847/IMG_1522.jpg'),
    title: 'Master Craftsmanship',
    subtitle: 'Artistic Excellence',
    description: 'Over two decades of honing traditional techniques with contemporary vision.',
    buttonText: 'Explore Works'
  },
  {
    id: 3,
    backgroundImage: cloudinary('v1795085847/IMG_1520.jpg'),
    title: 'Natural Harmony',
    subtitle: 'Organic Beauty',
    description: 'Celebrating the organic forms and textures of the natural world through sculpture.',
    buttonText: 'See Process'
  }
];

const Hero = () => {
  const navigate = useNavigate();
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
  }, [currentSlide]);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.backgroundImage;
    });
  }, []);

  return (
    <section
      id="home"
      className="relative flex h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gray-950"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={index !== currentSlide}
        >
          <img
            src={slide.backgroundImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-7xl px-16 text-center sm:px-24"
      >
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
          {slides[currentSlide].title}
          <br />
          <span className="text-gray-200">{slides[currentSlide].subtitle}</span>
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-white drop-shadow-md sm:text-xl md:text-2xl">
          {slides[currentSlide].description}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToGallery}
          className="rounded-md bg-white px-8 py-3 text-lg font-medium text-gray-900 shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl"
        >
          {slides[currentSlide].buttonText}
        </motion.button>
      </motion.div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-gray-900 sm:left-6 sm:h-14 sm:w-14"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-gray-900 sm:right-6 sm:h-14 sm:w-14"
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
