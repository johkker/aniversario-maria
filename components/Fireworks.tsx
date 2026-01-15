'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Fireworks() {
  const [isActive, setIsActive] = useState(false);

  const triggerFireworks = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 3000);
  };

  return (
    <div className="relative">
      <button
        onClick={triggerFireworks}
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-indie text-lg hover:scale-105 transition-transform shadow-lg"
      >
        <Sparkles className="w-5 h-5 inline mr-2" />
        Fogos! 🎆
      </button>
      
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: '1s'
              }}
            >
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
