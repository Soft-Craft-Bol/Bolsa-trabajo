import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // cerrar menú al navegar
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <nav className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center h-[90px]">
          {/* Logo */}
          <div className="text-2xl font-semibold tracking-wide">
            <Link to="/" className="hover:text-orange-600 transition-colors">
              SIS-EMPLEO <span className="text-orange-600">UMSS</span>
            </Link>
          </div>

          {/* Botón hamburguesa */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Menú de navegación */}
          <div className="hidden md:flex items-center gap-6 text-base font-medium">
            <Link to="/ofertas" className="hover:text-orange-600 transition-colors">
              Ofertas
            </Link>
            <Link to="/list-empresas" className="hover:text-orange-600 transition-colors">
              Empresas
            </Link>
            <Link to="/perfil" className="hover:text-orange-600 transition-colors">
              Mi Perfil
            </Link>
            <Link to="/admin" className="hover:text-orange-600 transition-colors">
              Admin
            </Link>

            <button
              onClick={() => handleNavigation("/registro")}
              className="px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800 transition-all"
            >
              Registrarse
            </button>

            <button className="px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-all shadow">
              Iniciar Sesión
            </button>

            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Cambiar tema"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-base font-medium bg-gray-50 dark:bg-gray-900">
            <Link to="/ofertas" onClick={() => setIsMobileMenuOpen(false)}>
              Ofertas
            </Link>
            <Link to="/list-empresas" onClick={() => setIsMobileMenuOpen(false)}>
              Empresas
            </Link>
            <Link to="/perfil" onClick={() => setIsMobileMenuOpen(false)}>
              Mi Perfil
            </Link>
            <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)}>
              Admin
            </Link>
            <button
              onClick={() => handleNavigation("/registro")}
              className="px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-100 dark:hover:bg-gray-800 transition-all"
            >
              Registrarse
            </button>
            <button className="px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-all shadow">
              Iniciar Sesión
            </button>
            <button
              onClick={toggleDarkMode}
              className="mt-2 w-fit p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Cambiar tema"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
