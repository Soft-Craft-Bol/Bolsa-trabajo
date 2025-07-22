import React from 'react';
import OfertCard from '../../components/cards/OfertCard';

const ofertas = [
  {
    photo: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Desarrollador Front-End',
    companyName: 'Tech Innovations',
    location: 'La Paz, Bolivia',
    description: 'Buscamos un desarrollador front-end con experiencia en React y JavaScript.',
    offerDate: '20 de Julio, 2025',
    salary: '$2,500',
    isVerified: true,
  },
  {
    photo: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Desarrollador Back-End',
    companyName: 'Tech Innovations',
    location: 'Cochabamba, Bolivia',
    description: 'Buscamos un desarrollador back-end con experiencia en Node.js y MongoDB.',
    offerDate: '22 de Julio, 2025',
    salary: '$2,800',
    isVerified: false,
  },
  // Puedes agregar más objetos aquí...
];

export default function OfertaList() {
  return (
    <div className="flex h-screen">
      {/* Columna izquierda: tarjetas resumidas */}
      <div className="w-1/2 overflow-y-auto border-r border-gray-200 p-6 space-y-6">
        {ofertas.map((oferta, index) => (
          <OfertCard key={`resumen-${index}`} {...oferta} />
        ))}
      </div>

      {/* Columna derecha: detalles completos */}
      <div className="w-1/2 overflow-y-auto p-6 space-y-6">
        {ofertas.map((oferta, index) => (
          <OfertCard key={`detalle-${index}`} {...oferta} />
        ))}
      </div>
    </div>
  );
}
