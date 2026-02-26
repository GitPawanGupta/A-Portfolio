import React from 'react';

const Languages = () => {
  return (
    <section className="glass-effect rounded-xl sm:rounded-2xl shadow-premium p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 hover-lift border border-white/50">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0">
          🗣️
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient text-center sm:text-left" style={{fontFamily: "'Playfair Display', serif"}}>
          Languages
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-green-500/10 rounded-bl-full"></div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">English</h3>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-semibold text-base sm:text-lg">Proficient</p>
        </div>
        
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-orange-500/10 rounded-bl-full"></div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Hindi</h3>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 font-semibold text-base sm:text-lg">Native</p>
        </div>
      </div>
    </section>
  );
};

export default Languages;
