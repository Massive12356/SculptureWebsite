interface Sculpture {
  id: number;
  title: string;
  material: string;
  image: string;
}

const Gallery = () => {
  const sculptures: Sculpture[] = [
    {
      id: 1,
      title: 'Eternal Form',
      material: 'Marble',
      image: 'https://images.pexels.com/photos/4100720/pexels-photo-4100720.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Rising Spirit',
      material: 'Bronze',
      image: 'https://images.pexels.com/photos/6492399/pexels-photo-6492399.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Natural Harmony',
      material: 'Wood',
      image: 'https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Abstract Vision',
      material: 'Steel',
      image: 'https://images.pexels.com/photos/6966564/pexels-photo-6966564.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Ancient Echo',
      material: 'Stone',
      image: 'https://images.pexels.com/photos/3004905/pexels-photo-3004905.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Modern Grace',
      material: 'Marble',
      image: 'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a collection of works that blend traditional craftsmanship with contemporary vision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sculptures.map((sculpture) => (
            <div
              key={sculpture.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={sculpture.image}
                  alt={sculpture.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-1">{sculpture.title}</h3>
                  <p className="text-sm text-gray-200">{sculpture.material}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
