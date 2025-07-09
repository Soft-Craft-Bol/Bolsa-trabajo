import React from 'react'

export default function Servicios() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-4">NUESTROS SERVICIOS</h3>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">¿Qué ofrecemos?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4">👨‍🎓</div>
              <h4 className="text-xl font-semibold mb-2">Perfil Estudiantil</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Crea un perfil profesional que muestre tus habilidades, experiencia y aspiraciones.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4">🏢</div>
              <h4 className="text-xl font-semibold mb-2">Oportunidades</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Accede a cientos de ofertas de prácticas profesionales de empresas asociadas.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4">📊</div>
              <h4 className="text-xl font-semibold mb-2">Seguimiento</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Sistema de seguimiento y evaluación de tu práctica profesional.
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4">📝</div>
              <h4 className="text-xl font-semibold mb-2">Documentación</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Gestión de documentos requeridos para tu práctica profesional.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
