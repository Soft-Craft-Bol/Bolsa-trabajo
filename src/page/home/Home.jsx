import React from 'react';
import Servicios from './Servicios';
import About from './About';
import Stats from './Stats';
import Footer from '../footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">

      {/* Hero Section */}
<section id="home" className="relative py-24 overflow-hidden">
  {/* Fondo con imagen y degradado superpuesto */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
      alt="Entorno profesional" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Columna de texto (izquierda) */}
      <div className="lg:w-1/2 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="block">Descubre, Conecta con las</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">EMPRESAS</span>
          <span className="block">y Consigue</span>
          <span className="block">Tu Práctica Ideal UMSS</span>
        </h1>
        
        <p className="text-xl opacity-90 mb-8">
          La carrera de Ingeniería de Sistemas estrecha la mano de Empresas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#register" 
            className="px-8 py-3 bg-gradient-to-r from-amber-400 to-yellow-400 text-gray-900 rounded-lg text-lg font-semibold hover:from-amber-300 hover:to-yellow-300 transition-all shadow-lg text-center"
          >
            Comenzar Ahora
          </a>
          <a 
            href="#explore" 
            className="px-8 py-3 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors text-center"
          >
            Ver Oportunidades
          </a>
        </div>
      </div>
      
      {/* Columna de imagen (derecha) - Opcional si quieres otra imagen además del fondo */}
      <div className="lg:w-1/2 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Estudiante trabajando" 
          className="w-full h-auto rounded-xl shadow-2xl"
        />
      </div>
    </div>
  </div>
</section>
<Servicios/>
<About/>
<Stats/>
<Footer/>
      </div> 
      
    );
}
