import React from 'react';

const Internships = () => {
  const internships = [
    {
      title: "Advocate Vijay Kumar Saurabh",
      location: "District Court, Ghaziabad",
      period: "June 2019 – July 2019"
    },
    {
      title: "Advocate Jaspreet S. Rai",
      location: "Delhi High Court",
      period: "June 2018 – July 2018"
    },
    {
      title: "PUCL (NGO)",
      location: "New Delhi",
      period: "June 2017 – July 2017"
    },
    {
      title: "Advocate Poonam Sharma",
      location: "District Court, Greater Noida",
      period: "June 2016 – July 2016"
    }
  ];

  return (
    <section className="glass-effect rounded-xl sm:rounded-2xl shadow-premium p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 hover-lift border border-white/50">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0">
          🏛️
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient text-center sm:text-left" style={{fontFamily: "'Playfair Display', serif"}}>
          Internships
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {internships.map((internship, index) => (
          <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-white to-amber-50/30 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 border border-amber-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-bl-full"></div>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 relative z-10">{internship.title}</h3>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 text-xs sm:text-sm mb-1 font-semibold">{internship.location}</p>
            <p className="text-gray-600 text-xs sm:text-sm font-medium">{internship.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
