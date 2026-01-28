const Materials = () => {
  const materials = [
    {
      name: "Marble",
      description: "Premium Carrara and Calacatta marble sourced from Italian quarries.",
      properties: "Timeless elegance, smooth finish, exceptional durability"
    },
    {
      name: "Bronze",
      description: "High-grade bronze alloys with traditional lost-wax casting techniques.",
      properties: "Rich patinas, excellent detail retention, weather resistant"
    },
    {
      name: "Wood",
      description: "Sustainably sourced hardwoods including oak, walnut, and cherry.",
      properties: "Warm organic texture, versatile carving, natural beauty"
    },
    {
      name: "Steel",
      description: "Industrial-grade steel with modern fabrication and welding techniques.",
      properties: "Contemporary aesthetic, structural strength, dynamic forms"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Materials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exceptional quality materials for enduring artistic expression
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {materials.map((material, index) => (
            <div 
              key={index}
              className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                {material.name}
              </h3>
              <p className="text-gray-700 mb-4">
                {material.description}
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p className="text-sm text-gray-600 italic">
                  {material.properties}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;