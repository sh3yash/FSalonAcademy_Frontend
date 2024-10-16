import React from 'react';
import { motion } from 'framer-motion';

const results = [
  { title: 'Miss Universe 2024', description: 'Awarded to the most exceptional contestant for her outstanding performance, elegance, and charisma.', image: '/src/assets/result1.jpeg' },
  { title: 'Best Talent Performance', description: 'Recognized for the most impressive talent showcase that captivated the judges and audience alike.', image: '/src/assets/result2.jpeg' },
];

const ResultsSection = ({ searchQuery }) => {
  const filteredResults = results.filter(result =>
    result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    result.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="results" className="py-10 bg-pink-200">
      <h2 className="overflow-hidden text-4xl font-bold text-center mb-8 text-pink-600">Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredResults.map((result, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg transition-colors duration-300 hover:bg-pink-300" // Change background on hover
          >
            <div className="w-full h-64 md:h-96 lg:h-128 overflow-hidden relative rounded-lg">
              <img src={result.image} alt={result.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-bold mt-4 text-pink-600">{result.title}</h3>
            <p className="mt-2 text-gray-700">{result.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
