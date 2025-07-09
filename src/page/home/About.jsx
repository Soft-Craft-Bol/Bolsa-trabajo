import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h3 className="text-3xl font-semibold mb-4">¿QUIÉNES SOMOS?</h3>
              <p className="text-lg mb-6">
                SIS-EMPLEO es una plataforma diseñada para conectar a estudiantes con oportunidades de prácticas profesionales en empresas líderes de diversas industrias.
              </p>
              <p className="text-lg mb-6">
                Nuestro objetivo es facilitar el proceso de búsqueda, aplicación y gestión de prácticas profesionales, tanto para estudiantes como para empresas.
              </p>
              <a href="#learn-more" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">Conoce más →</a>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Equipo de trabajo" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
  )
}
