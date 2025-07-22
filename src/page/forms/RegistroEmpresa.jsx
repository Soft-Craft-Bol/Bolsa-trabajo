"use client"

import { useState, useRef } from "react"

// Íconos SVG personalizados
const ClockIcon = () => (
  <svg className="h-8 w-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
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

const UploadIcon = () => (
  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
)

function RegistroEmpresa() {
  const [formData, setFormData] = useState({
    nombreEmpresa: "",
    nombreResponsable: "",
    apellidoResponsable: "",
    email: "",
    confirmarEmail: "",
    password: "",
    confirmarPassword: "",
    telefono: "",
    codigoPais: "+591",
    tieneWhatsapp: false,
    sector: "",
    aceptaTerminos: false,
    logo: null,
  })

  const [errors, setErrors] = useState({})
  const [logoPreview, setLogoPreview] = useState(null)
  const fileInputRef = useRef(null)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleLogoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.type.startsWith("image/")) {
        setFormData((prev) => ({ ...prev, logo: file }))

        const reader = new FileReader()
        reader.onload = (e) => {
          setLogoPreview(e.target.result)
        }
        reader.readAsDataURL(file)
      } else {
        alert("Por favor selecciona un archivo de imagen válido")
      }
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nombreEmpresa.trim()) newErrors.nombreEmpresa = "El nombre de la empresa es obligatorio"
    if (!formData.nombreResponsable.trim()) newErrors.nombreResponsable = "El nombre del responsable es obligatorio"
    if (!formData.apellidoResponsable.trim())
      newErrors.apellidoResponsable = "El apellido del responsable es obligatorio"
    if (!formData.email.trim()) newErrors.email = "El correo electrónico es obligatorio"
    if (!formData.confirmarEmail.trim()) newErrors.confirmarEmail = "Confirmar correo es obligatorio"
    if (formData.email !== formData.confirmarEmail) newErrors.confirmarEmail = "Los correos no coinciden"
    if (!formData.password) newErrors.password = "La contraseña es obligatoria"
    if (!formData.confirmarPassword) newErrors.confirmarPassword = "Confirmar contraseña es obligatoria"
    if (formData.password !== formData.confirmarPassword) newErrors.confirmarPassword = "Las contraseñas no coinciden"
    if (!formData.telefono.trim()) newErrors.telefono = "El número de teléfono es obligatorio"
    if (!formData.sector) newErrors.sector = "Selecciona un sector"
    if (!formData.aceptaTerminos) newErrors.aceptaTerminos = "Debes aceptar los términos"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Formulario válido:", formData)
      alert("¡Registro de empresa exitoso!")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Lado izquierdo - Información */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-orange-600 mb-8">
              Registra tu empresa para publicar empleos y encontrar talento
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
                      El registro es gratuito y toma solo <span className="font-bold text-orange-600">2 minutos</span>
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
                      Accede a una base de datos de profesionales en Informática y Sistemas de Cochabamba
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
                      Publica ofertas laborales y recibe CVs de candidatos calificados de la
                      <span className="font-bold text-orange-600"> Universidad Mayor de San Simón</span>
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
                Registra tu Empresa
                <br />
                Completa este Formulario
              </h2>
            </div>

            {/* Formulario */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-b-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Campos marcados con (*) son obligatorios</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Logo de la empresa */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative">
                    <div
                      className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center cursor-pointer hover:border-orange-600 transition-colors duration-200 overflow-hidden bg-gray-50 dark:bg-gray-700"
                      onClick={triggerFileInput}
                    >
                      {logoPreview ? (
                        <img
                          src={logoPreview || "/placeholder.svg"}
                          alt="Logo preview"
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <div className="text-center">
                          <UploadIcon />
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Logo</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                    Haz clic para subir el logo de tu empresa
                  </p>
                </div>

                {/* Nombre de la empresa */}
                <div>
                  <input
                    type="text"
                    name="nombreEmpresa"
                    placeholder="Nombre de la Empresa *"
                    value={formData.nombreEmpresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                  {errors.nombreEmpresa && <p className="text-red-500 text-sm mt-1">{errors.nombreEmpresa}</p>}
                </div>

                {/* Nombre del responsable */}
                <div>
                  <input
                    type="text"
                    name="nombreResponsable"
                    placeholder="Nombre de Persona Responsable *"
                    value={formData.nombreResponsable}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                  {errors.nombreResponsable && <p className="text-red-500 text-sm mt-1">{errors.nombreResponsable}</p>}
                </div>

                {/* Apellido del responsable */}
                <div>
                  <input
                    type="text"
                    name="apellidoResponsable"
                    placeholder="Apellido de Persona Responsable *"
                    value={formData.apellidoResponsable}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                  {errors.apellidoResponsable && (
                    <p className="text-red-500 text-sm mt-1">{errors.apellidoResponsable}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico *"
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
                    placeholder="Confirmar Correo Electrónico *"
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
                    placeholder="Confirma tu contraseña *"
                    value={formData.confirmarPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                  {errors.confirmarPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmarPassword}</p>}
                </div>

                {/* Teléfono */}
                <div className="flex space-x-2">
                  <select
                    name="codigoPais"
                    value={formData.codigoPais}
                    onChange={handleInputChange}
                    className="px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  >
                    <option value="+591">🇧🇴 +591</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+54">🇦🇷 +54</option>
                    <option value="+56">🇨🇱 +56</option>
                    <option value="+57">🇨🇴 +57</option>
                  </select>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Número *"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                </div>
                {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}

                {/* WhatsApp */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="tieneWhatsapp"
                    checked={formData.tieneWhatsapp}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-2">
                    <span>Este número tiene WhatsApp</span>
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </label>
                </div>

                {/* Sector */}
                <div className="relative">
                  <select
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent appearance-none"
                  >
                    <option value="">Sector de la Empresa *</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="servicios">Servicios</option>
                    <option value="manufactura">Manufactura</option>
                    <option value="comercio">Comercio</option>
                    <option value="educacion">Educación</option>
                    <option value="salud">Salud</option>
                    <option value="construccion">Construcción</option>
                    <option value="financiero">Financiero</option>
                    <option value="otro">Otro</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDownIcon />
                  </div>
                  {errors.sector && <p className="text-red-500 text-sm mt-1">{errors.sector}</p>}
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
                  <span>REGISTRAR EMPRESA</span>
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

export default RegistroEmpresa
