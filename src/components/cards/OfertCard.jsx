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
    <div className="w-full bg-white border border-gray-200 rounded-none shadow-sm hover:shadow-md transition duration-200">
      {/* Imagen rectangular sin bordes redondeados */}
      <div className="relative h-52 w-full overflow-hidden">
        <img 
          src={photo} 
          alt="Company" 
          className="w-full h-full object-cover"
        />
        {isVerified && (
          <div className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-sm">
            <FaCheckCircle className="text-green-600" size={16} />
          </div>
        )}
      </div>
      
      {/* Contenido */}
      <div className="p-5">
        <div className="mb-4 border-b border-gray-100 pb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-700 font-medium mt-1">{companyName}</p>
        </div>
        
        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-5 line-clamp-2">{description}</p>
        
        {/* Detalles en grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-400 mr-2" size={12} />
            <span className="text-gray-600 text-xs">{location}</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-400 mr-2" size={12} />
            <span className="text-gray-600 text-xs">{offerDate}</span>
          </div>
          <div className="flex items-center col-span-2">
            <FaMoneyBillWave className="text-gray-400 mr-2" size={12} />
            <span className="text-gray-800 text-sm font-semibold">{salary}</span>
          </div>
        </div>
        
        {/* Botón rectangular */}
        <button className="w-full bg-gray-900 text-white py-3 rounded-none font-medium hover:bg-gray-800 transition duration-200 flex items-center justify-center">
          Postular ahora
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}