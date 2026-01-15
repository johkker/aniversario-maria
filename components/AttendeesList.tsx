'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, MapPin, Users, DollarSign, Filter } from 'lucide-react';

interface Attendee {
  name: string;
  paid: boolean;
}

export default function AttendeesList() {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [filteredAttendees, setFilteredAttendees] = useState<Attendee[]>([]);
  const [filter, setFilter] = useState<'all' | 'paid' | 'unpaid'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'status'>('name');
  const [loading, setLoading] = useState(true);

  const PRICE_PER_PERSON = 50;

  useEffect(() => {
    fetch('/api/attendees')
      .then((res) => res.json())
      .then((data) => {
        setAttendees(data);
        setFilteredAttendees(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching attendees:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = [...attendees];

    // Apply filter
    if (filter === 'paid') {
      result = result.filter((a) => a.paid);
    } else if (filter === 'unpaid') {
      result = result.filter((a) => !a.paid);
    }

    // Apply sort
    if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'status') {
      result.sort((a, b) => {
        if (a.paid === b.paid) return a.name.localeCompare(b.name);
        return a.paid ? -1 : 1;
      });
    }

    setFilteredAttendees(result);
  }, [attendees, filter, sortBy]);

  const paidCount = attendees.filter((a) => a.paid).length;
  const unpaidCount = attendees.filter((a) => !a.paid).length;
  const totalCollected = paidCount * PRICE_PER_PERSON;
  const totalExpected = attendees.length * PRICE_PER_PERSON;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-pink-400 text-xl font-indie">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-6 h-6 text-pink-600" />
            <h3 className="text-lg font-indie text-pink-900">Total de Pessoas</h3>
          </div>
          <p className="text-3xl font-bold text-pink-700">{attendees.length}</p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-indie text-green-900">Confirmados</h3>
          </div>
          <p className="text-3xl font-bold text-green-700">
            {paidCount} / {unpaidCount} pendentes
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-6 h-6 text-orange-600" />
            <h3 className="text-lg font-indie text-orange-900">Total Arrecadado</h3>
          </div>
          <p className="text-3xl font-bold text-orange-700">
            R$ {totalCollected} <span className="text-sm text-orange-600">/ R$ {totalExpected}</span>
          </p>
        </div>
      </div>

      {/* Google Maps Link */}
      <a
        href="https://maps.app.goo.gl/jUxbBA7L7yT4sfiv7"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-gradient-to-r from-indigo-200 to-purple-200 hover:from-indigo-300 hover:to-purple-300 rounded-2xl p-6 shadow-md transition-all duration-300 group"
      >
        <MapPin className="w-8 h-8 text-indigo-700 group-hover:scale-110 transition-transform" />
        <div>
          <h3 className="text-xl font-indie text-indigo-900">Local da Festa</h3>
          <p className="text-indigo-700">Clique para ver no Google Maps</p>
        </div>
      </a>

      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-indie text-gray-700 mb-2 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filtrar por:
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-indie transition-all ${
                filter === 'all'
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
              }`}
            >
              Todos ({attendees.length})
            </button>
            <button
              onClick={() => setFilter('paid')}
              className={`px-4 py-2 rounded-full text-sm font-indie transition-all ${
                filter === 'paid'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              Pagos ({paidCount})
            </button>
            <button
              onClick={() => setFilter('unpaid')}
              className={`px-4 py-2 rounded-full text-sm font-indie transition-all ${
                filter === 'unpaid'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
              }`}
            >
              Pendentes ({unpaidCount})
            </button>
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-indie text-gray-700 mb-2">
            Ordenar por:
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'name' | 'status')}
            className="w-full px-4 py-2 rounded-full bg-purple-100 text-purple-900 font-indie focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
          >
            <option value="name">Nome (A-Z)</option>
            <option value="status">Status de Pagamento</option>
          </select>
        </div>
      </div>

      {/* Attendees List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAttendees.map((attendee, index) => (
          <div
            key={index}
            className={`p-4 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 ${
              attendee.paid
                ? 'bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200'
                : 'bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-indie text-gray-800">{attendee.name}</span>
              {attendee.paid ? (
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              ) : (
                <XCircle className="w-6 h-6 text-orange-500" />
              )}
            </div>
            <div className="mt-2 text-sm">
              <span
                className={`inline-block px-3 py-1 rounded-full font-indie ${
                  attendee.paid
                    ? 'bg-green-200 text-green-800'
                    : 'bg-orange-200 text-orange-800'
                }`}
              >
                {attendee.paid ? 'Pago' : 'Pendente'}
              </span>
              <span className="ml-2 text-gray-600">R$ {PRICE_PER_PERSON}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredAttendees.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 font-indie text-lg">Nenhum convidado encontrado</p>
        </div>
      )}
    </div>
  );
}
