import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <nav className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">
            SisEmpleo
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-1 border border-orange-600 text-orange-600 rounded-full hover:bg-orange-50 dark:hover:bg-gray-800">
              Registrarse
            </button>

            <button className="px-4 py-1 border rounded-full bg-orange-600 text-white hover:bg-orange-700">
              Iniciar Sesión
            </button>

            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              title="Toggle theme"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
