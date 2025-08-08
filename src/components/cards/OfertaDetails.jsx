import { MapPin, Calendar, DollarSign, Clock, Monitor, CheckCircle, Building, Users, Briefcase } from "lucide-react"

export default function OfertaDetails({ oferta }) {
  if (!oferta) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Selecciona una oferta</h3>
          <p className="text-gray-500">Elige una oferta de trabajo de la lista para ver los detalles</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 p-8">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <img
              src={oferta.photo || "/placeholder.svg?height=80&width=80"}
              alt={`${oferta.companyName} logo`}
              className="w-20 h-20 rounded-xl object-contain bg-gray-50 p-3"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">{oferta.title}</h1>
              {oferta.isVerified && <CheckCircle className="w-6 h-6 text-green-500" />}
            </div>
            <p className="text-xl text-gray-700 font-medium mb-4">{oferta.companyName}</p>

            {/* Información clave */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{oferta.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>Publicada: {oferta.offerDate}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <DollarSign className="w-5 h-5" />
                <span className="font-semibold text-gray-900">Salario: {oferta.salary}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>Tipo de contrato: {oferta.contractType}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Monitor className="w-5 h-5" />
                <span>Modalidad: {oferta.modality}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="p-8">
        {/* Descripción del trabajo */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Descripción del puesto
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">{oferta.description}</p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Requisitos */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Requisitos
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              Experiencia mínima de 2 años en desarrollo frontend
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              Conocimientos sólidos en React y TypeScript
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              Experiencia con herramientas de versionado (Git)
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              Inglés intermedio (deseable)
            </li>
          </ul>
        </div>

        {/* Beneficios */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Building className="w-5 h-5" />
            Beneficios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Seguro médico</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Trabajo remoto</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Horario flexible</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Capacitación continua</span>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
            Postular a esta oferta
          </button>
          <button className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
            Guardar oferta
          </button>
        </div>
      </div>
    </div>
  )
}
