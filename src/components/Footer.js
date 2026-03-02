import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-8 sm:py-10 lg:py-12 mt-12 sm:mt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMC00YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-4 sm:mb-6"></div>
        <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 font-semibold">© 2025 Rohit Sharma. All rights reserved.</p>
        <p className="text-blue-200 font-light text-sm sm:text-base">Legal Professional | Litigation & Advisory Specialist</p>
      </div>
    </footer>
  );
};

export default Footer;
