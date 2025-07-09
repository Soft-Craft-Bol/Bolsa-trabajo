"use client"

import { useState } from "react"

// Íconos SVG personalizados
const ClockIcon = () => (
  <svg className="h-8 w-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8 8-8 8 3.59 8 8 8 8-3.59 8-8 8-8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
)

const CheckIcon = () => (
  <svg className="h-8 w-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
)

const ImportanteIcon = () => (
  <div className="h-8 w-20 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
    IMPORTANTE
  </div>
)

const ChevronDownIcon = () => (
  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

function RegistroPostulante() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    confirmarEmail: "",
    password: "",
    confirmarPassword: "",
    carrera: "",
    aceptaTerminos: false,
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.nombres.trim()) newErrors.nombres = "El nombre es obligatorio"
    if (!formData.apellidos.trim()) newErrors.apellidos = "Los apellidos son obligatorios"
    if (!formData.email.trim()) newErrors.email = "El correo electrónico es obligatorio"
    if (!formData.confirmarEmail.trim()) newErrors.confirmarEmail = "Confirmar correo es obligatorio"
    if (formData.email !== formData.confirmarEmail) newErrors.confirmarEmail = "Los correos no coinciden"
    if (!formData.password) newErrors.password = "La contraseña es obligatoria"
    if (!formData.confirmarPassword) newErrors.confirmarPassword = "Confirmar contraseña es obligatoria"
    if (formData.password !== formData.confirmarPassword) newErrors.confirmarPassword = "Las contraseñas no coinciden"
    if (!formData.carrera) newErrors.carrera = "Selecciona una carrera"
    if (!formData.aceptaTerminos) newErrors.aceptaTerminos = "Debes aceptar los términos"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Formulario válido:", formData)
      // Aquí iría la lógica para enviar los datos
      alert("¡Registro exitoso!")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Lado izquierdo - Información */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-orange-600 mb-8">
              Crea una cuenta gratuita para postular a empleos
            </h1>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="space-y-6">
                {/* Punto 1 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                    <ClockIcon />
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Registrarse es gratis y toma <span className="font-bold text-orange-600">1 minuto</span>
                    </p>
                  </div>
                </div>

                {/* Punto 2 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Podrás postular a empleos en todo Cochabamba para el departamento de Informática y Sistemas 
                    </p>
                  </div>
                </div>

                {/* Punto 3 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                    <ImportanteIcon />
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Debes registrarte con tu <span className="font-bold text-orange-600">correo institucional </span>
                      de la Universidad Mayor de San Simón
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho - Formulario */}
          <div className="flex flex-col justify-center">
            {/* Banner superior */}
            <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4 rounded-t-lg text-center">
              <h2 className="text-lg font-bold">
                ¿No Tienes una Cuenta?
                <br />
                Llena este Formulario
              </h2>
            </div>

            {/* Formulario */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-b-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Campos marcados con (*) son obligatorios</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombres */}
                <div>
                  <input
                    type="text"
                    name="nombres"
                    placeholder="Nombre(s) *"
                    value={formData.nombres}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                  {errors.nombres && <p className="text-red-500 text-sm mt-1">{errors.nombres}</p>}
                </div>

                {/* Apellidos */}
                <div>
                  <input
                    type="text"
                    name="apellidos"
                    placeholder="Apellidos *"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                  {errors.apellidos && <p className="text-red-500 text-sm mt-1">{errors.apellidos}</p>}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Confirmar Email */}
                <div>
                  <input
                    type="email"
                    name="confirmarEmail"
                    placeholder="Confirmar Correo electrónico *"
                    value={formData.confirmarEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                  {errors.confirmarEmail && <p className="text-red-500 text-sm mt-1">{errors.confirmarEmail}</p>}
                </div>

                {/* Contraseña */}
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña *"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                {/* Confirmar Contraseña */}
                <div>
                  <input
                    type="password"
                    name="confirmarPassword"
                    placeholder="Confirmar Contraseña *"
                    value={formData.confirmarPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                  {errors.confirmarPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmarPassword}</p>}
                </div>

                {/* Carrera */}
                <div className="relative">
                  <select
                    name="carrera"
                    value={formData.carrera}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent appearance-none"
                  >
                    <option value="">Carrera*</option>
                    <option value="licenciatura-informatica">LICENCIATURA EN INFORMATICA</option>
                    <option value="licenciatura-sistemas">LICENCIATURA EN SISTEMAS</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDownIcon />
                  </div>
                  {errors.carrera && <p className="text-red-500 text-sm mt-1">{errors.carrera}</p>}
                </div>

                {/* Términos y condiciones */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="aceptaTerminos"
                    checked={formData.aceptaTerminos}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label className="text-sm text-gray-600 dark:text-gray-400">
                    * Acepto los{" "}
                    <a href="#" className="text-orange-600 hover:text-orange-700 underline">
                      Términos de Uso
                    </a>{" "}
                    y la{" "}
                    <a href="#" className="text-orange-600 hover:text-orange-700 underline">
                      Política de Privacidad
                    </a>
                  </label>
                </div>
                {errors.aceptaTerminos && <p className="text-red-500 text-sm mt-1">{errors.aceptaTerminos}</p>}

                {/* Botón de registro */}
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>REGISTRARSE</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistroPostulante
