
import React from 'react';
import Navigation from '../components/Navigation';
import { Info as InfoIcon, Heart, Users, Clock } from 'lucide-react';

const Info = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cyan-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold glow-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-shift bg-300% mb-6">
            Informacje
          </h1>
          <p className="text-xl text-gray-300">
            Dowiedz się więcej o DropLink 3.0
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <InfoIcon className="text-purple-400 mr-4" size={32} />
              <h2 className="text-3xl font-bold text-white">O naszym API</h2>
            </div>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Nasze API obsługuje Minery. Nie tylko minery mamy wiele do wyboru. 
                Nasze wsparcie może zająć od 2 dni roboczych. Zależy od aktywności moderacji. 
                Nasze projekty były zrobione z starannością i z miłością.
              </p>
            </div>
          </div>

          {/* Additional info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-effect rounded-2xl p-6 text-center">
              <Users className="text-blue-400 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Wsparcie</h3>
              <p className="text-gray-300">2 dni robocze odpowiedzi</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 text-center">
              <Clock className="text-green-400 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Moderacja</h3>
              <p className="text-gray-300">Zależy od aktywności</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 text-center">
              <Heart className="text-pink-400 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Jakość</h3>
              <p className="text-gray-300">Zrobione z miłością</p>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Info;
