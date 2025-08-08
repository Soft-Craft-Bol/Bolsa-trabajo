import { MapPin, Calendar, Users, Globe, CheckCircle, Building, Award, ExternalLink, Mail } from "lucide-react"

export default function CompanyDetails({ empresa }) {
  if (!empresa) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Selecciona una empresa</h3>
          <p className="text-gray-500">Elige una empresa de la lista para ver los detalles completos</p>
        </div>
      </div>
    )
  }

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
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 p-8">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <img
              src={empresa.logo || "/placeholder.svg?height=80&width=80"}
              alt={`${empresa.name} logo`}
              className="w-20 h-20 rounded-xl object-contain bg-gray-50 p-3"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">{empresa.name}</h1>
              {empresa.isVerified && <CheckCircle className="w-6 h-6 text-green-500" />}
            </div>
            <p className="text-lg text-gray-600 mb-4">Empresa de desarrollo de software</p>

            {/* Información clave */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{empresa.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>Fundada: {empresa.founded}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Users className="w-5 h-5" />
                <span>Empleados: {empresa.employees}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Globe className="w-5 h-5" />
                <span>Mercado: {empresa.market}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <ExternalLink className="w-5 h-5" />
                <a href={`https://${empresa.website}`} className="text-orange-600 hover:text-orange-700">
                  {empresa.website}
                </a>
              </div>
            </div>

            {/* Tags de categoría */}
            <div className="flex gap-2 mt-4">
              <span
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(empresa.category)}`}
              >
                <Building className="w-4 h-4" />
                Empresa {empresa.category}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                <Calendar className="w-4 h-4" />
                {new Date().getFullYear() - Number.parseInt(empresa.founded)} años de experiencia
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="p-8">
        {/* Descripción de la empresa */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Building className="w-5 h-5" />
            Acerca de la empresa
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">{empresa.notes}</p>
            <p className="text-gray-700 leading-relaxed mt-4">
              {empresa.name} es una empresa de desarrollo de software establecida en Cochabamba, Bolivia, que se
              especializa en brindar soluciones tecnológicas innovadoras tanto para el mercado local como internacional.
              Con {new Date().getFullYear() - Number.parseInt(empresa.founded)} años de experiencia en la industria, se
              ha consolidado como una de las empresas de referencia en el sector tecnológico boliviano.
            </p>
          </div>
        </div>

        {/* Servicios */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {empresa.services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones (si las tiene) */}
        {empresa.certifications && empresa.certifications.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Certificaciones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {empresa.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Award className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Información adicional */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Información adicional
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Tamaño de empresa</h3>
                <p className="text-gray-600">{empresa.employees} empleados</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Mercado objetivo</h3>
                <p className="text-gray-600">{empresa.market}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Año de fundación</h3>
                <p className="text-gray-600">{empresa.founded}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Categoría</h3>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${getCategoryColor(empresa.category)}`}
                >
                  {empresa.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
            <ExternalLink className="w-5 h-5" />
            Visitar sitio web
          </button>
          <button className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            Contactar empresa
          </button>
        </div>
      </div>
    </div>
  )
}