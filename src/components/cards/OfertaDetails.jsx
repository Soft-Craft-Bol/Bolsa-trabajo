import React from 'react';
import { FaCheckCircle, FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaClock, FaLaptopHouse } from 'react-icons/fa';

export default function OfertaDetails({ oferta }) {
  if (!oferta) {
    return (
      <div className="p-6 text-center text-gray-500">
        Selecciona una oferta para ver los detalles.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-1">
        {oferta.title}
        {oferta.isVerified && <FaCheckCircle className="text-green-600" />}
      </h2>
      <p className="text-lg font-medium text-gray-700 mb-4">{oferta.companyName}</p>

      <p className="text-sm text-gray-600 mb-4">{oferta.description}</p>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-400" /> {oferta.location}
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-400" /> Publicada: {oferta.offerDate}
        </div>
        <div className="flex items-center gap-2">
          <FaMoneyBillWave className="text-gray-400" /> Salario: {oferta.salary}
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-gray-400" /> Tipo de contrato: {oferta.contractType}
        </div>
        <div className="flex items-center gap-2">
          <FaLaptopHouse className="text-gray-400" /> Modalidad: {oferta.modality}
        </div>
      </div>

      <button className="mt-6 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition">
        Postular ahora
      </button>
    </div>
  );
}
