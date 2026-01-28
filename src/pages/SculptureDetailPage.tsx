import { useParams } from 'react-router-dom';
import { sculptures } from '../data/mockData';

const SculptureDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const sculpture = sculptures.find(s => s.id === parseInt(id || '0'));

  if (!sculpture) {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Sculpture Not Found</h1>
          <p className="text-gray-600">The sculpture you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={sculpture.images[0]}
                alt={sculpture.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{sculpture.title}</h1>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-4 text-gray-600">
                <span><strong>Material:</strong> {sculpture.material}</span>
                <span><strong>Year:</strong> {sculpture.year}</span>
                <span><strong>Dimensions:</strong> {sculpture.dimensions}</span>
              </div>
              
              <div className="mt-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  sculpture.availability === 'Available' 
                    ? 'bg-green-100 text-green-800' 
                    : sculpture.availability === 'Sold'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {sculpture.availability}
                </span>
                {sculpture.price && (
                  <span className="ml-2 text-lg font-semibold text-gray-900">{sculpture.price}</span>
                )}
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {sculpture.description}
            </p>
            
            <div className="space-y-4">
              <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200">
                Inquire About This Piece
              </button>
              <button className="w-full bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors">
                Request Similar Work
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sculptures
              .filter(s => s.id !== sculpture.id)
              .slice(0, 3)
              .map(s => (
                <div key={s.id} className="group">
                  <div className="rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={s.images[0]}
                      alt={s.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                    <p className="text-gray-600">{s.material} • {s.year}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SculptureDetailPage;