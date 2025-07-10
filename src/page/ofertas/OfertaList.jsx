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
    title: 'Desarrollador Front-End',
    companyName: 'Tech Innovations',
    location: 'La Paz, Bolivia',
    description: 'Buscamos un desarrollador front-end con experiencia en React y JavaScript.',
    offerDate: '20 de Julio, 2025',
    salary: '$2,500',
    isVerified: true,
  },
  // Agrega más objetos de oferta aquí...
];

export default function OfertaList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {ofertas.map((oferta, index) => (
        <OfertCard key={index} {...oferta} />
      ))}
    </div>
  );
}
