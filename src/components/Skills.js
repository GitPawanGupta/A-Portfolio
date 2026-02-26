import React, { useState } from 'react';

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const skills = [
    { name: "Legal Drafting & Client Advisory", icon: "📝", level: 95 },
    { name: "Civil, Criminal & Constitutional Law", icon: "⚖️", level: 90 },
    { name: "Court Documentation & Filing", icon: "📋", level: 92 },
    { name: "Legal Research & Brief Preparation", icon: "🔍", level: 88 },
    { name: "Manupatra, SCC Online | MS Word, Excel", icon: "💻", level: 85 }
  ];

  return (
    <section className="glass-effect rounded-xl sm:rounded-2xl shadow-premium p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 hover-lift border border-white/50">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg animate-pulse-glow flex-shrink-0">
          🔧
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient text-center sm:text-left" style={{fontFamily: "'Playfair Display', serif"}}>
          Key Skills
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 border border-blue-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 perspective-card cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
          >
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full transition-all duration-500 group-hover:w-24 group-hover:h-24 sm:group-hover:w-32 sm:group-hover:h-32"></div>
            
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <span className="text-2xl sm:text-3xl transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 flex-shrink-0">{skill.icon}</span>
              <span className="text-gray-800 font-medium text-sm sm:text-base">{skill.name}</span>
            </div>
            
            {hoveredIndex === index && (
              <div className="mt-3">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: hoveredIndex === index ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
