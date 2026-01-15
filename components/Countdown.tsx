'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-01-17T18:00:00-03:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-6 h-6 text-purple-500" />
        <h3 className="text-xl font-indie text-purple-700">Contagem Regressiva</h3>
      </div>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-3">
          <div className="text-2xl font-bold text-purple-600 font-indie">{timeLeft.days}</div>
          <div className="text-sm text-purple-500 font-indie">dias</div>
        </div>
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-3">
          <div className="text-2xl font-bold text-purple-600 font-indie">{timeLeft.hours}</div>
          <div className="text-sm text-purple-500 font-indie">horas</div>
        </div>
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-3">
          <div className="text-2xl font-bold text-purple-600 font-indie">{timeLeft.minutes}</div>
          <div className="text-sm text-purple-500 font-indie">min</div>
        </div>
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-3">
          <div className="text-2xl font-bold text-purple-600 font-indie">{timeLeft.seconds}</div>
          <div className="text-sm text-purple-500 font-indie">seg</div>
        </div>
      </div>
    </div>
  );
}
