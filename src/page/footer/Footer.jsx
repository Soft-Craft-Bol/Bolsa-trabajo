const icons = {
  Facebook: (
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  ),
  X: (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  ),
  Instagram: (
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  ),
  Linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
  Mail: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  Phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  ),
}

const Icon = ({ name, className = "h-5 w-5", ...props }) => (
  <svg
    className={className}
    fill={name === "Mail" || name === "Phone" ? "none" : "currentColor"}
    stroke={name === "Mail" || name === "Phone" ? "currentColor" : undefined}
    viewBox="0 0 24 24"
    {...props}
  >
    {icons[name]}
  </svg>
)

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Información del sitio */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Bolsa de Trabajo</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Conectamos talento con oportunidades. Encuentra tu próximo empleo o descubre candidatos excepcionales para
              tu empresa.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Inicio" },
                { href: "/ofertas", label: "Ofertas" },
                { href: "/empresas", label: "Empresas" },
                { href: "/registro", label: "Registrarse" },
                { href: "/login", label: "Iniciar Sesión" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" className="h-4 w-4" />
                <a
                  href="mailto:contacto@bolsatrabajo.com"
                  className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  contacto@bolsatrabajo.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" className="h-4 w-4" />
                <a
                  href="tel:+1234567890"
                  className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              {[
                { href: "https://facebook.com", name: "Facebook", bgHover: "hover:bg-blue-600", textHover: "hover:text-white" },
                { href: "https://x.com", name: "X", bgHover: "hover:bg-black", textHover: "hover:text-white" },
                { href: "https://instagram.com", name: "Instagram", bgHover: "hover:bg-pink-600", textHover: "hover:text-white" },
                { href: "https://linkedin.com", name: "Linkedin", bgHover: "hover:bg-blue-700", textHover: "hover:text-white" },
              ].map(({ href, name, bgHover, textHover }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className={`p-2 rounded-full bg-gray-200 dark:bg-gray-700 ${bgHover} ${textHover} dark:hover:bg-opacity-90 transition-all duration-200`}
                >
                  <Icon name={name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © Softcraft. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
