
import React from 'react';
import Navigation from '../components/Navigation';
import { Download, File, ExternalLink, Zap } from 'lucide-react';

const Downloads = () => {
  const downloadItems = [
    {
      name: "DropLink API SDK",
      description: "Oficjalne SDK dla DropLink 3.0",
      version: "v3.0.1",
      size: "2.4 MB",
      type: "SDK"
    },
    {
      name: "Dokumentacja API",
      description: "Kompletna dokumentacja w formacie PDF",
      version: "v3.0",
      size: "1.2 MB",
      type: "PDF"
    },
    {
      name: "Przykłady kodu",
      description: "Gotowe przykłady integracji",
      version: "v3.0",
      size: "856 KB",
      type: "ZIP"
    }
  ];

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
            Pobierz
          </h1>
          <p className="text-xl text-gray-300">
            Wszystko czego potrzebujesz do rozpoczęcia pracy z DropLink 3.0
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {downloadItems.map((item, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
                    <File className="text-white" size={24} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <p className="text-gray-300">{item.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
                      <span>{item.version}</span>
                      <span>•</span>
                      <span>{item.size}</span>
                      <span>•</span>
                      <span>{item.type}</span>
                    </div>
                  </div>
                </div>
                
                <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center space-x-2">
                    <Download size={20} />
                    <span>Pobierz</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick start section */}
        <div className="glass-effect rounded-3xl p-8 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <Zap className="text-yellow-400 mx-auto mb-4" size={48} />
            <h2 className="text-3xl font-bold text-white mb-4">Szybki start</h2>
            <p className="text-gray-300 mb-6">
              Pobierz SDK i rozpocznij integrację w kilka minut
            </p>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-2">
                <ExternalLink size={20} />
                <span>Zobacz dokumentację</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Downloads;
