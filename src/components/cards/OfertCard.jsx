import { MapPin, Calendar, DollarSign, Clock, Monitor, CheckCircle } from "lucide-react"

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
  isSelected = false,
}) {
  return (
    <div
      className={`
        relative p-5 rounded-xl border transition-all duration-200 hover:shadow-md
        ${isSelected ? "bg-orange-50 border-orange-200 shadow-sm" : "bg-white border-gray-200 hover:border-gray-300"}
      `}
    >
      {/* Header con logo y título */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          <img
            src={photo || "/placeholder.svg?height=48&width=48"}
            alt={`${companyName} logo`}
            className="w-12 h-12 rounded-lg object-contain bg-gray-50 p-2"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
            {isVerified && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />}
          </div>
          <p className="text-gray-700 font-medium">{companyName}</p>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

      {/* Información de la oferta */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Publicada: {offerDate}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <DollarSign className="w-4 h-4" />
          <span className="font-medium text-gray-900">{salary}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          <Clock className="w-3 h-3" />
          {contractType}
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
          <Monitor className="w-3 h-3" />
          {modality}
        </span>
      </div>

      {/* Botón de postular */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200">
        Postular ahora
      </button>
    </div>
  )
}
