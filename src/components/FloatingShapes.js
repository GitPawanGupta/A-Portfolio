import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-pink-400/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 sm:bottom-40 right-1/3 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-indigo-400/10 rounded-full blur-3xl animate-float"></div>
    </div>
  );
};

export default FloatingShapes;
