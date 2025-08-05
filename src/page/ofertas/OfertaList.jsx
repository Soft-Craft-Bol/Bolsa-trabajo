"use client"

import { useState } from "react"
import OfertCard from "../../components/cards/OfertCard";       // ✅ Correcto
import OfertaDetails from "../../components/cards/OfertaDetails"; // ✅ Ahora sí

const ofertas = [
  {
    photo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    title: "Desarrollador Front-End",
    companyName: "Microsoft Bolivia",
    location: "Cochabamba, Bolivia",
    description: "Únete a nuestro equipo para crear experiencias web modernas con React y TypeScript.",
    offerDate: "5 de Julio, 2025",
    salary: "Bs. 12,000",
    isVerified: true,
    contractType: "Tiempo completo",
    modality: "Remoto",
    recentlyViewed: true,
  },
  {
    photo: "https://www.softcraftbol.com/assets/logoSoftCraft-yGORptqy.png",
    title: "Ingeniero de Software",
    companyName: "SOFTCRAFT",
    location: "Santa Cruz, Bolivia",
    description: "Buscamos ingeniero para desarrollo de algoritmos en CUDA y sistemas de IA.",
    offerDate: "3 de Julio, 2025",
    salary: "Bs. 15,500",
    isVerified: true,
    contractType: "Tiempo completo",
    modality: "Presencial",
    recentlyViewed: false,
  },
  {
    photo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    title: "Internship Backend Developer",
    companyName: "IBM",
    location: "La Paz, Bolivia",
    description: "Prácticas profesionales para estudiantes de sistemas en desarrollo backend con Java y Spring Boot.",
    offerDate: "1 de Julio, 2025",
    salary: "Bs. 3,500",
    isVerified: false,
    contractType: "Prácticas",
    modality: "Híbrido",
    recentlyViewed: true,
  },
]

export default function OfertaList() {
  const [selectedOffer, setSelectedOffer] = useState(ofertas[0])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-screen">
          {/* Lista de ofertas - Columna izquierda */}
          <div className="lg:col-span-2 bg-white border-r border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-900">Ofertas de Trabajo</h1>
              <p className="text-gray-600 mt-1">{ofertas.length} ofertas disponibles</p>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-120px)] scrollbar-hide">
              <div className="p-4 space-y-3">
                {ofertas.map((oferta, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedOffer(oferta)}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedOffer?.title === oferta.title ? "ring-2 ring-orange-500 ring-opacity-50" : ""
                    }`}
                  >
                    <OfertCard {...oferta} isSelected={selectedOffer?.title === oferta.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detalles de la oferta - Columna derecha */}
          <div className="lg:col-span-3 bg-white overflow-y-auto">
            <OfertaDetails oferta={selectedOffer} />
          </div>
        </div>
      </div>
    </div>
  )
}
