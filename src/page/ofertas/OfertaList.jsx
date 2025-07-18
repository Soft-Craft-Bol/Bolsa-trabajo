import React, { useState } from 'react';
import OfertCard from '../../components/cards/OfertCard';
import OfertaDetails from '../../components/cards/OfertaDetails';

const ofertas = [
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    title: 'Desarrollador Front-End',
    companyName: 'Microsoft Bolivia',
    location: 'Cochabamba, Bolivia',
    description: 'Únete a nuestro equipo para crear experiencias web modernas con React y TypeScript.',
    offerDate: '5 de Julio, 2025',
    salary: 'Bs. 12,000',
    isVerified: true,
    contractType: 'Tiempo completo',
    modality: 'Remoto',
    recentlyViewed: true,
  },
  {
    photo: 'https://www.softcraftbol.com/assets/logoSoftCraft-yGORptqy.png',
    title: 'Ingeniero de Software',
    companyName: 'SOFTCRAFT',
    location: 'Santa Cruz, Bolivia',
    description: 'Buscamos ingeniero para desarrollo de algoritmos en CUDA y sistemas de IA.',
    offerDate: '3 de Julio, 2025',
    salary: 'Bs. 15,500',
    isVerified: true,
    contractType: 'Tiempo completo',
    modality: 'Presencial',
    recentlyViewed: false,
  },
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    title: 'Internship Backend Developer',
    companyName:'IBM',
    location: 'La Paz, Bolivia',
    description: 'Prácticas profesionales para estudiantes de sistemas en desarrollo backend con Java y Spring Boot.',
    offerDate: '1 de Julio, 2025',
    salary: 'Bs. 3,500',
    isVerified: false,
    contractType: 'Prácticas',
    modality: 'Híbrido',
    recentlyViewed: true,
  },
];

export default function OfertasList() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-screen">
      {/* Columna izquierda */}
      <div className="col-span-1 overflow-y-auto border-r">
        {ofertas.map((oferta, index) => (
          <div
            key={index}
            onClick={() => setSelectedOffer(oferta)}
            className="cursor-pointer hover:bg-gray-50"
          >
            <OfertCard {...oferta} />
          </div>
        ))}
      </div>

      {/* Columna derecha */}
      <div className="col-span-2 overflow-y-auto">
        <OfertaDetails oferta={selectedOffer} />
      </div>
    </div>
  );
}
