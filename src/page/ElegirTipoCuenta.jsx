import { Link } from "react-router-dom"

// Íconos SVG personalizados
const UserIcon = () => (
  <svg className="h-16 w-16 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="h-16 w-16 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-4h-2v-2h2V9h-2V7h8v12zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export default function ElegirTipoCuenta() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Título principal */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">¿Qué tipo de cuenta deseas crear?</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Elige el tipo de cuenta que mejor se adapte a tus necesidades
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card Postulante */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Imagen/Ícono */}
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 p-8 text-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-6 inline-block shadow-lg">
                  <UserIcon />
                </div>
                <h2 className="text-2xl font-bold text-orange-600 mt-4 mb-2">Cuenta de Postulante</h2>
                <p className="text-orange-700 dark:text-orange-300 font-medium">Para buscar empleo</p>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Sube tu currículum y postúlate a empleos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Acceso a ofertas laborales en Cochabamba</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Completamente gratuito</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Para estudiantes de Informática y Sistemas</p>
                  </div>
                </div>

                <Link
                  to="/registro-postulante"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>CREAR CUENTA DE POSTULANTE</span>
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>

            {/* Card Empresa */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Imagen/Ícono */}
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 p-8 text-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-6 inline-block shadow-lg">
                  <BuildingIcon />
                </div>
                <h2 className="text-2xl font-bold text-orange-600 mt-4 mb-2">Cuenta de Empresa</h2>
                <p className="text-orange-700 dark:text-orange-300 font-medium">Para contratar talento</p>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Publica ofertas laborales</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Accede a base de datos de profesionales</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Encuentra candidatos calificados</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Registro rápido y sencillo</p>
                  </div>
                </div>

                <Link
                  to="/registro-empresa"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>CREAR CUENTA DE EMPRESA</span>
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="text-center mt-12">
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 max-w-3xl mx-auto border border-orange-200 dark:border-orange-800">
              <h3 className="text-lg font-bold text-orange-600 mb-2">¿Necesitas ayuda para decidir?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Si eres estudiante o profesional buscando empleo, elige <strong>Cuenta de Postulante</strong>. Si
                representas una empresa y quieres contratar personal, elige <strong>Cuenta de Empresa</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
