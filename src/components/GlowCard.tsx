
import React from 'react';

interface GlowCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const GlowCard: React.FC<GlowCardProps> = ({ title, description, icon, className = "" }) => {
  return (
    <div className={`group relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl animate-glow-pulse"></div>
      
      <div className="relative glass-effect rounded-2xl p-8 h-full transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl border border-white/10">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
            {description}
          </p>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default GlowCard;
