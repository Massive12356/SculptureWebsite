const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About the Artist
            </h2>
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
              <p>
                Every sculpture tells a story. My mission is to create pieces that not only stand as
                works of art but also resonate deeply with those who experience them, inviting
                contemplation and connection.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/4100720/pexels-photo-4100720.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artist at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
