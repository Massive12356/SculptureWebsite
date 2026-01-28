const Testimonials = () => {
  const testimonials = [
    {
      quote: "The sculpture captures the essence of our vision perfectly. The attention to detail is extraordinary.",
      author: "Sarah Johnson",
      role: "Private Collector"
    },
    {
      quote: "Working with this artist was a transformative experience. The dedication to craft is truly inspiring.",
      author: "Michael Chen",
      role: "Gallery Director"
    },
    {
      quote: "The restoration work breathed new life into our historic pieces. Professionalism and artistry combined.",
      author: "Emma Rodriguez",
      role: "Museum Curator"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What people are saying about our work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>
              <p className="text-gray-700 italic mb-6 text-lg">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-gray-600">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;