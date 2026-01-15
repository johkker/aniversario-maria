import AttendeesList from '@/components/AttendeesList';
import { Cake, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-pink-500 animate-pulse" />
            <Cake className="w-10 h-10 text-purple-500" />
            <Sparkles className="w-8 h-8 text-pink-500 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-indie">
            Aniversário da Maria
          </h1>
          <p className="text-2xl md:text-3xl text-purple-700 font-indie mb-2">
            17 de Janeiro de 2026
          </p>
          <p className="text-lg text-gray-600 font-indie">
            Vamos celebrar juntos! 🎉✨
          </p>
        </header>

        {/* Main Content */}
        <main>
          <AttendeesList />
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm font-indie">
          <p>Feito com 💖 para Maria</p>
        </footer>
      </div>
    </div>
  );
}
