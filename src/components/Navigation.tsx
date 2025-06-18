
import React from 'react';
import { Home, Info, Download } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Strona główna', id: 'home', path: '/' },
    { icon: Info, label: 'Informacje', id: 'info', path: '/info' },
    { icon: Download, label: 'Pobierz', id: 'download', path: '/downloads' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-effect rounded-full px-6 py-3 nav-glow">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`group relative p-3 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-110 ${
                  isActive ? 'bg-white/10 scale-110' : ''
                }`}
                aria-label={item.label}
              >
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-opacity duration-300 ${
                  isActive ? 'opacity-20' : 'opacity-0 group-hover:opacity-20'
                }`}></div>
                
                <item.icon 
                  size={24} 
                  className={`relative z-10 transition-colors duration-300 drop-shadow-lg ${
                    isActive ? 'text-purple-300' : 'text-white group-hover:text-purple-300'
                  }`} 
                />
                
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="glass-effect rounded-lg px-3 py-1 text-sm text-white whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
                
                <div className={`absolute inset-0 rounded-full animate-pulse bg-purple-500/20 transition-opacity duration-500 ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></div>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
