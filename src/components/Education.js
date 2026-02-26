import React from 'react';

const Education = () => {
  return (
    <section className="glass-effect rounded-xl sm:rounded-2xl shadow-premium p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 hover-lift border border-white/50">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0">
          📚
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient text-center sm:text-left" style={{fontFamily: "'Playfair Display', serif"}}>
          Education
        </h2>
      </div>
      
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-gradient-to-b from-blue-500 to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="absolute top-4 right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">BA-LLB (Integrated)</h3>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold mb-2 sm:mb-3 text-base sm:text-lg">
          Gautam Buddha University, School of Law, Justice & Governance – Greater Noida
        </p>
        <p className="text-gray-600 mb-2 sm:mb-3 font-medium text-sm sm:text-base">2015 – 2020</p>
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-base sm:text-lg shadow-md">
          CGPA: 7.5/10
        </div>
      </div>
    </section>
  );
};

export default Education;
