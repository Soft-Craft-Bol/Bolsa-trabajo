import React from 'react'

export default function Stats() {
  return (
    <section className="py-16 bg-indigo-600 dark:bg-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-5xl font-bold mb-2">300+</h4>
              <p className="text-xl">Empresas asociadas</p>
            </div>
            <div>
              <h4 className="text-5xl font-bold mb-2">1,500+</h4>
              <p className="text-xl">Estudiantes colocados</p>
            </div>
            <div>
              <h4 className="text-5xl font-bold mb-2">95%</h4>
              <p className="text-xl">Tasa de satisfacción</p>
            </div>
          </div>
        </div>
      </section>
  )
}
