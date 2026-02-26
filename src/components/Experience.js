import React, { useState } from 'react';

const Experience = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [expandedCompany, setExpandedCompany] = useState(null);
  
  const experiences = [
    {
      company: "ShadvalPay Private Limited",
      designation: "Legal Advisor",
      period: "July 2025 – Present",
      responsibilities: [
        { 
          text: "Risk assessments and compliance programs to ensure adherence to legal and regulatory requirements",
          detail: "Conducting comprehensive risk assessments and developing compliance frameworks"
        },
        { 
          text: "Audits & Company Agreements - Reviewing and drafting company policies and agreements",
          detail: "Ensuring all agreements comply with regulatory standards"
        },
        { 
          text: "Reporting and Monitoring regulatory changes and communicating them to management",
          detail: "Keeping management informed of legal and compliance updates"
        },
        { 
          text: "Risk Mitigation - Identifying and mitigating potential risks through proactive measures",
          detail: "Implementing strategies to minimize organizational risk exposure"
        },
        { 
          text: "Performing risk assessments and compliance audits to monitor adherence to laws and internal policies",
          detail: "Regular audits to ensure compliance with regulations and company standards"
        }
      ]
    },
    {
      company: "Under Advocate Sumit Jain",
      location: "Delhi High Court & Karkardooma Court",
      designation: "Legal Associate – Litigation & Legal Advisory",
      period: "December 2022 – July 2025",
      responsibilities: [
        { 
          text: "Drafted and reviewed legal documents: writ petitions, bail applications, contracts, and notices",
          detail: "Successfully handled 50+ legal documents with 100% accuracy"
        },
        { 
          text: "Provided legal advisory services in civil, criminal, and constitutional law matters",
          detail: "Advised 30+ clients on complex legal matters"
        },
        { 
          text: "Assisted during hearings and trials in the Delhi High Court and district courts",
          detail: "Participated in 40+ court proceedings"
        },
        { 
          text: "Conducted legal research using Manupatra and SCC Online; prepared concise case briefs",
          detail: "Researched 100+ case laws and precedents"
        },
        { 
          text: "Managed client interactions and follow-ups, ensuring timely filings and documentations",
          detail: "Maintained 98% on-time filing rate"
        }
      ]
    }
  ];

  return (
    <section className="glass-effect rounded-xl sm:rounded-2xl shadow-premium p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 hover-lift border border-white/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 relative z-10">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg animate-pulse-glow flex-shrink-0">
          💼
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient text-center sm:text-left" style={{fontFamily: "'Playfair Display', serif"}}>
          Professional Experience
        </h2>
      </div>
      
      <div className="space-y-8 sm:space-y-10">
        {experiences.map((exp, companyIndex) => (
          <div key={companyIndex} className="relative pl-4 sm:pl-6 lg:pl-8 border-l-2 border-gradient-to-b from-blue-500 to-purple-500">
            <div className="absolute -left-2 sm:-left-3 top-0 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 sm:border-4 border-white shadow-lg animate-pulse"></div>
            
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
              {exp.designation}
            </h3>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold mb-1 text-sm sm:text-base">
              {exp.company}{exp.location && ` – ${exp.location}`}
            </p>
            <p className="text-gray-500 mb-4 sm:mb-6 font-medium text-sm sm:text-base">{exp.period}</p>
            
            <ul className="space-y-3 sm:space-y-4 text-gray-700">
              {exp.responsibilities.map((item, index) => (
                <li 
                  key={index} 
                  className="group relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all duration-500 cursor-pointer border border-transparent hover:border-purple-200"
                  onClick={() => {
                    const key = `${companyIndex}-${index}`;
                    setExpandedItem(expandedItem === key ? null : key);
                  }}
                >
                  <div className="flex gap-2 sm:gap-3 lg:gap-4 items-start">
                    <span className="text-blue-600 text-lg sm:text-xl font-bold mt-0.5 transition-transform duration-300 group-hover:scale-125 flex-shrink-0">✓</span>
                    <div className="flex-1 min-w-0">
                      <span className="font-light block text-sm sm:text-base">{item.text}</span>
                      {expandedItem === `${companyIndex}-${index}` && (
                        <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-purple-200">
                          <span className="text-xs sm:text-sm text-purple-600 font-semibold">{item.detail}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-lg sm:rounded-xl transition-all duration-500"></div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
