import React from 'react';

const Achievements = () => {
  const achievements = [
    "2nd Prize – Quiz on Women Empowerment Laws (with Cash Prize)",
    "Moot Court Participant – GBU (2017–2018)",
    "Workshop – Intellectual Property Rights, GBU (2018)",
    "Debate on Right to Privacy – GBU (2017–2018)"
  ];

  return (
    <section className="glass-effect rounded-xl sm:rounded-2xl shadow-premium p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 hover-lift border border-white/50">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0">
          🏆
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient text-center sm:text-left" style={{fontFamily: "'Playfair Display', serif"}}>
          Achievements & Activities
        </h2>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex gap-3 sm:gap-4 items-start bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300 border border-yellow-100/50">
            <span className="text-yellow-500 text-2xl sm:text-3xl flex-shrink-0">★</span>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-light">{achievement}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
