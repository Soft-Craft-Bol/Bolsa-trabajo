import React from 'react';
import { FaCheckCircle, FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaClock, FaLaptopHouse } from 'react-icons/fa';

export default function OfertCard({
  photo,
  title,
  companyName,
  location,
  description,
  offerDate,
  salary,
  isVerified,
  contractType,
  modality,
  recentlyViewed,
}) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition duration-200 relative">
      
      {/* Logo circular */}
      <div className="absolute top-4 right-4">
        <img
          src={photo}
          alt="Logo"
          className="w-12 h-12 rounded-full border shadow object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-5">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-1">
            {title}
            {isVerified && <FaCheckCircle className="text-green-600" size={16} />}
          </h3>
          <p className="text-gray-700 font-medium">{companyName}</p>
        </div>

        {recentlyViewed && (
          <span className="inline-block text-xs text-orange-600 bg-orange-100 px-2 py-0.5 rounded mb-2">
            Visto recientemente
          </span>
        )}

        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Detalles */}
        <div className="space-y-1 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-400" size={12} />
            {location}
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-gray-400" size={12} />
            Publicada: {offerDate}
          </div>
          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-gray-400" size={12} />
            {salary}
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-gray-400" size={12} />
            {contractType}
          </div>
          <div className="flex items-center gap-2">
            <FaLaptopHouse className="text-gray-400" size={12} />
            {modality}
          </div>
        </div>

        {/* Botón */}
        <button className="w-full bg-orange-600 text-white py-2 rounded font-medium hover:bg-orange-700 transition">
          Postular ahora
        </button>
      </div>
    </div>
  );
}
