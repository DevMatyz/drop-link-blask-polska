
import React from 'react';
import { Home, Info, Download } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { icon: Home, label: 'Strona główna', id: 'home' },
    { icon: Info, label: 'Informacje', id: 'info' },
    { icon: Download, label: 'Pobierz', id: 'download' }
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-effect rounded-full px-6 py-3 nav-glow">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="group relative p-3 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-110"
              aria-label={item.label}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <item.icon 
                size={24} 
                className="relative z-10 text-white group-hover:text-purple-300 transition-colors duration-300 drop-shadow-lg" 
              />
              
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="glass-effect rounded-lg px-3 py-1 text-sm text-white whitespace-nowrap">
                  {item.label}
                </div>
              </div>
              
              <div className="absolute inset-0 rounded-full animate-pulse bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
