import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleNavigation = (path) => {
    navigate(path);
    }

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <nav className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center h-[90px]">
          <div className="text-2xl font-semibold tracking-wide">
            <Link to="/" className="hover:text-orange-600 transition-colors">
              SIS-EMPLEO <span className="text-orange-600">UMSS</span>
            </Link>
          </div>

          <div className="flex items-center gap-6 text-base font-medium">
            <Link
              to="/ofertas"
              className="hover:text-orange-600 transition-colors"
            >
              Ofertas
            </Link>
            <Link
              to="/empresas"
              className="hover:text-orange-600 transition-colors"
            >
              Empresas
            </Link>
            <Link
              to="/perfil"
              className="hover:text-orange-600 transition-colors"
            >
              Mi Perfil
            </Link>
            <Link
              to="/admin"
              className="hover:text-orange-600 transition-colors"
            >
              Admin
            </Link>

            <button
            onClick={() => handleNavigation("/registro")}
             className="px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800 transition-all">
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
      </nav>
    </div>
  );
}
