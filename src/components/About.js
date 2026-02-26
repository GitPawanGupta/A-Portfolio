import React from 'react';

const About = () => {
  return (
    <section className="glass-effect rounded-xl sm:rounded-2xl shadow-premium p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 hover-lift border border-white/50">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0">
          🎯
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient text-center sm:text-left" style={{fontFamily: "'Playfair Display', serif"}}>
          Career Objective
        </h2>
      </div>
      <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-light text-center sm:text-left">
        Detail-oriented and motivated law graduate with 2 years and 7 months of litigation and legal 
        advisory experience (from December 2022 to July 2025), specializing in criminal, civil, and 
        constitutional law. Skilled in legal drafting, client consultation, and courtroom procedure. 
        Seeking a role in a corporate legal environment to apply my courtroom experience and strong 
        research capabilities to legal compliance and risk management.
      </p>
    </section>
  );
};

export default About;
