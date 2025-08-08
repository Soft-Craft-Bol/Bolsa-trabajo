import React from 'react';
import Servicios from './Servicios';
import About from './About';
import Stats from './Stats';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import fondo from '../../../public/fondoInicio1.jpg'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">

      {/* Hero Section */}
      <section id="home" className="relative py-24 overflow-hidden">
        {/* Fondo con imagen y degradado superpuesto */}
        <div className="absolute inset-0">
          <img 
            src={fondo} 
            alt="Entorno profesional" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-800/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Columna de texto (izquierda) */}
            <div className="lg:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block">Descubre, Conecta con las</span>
                <span className="text-white font-extrabold">EMPRESAS</span>
                <span className="block">y Consigue</span>
                <span className="block">Tu Práctica Ideal UMSS</span>
              </h1>
              
              <p className="text-xl opacity-90 mb-8">
                La carrera de Ingeniería de Sistemas estrecha la mano de Empresas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={"/registro-postulante"}
                  className="px-8 py-3 bg-white text-gray-900 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg text-center"
                >
                  Comenzar Ahora
                </Link>
                <Link 
                  to="#explore" 
                  className="px-8 py-3 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Ver Oportunidades
                </Link>
              </div>
            </div>
            
 {/* Columna de imagen (derecha) - Nueva versión con degradados */}
<div className="lg:w-1/2 hidden lg:block relative">
  <div className="relative rounded-xl overflow-hidden shadow-2xl">
    <img 
      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
      alt="Apretón de manos profesional" 
      className="w-full h-auto object-cover"
    />
    {/* Degradados para suavizar bordes */}
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-gray-900/10 to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-gray-900/10 to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-gray-900/10 to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-l from-gray-900/20 via-gray-900/10 to-transparent"></div>
  </div>
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