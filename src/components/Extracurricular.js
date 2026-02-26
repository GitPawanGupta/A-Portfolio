import React from 'react';

const Extracurricular = () => {
  return (
    <section className="glass-effect rounded-xl sm:rounded-2xl shadow-premium p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 hover-lift border border-white/50">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0">
          🎭
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient text-center sm:text-left" style={{fontFamily: "'Playfair Display', serif"}}>
          Extracurricular
        </h2>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        <div className="flex gap-3 sm:gap-4 items-start bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 hover:shadow-lg transition-all duration-300 border border-pink-100/50">
          <span className="text-pink-600 text-xl sm:text-2xl flex-shrink-0">✦</span>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-light">Core Member – Dramatics Club, GBU</p>
        </div>
        
        <div className="flex gap-3 sm:gap-4 items-start bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 hover:shadow-lg transition-all duration-300 border border-pink-100/50">
          <span className="text-pink-600 text-xl sm:text-2xl flex-shrink-0">✦</span>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-light">Performed & wrote scripts for mime and skit competitions</p>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
