import React from 'react';
import { FaCheckCircle, FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';

export default function OfertCard({
  photo,
  title,
  companyName,
  location,
  description,
  offerDate,
  salary,
  isVerified,
}) {
  return (
    <div className="w-full bg-white border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-8">
      {/* Botón de verificación arriba */}
      {isVerified && (
        <div className="w-full text-center py-2 bg-green-100 text-green-600 font-semibold rounded-t-xl">
          Verificado
        </div>
      )}
      
      {/* Imagen rectangular */}
      <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
        <img 
          src={photo} 
          alt="Company" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Contenido */}
      <div className="p-6">
        <div className="mb-5 border-b border-gray-200 pb-3">
          <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 font-medium mt-2">{companyName}</p>
        </div>
        
        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3">{description}</p>
        
        {/* Detalles en grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-500 mr-2" size={14} />
            <span className="text-gray-700 text-xs">{location}</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-500 mr-2" size={14} />
            <span className="text-gray-700 text-xs">{offerDate}</span>
          </div>
          <div className="flex items-center col-span-2">
            <FaMoneyBillWave className="text-gray-500 mr-2" size={14} />
            <span className="text-gray-900 text-sm font-semibold">{salary}</span>
          </div>
        </div>
        
        {/* Botón de postulación */}
        <button className="w-full bg-blue-600 text-white py-3 font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center">
          Postular ahora
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

