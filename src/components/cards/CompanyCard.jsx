import { MapPin, Calendar, Users, Globe, CheckCircle, Building } from "lucide-react"

export default function CompanyCard({
  name,
  founded,
  employees,
  services,
  market,
  notes,
  logo,
  location,
  website,
  isVerified,
  category,
  isSelected = false,
}) {
  const getCategoryColor = (category) => {
    switch (category) {
      case "Grande":
        return "bg-green-100 text-green-800"
      case "Mediana":
        return "bg-blue-100 text-blue-800"
      case "Pequeña":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div
      className={`
        relative p-5 rounded-xl border transition-all duration-200 hover:shadow-md
        ${isSelected ? "bg-orange-50 border-orange-200 shadow-sm" : "bg-white border-gray-200 hover:border-gray-300"}
      `}
    >
      {/* Header con logo y nombre */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          <img
            src={logo || "/placeholder.svg?height=48&width=48"}
            alt={`${name} logo`}
            className="w-12 h-12 rounded-lg object-contain bg-gray-50 p-2"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
            {isVerified && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />}
          </div>
          <p className="text-gray-600 text-sm">Fundada en {founded}</p>
        </div>
      </div>

      {/* Descripción breve */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{notes}</p>

      {/* Información de la empresa */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users className="w-4 h-4" />
          <span>{employees} empleados</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Globe className="w-4 h-4" />
          <span>Mercado: {market}</span>
        </div>
      </div>

      {/* Servicios principales */}
      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-2">Servicios principales:</p>
        <div className="flex flex-wrap gap-1">
          {services.slice(0, 3).map((service, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
            >
              {service}
            </span>
          ))}
          {services.length > 3 && (
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              +{services.length - 3} más
            </span>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span
          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}
        >
          <Building className="w-3 h-3" />
          {category}
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
          <Calendar className="w-3 h-3" />
          {new Date().getFullYear() - Number.parseInt(founded)} años
        </span>
      </div>

      {/* Botón de ver más */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200">
        Ver detalles
      </button>
    </div>
  )
}
