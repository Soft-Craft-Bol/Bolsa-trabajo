"use client"

import { useState } from "react"
import CompanyCard from "../components/cards/CompanyCard"
import CompanyDetails from "../components/cards/CompanyDetails"

const empresas = [
  {
    name: "Jalasoft",
    founded: "2001",
    employees: "1000–9999",
    services: ["Staff augmentation", "Desarrollo web", "Mobile app", "Software personalizado"],
    market: "Local e internacional",
    notes: "Una de las mayores en Bolivia, destacada en QA y apps móviles",
    logo: "/jalasoft-logo.png",
    location: "Cochabamba, Bolivia",
    website: "www.jalasoft.com",
    isVerified: true,
    category: "Grande",
  },
  {
    name: "AssureSoft",
    founded: "2006",
    employees: "≈500",
    services: ["Outsourcing", "QA", "UX/UI", "Cloud", "DevOps", "Staff augmentation"],
    market: "EE.UU., Paraguay, Bolivia",
    certifications: ["ISO 27001:2022"],
    notes: "Great Place to Work top10 en Bolivia, academia interna de formación",
    logo: "/assuresoft-logo.png",
    location: "Cochabamba, Bolivia",
    website: "www.assuresoft.com",
    isVerified: true,
    category: "Grande",
  },
  {
    name: "Digital Harbor",
    founded: "2015",
    employees: "PYME",
    services: ["Desarrollo de software propio", "Innovación de productos"],
    market: "EE.UU.",
    notes: "No es outsourcing; tiene un programa de talentos con incorporación laboral",
    logo: "/digital-harbor-logo.png",
    location: "Cochabamba, Bolivia",
    website: "www.digitalharbor.com",
    isVerified: true,
    category: "Mediana",
  },
  {
    name: "Nearshore Code",
    founded: "2018",
    employees: "10–49",
    services: ["Staff augmentation", "Desarrollo móvil"],
    market: "Exportación",
    notes: "Especializada en desarrollo móvil para mercados internacionales",
    logo: "/placeholder-67gki.png",
    location: "Cochabamba, Bolivia",
    website: "www.nearshorecode.com",
    isVerified: false,
    category: "Pequeña",
  },
  {
    name: "WiseDevs",
    founded: "2017",
    employees: "10–49",
    services: ["QA", "Mobile apps"],
    market: "Bolivia",
    notes: "Rankeada en Clutch como top QA",
    logo: "/placeholder-48wnr.png",
    location: "Cochabamba, Bolivia",
    website: "www.wisedevs.com",
    isVerified: true,
    category: "Pequeña",
  },
  {
    name: "SoftCraft",
    founded: "2010",
    employees: "50–199",
    services: ["Desarrollo web", "E-commerce", "Sistemas empresariales"],
    market: "Bolivia y región",
    notes: "Especializada en soluciones empresariales y e-commerce",
    logo: "https://www.softcraftbol.com/assets/logoSoftCraft-yGORptqy.png",
    location: "Cochabamba, Bolivia",
    website: "www.softcraftbol.com",
    isVerified: true,
    category: "Mediana",
  },
]

export default function CompanyList() {
  const [selectedCompany, setSelectedCompany] = useState(empresas[0])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-screen">
          {/* Lista de empresas - Columna izquierda */}
          <div className="lg:col-span-2 bg-white border-r border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-900">Empresas de Software</h1>
              <p className="text-gray-600 mt-1">Cochabamba, Bolivia • {empresas.length} empresas</p>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-120px)] scrollbar-hide">
              <div className="p-4 space-y-3">
                {empresas.map((empresa, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedCompany(empresa)}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedCompany?.name === empresa.name ? "ring-2 ring-orange-500 ring-opacity-50" : ""
                    }`}
                  >
                    <CompanyCard {...empresa} isSelected={selectedCompany?.name === empresa.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detalles de la empresa - Columna derecha */}
          <div className="lg:col-span-3 bg-white overflow-y-auto">
            <CompanyDetails empresa={selectedCompany} />
          </div>
        </div>
      </div>
    </div>
  )
}