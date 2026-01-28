const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Concept & Vision",
      description: "Initial consultation to understand your artistic vision and requirements."
    },
    {
      number: "02",
      title: "Design Development",
      description: "Creation of detailed sketches and 3D models to visualize the final piece."
    },
    {
      number: "03",
      title: "Material Selection",
      description: "Careful selection of premium materials that complement your vision."
    },
    {
      number: "04",
      title: "Craftsmanship",
      description: "Meticulous hand-crafting using traditional and contemporary techniques."
    },
    {
      number: "05",
      title: "Finishing Touches",
      description: "Final detailing, patina application, and quality assurance inspection."
    },
    {
      number: "06",
      title: "Delivery & Installation",
      description: "Professional delivery and installation to ensure perfect presentation."
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Creative Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From initial concept to final masterpiece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <div className="absolute -top-4 left-6 bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border-4 border-gray-800 group-hover:border-gray-700 transition-colors">
                {step.number}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;