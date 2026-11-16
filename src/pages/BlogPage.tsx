import { useState } from 'react';
import { blogPosts } from '../data/mockData';

const BlogPage = () => {
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];
  const [category, setCategory] = useState('All');
  const visible = category === 'All' ? blogPosts : blogPosts.filter((post) => post.category === category);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Studio Journal</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notes from the bench: process, commissions, and how the studio treats its materials.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === item ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {visible.map((post) => (
            <article key={post.id} className="group">
              <div className="rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mt-6">
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-x-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <p className="text-sm text-gray-500">
                  From the studio journal · {post.author}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;