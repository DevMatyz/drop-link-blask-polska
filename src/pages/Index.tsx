
import React from 'react';
import AnimatedText from '../components/AnimatedText';
import GlowCard from '../components/GlowCard';
import Navigation from '../components/Navigation';
import { Zap, Shield, Rocket, Star, Globe, Code } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Zap className="text-yellow-400" />,
      title: "Błyskawiczna prędkość",
      description: "Najszybsze API w Polsce z czasem odpowiedzi poniżej 50ms"
    },
    {
      icon: <Shield className="text-green-400" />,
      title: "Maksymalne bezpieczeństwo", 
      description: "Zaawansowane szyfrowanie i ochrona przed atakami DDoS"
    },
    {
      icon: <Rocket className="text-purple-400" />,
      title: "Skalowalność",
      description: "Od startupów po korporacje - obsługujemy każdy rozmiar"
    },
    {
      icon: <Star className="text-blue-400" />,
      title: "Najwyższa jakość",
      description: "99.9% uptime i wsparcie techniczne 24/7"
    },
    {
      icon: <Globe className="text-cyan-400" />,
      title: "Globalna sieć",
      description: "Serwery na całym świecie dla najlepszej wydajności"
    },
    {
      icon: <Code className="text-pink-400" />,
      title: "Łatwa integracja",
      description: "Prosta dokumentacja i przykłady kodu w każdym języku"
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
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero section */}
        <div className="text-center mb-20 animate-float">
          <AnimatedText />
          
          <div className="mt-12 space-y-6">
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Nowoczesne polskie API, które rewolucjonizuje sposób, w jaki aplikacje komunikują się ze światem.
              Zbudowane z myślą o przyszłości technologii.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Rozpocznij za darmo</span>
                <div className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-text-shimmer"></div>
              </button>
              
              <button className="px-8 py-4 glass-effect rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10">
                Zobacz dokumentację
              </button>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <GlowCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>

        {/* Stats section */}
        <div className="glass-effect rounded-3xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">
            Zaufały nam tysiące deweloperów
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-400 glow-text">10M+</div>
              <div className="text-gray-300">Zapytań dziennie</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-400 glow-text">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-400 glow-text">5000+</div>
              <div className="text-gray-300">Aktywnych projektów</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-pink-400 glow-text">24/7</div>
              <div className="text-gray-300">Wsparcie techniczne</div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center">
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 glow-text bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Dołącz do rewolucji API
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Rozpocznij swoją przygodę z najnowocześniejszym polskim API. 
              Pierwszych 1000 zapytań całkowicie za darmo!
            </p>
            <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full text-white text-xl font-bold overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-glow-pulse">
              <span className="relative z-10">Zacznij teraz</span>
              <div className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-text-shimmer"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </div>
  );
};

export default Index;
