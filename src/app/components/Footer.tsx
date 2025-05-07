"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, CreditCard } from "lucide-react"
import { FaCcAmex, FaCcPaypal, FaCcVisa } from "react-icons/fa"
import { SiMercadopago } from "react-icons/si"
import { FaCcMastercard } from "react-icons/fa"

// Datos para el footer
const footerLinks = [
  {
    title: "Productos",
    links: [
      { label: "Sunglasses", href: "/productos/gafas-de-sol" },
      { label: "Remeras personalizadas", href: "/productos/gafas-graduadas" },
      { label: "Accesorios", href: "/productos/lentes-de-contacto" },
    ],
  },

  {
    title: "Información",
    links: [
      { label: "Sobre Nosotros", href: "/sobre-nosotros" },
      // { label: "Nuestras Tiendas", href: "/tiendas" },
      { label: "Trabaja con Nosotros", href: "/empleo" },
      // { label: "Blog", href: "/blog" },
      { label: "Preguntas Frecuentes", href: "/faq" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { label: "Envíos y Entregas", href: "/ayuda/envios" },
      { label: "Devoluciones", href: "/ayuda/devoluciones" },
      { label: "Métodos de Pago", href: "/ayuda/pagos" },
      { label: "Política de Privacidad", href: "/privacidad" },
      { label: "Términos y Condiciones", href: "/terminos" },
    ],
  },
]

const paymentMethods = [
  { name: 'Visa',         Icon: FaCcVisa,       bgColor: '#ffffff', iconColor: '#1434CB' },
  { name: 'Mastercard',   Icon: FaCcMastercard, bgColor: '#ffffff', iconColor: '#EB001B' },
  { name: 'Amex',         Icon: FaCcAmex,       bgColor: '#ffffff', iconColor: '#006FCF' },
  { name: 'Paypal',       Icon: FaCcPaypal,     bgColor: '#ffffff', iconColor: '#003087' },
  { 
    name: 'Abitab',       
    Icon: () => <Image src="/abitab.png" alt="Abitab" width={120} height={120} />, 
    bgColor: '#ffffff', 
    iconColor: '#000000' 
  },
  { name: 'Mercado Pago', Icon: SiMercadopago,  bgColor: '#ffffff', iconColor: '#00B1EA' },
]

export default function Footer() {
  return (
    <footer className="w-full mx-auto  bg-[#222222] text-white">
      {/* Newsletter section */}
      <div className="bg-[#f7f7f7] text-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Suscríbete a nuestra newsletter</h3>
              <p className="text-gray-600">Recibe las últimas novedades y ofertas exclusivas</p>
            </div>
            <div className="w-full md:w-auto">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 min-w-[250px]"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company info and contact */}
          <div className="lg:col-span-1 justify-items-center mr-auto">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.png" alt="OptiVision" width={150} height={60} className="invert" />
            </Link>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Pando, Uruguay
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+598 9</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">contacto@locs.uy</p>
              </div>
            </div>
            <div className="mt-6 flex gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-1 ml-auto">
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm inline-block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment methods - Enhanced version */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <CreditCard className="h-6 w-6 text-blue-400" />
              <span className="text-base font-medium bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Métodos de pago aceptados:
              </span>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
              {paymentMethods.map((method) => (
                <div 
                  key={method.name}
                  className="relative group"
                >
                  <div 
                    className="bg-white rounded-xl p-4 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      background: `linear-gradient(145deg, ${method.bgColor}, #f0f0f0)`,
                      width: '75px',
                      height: '55px'
                    }}
                  >
                    <method.Icon 
                      className="h-9 w-9 transition-all duration-300" 
                      style={{ color: method.iconColor }}
                    />
                  </div>
                  <div 
                    className="absolute opacity-0 group-hover:opacity-100 -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded-full py-1 px-3 transition-all duration-200 pointer-events-none"
                    style={{ 
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.15)',
                      minWidth: 'max-content'
                    }}
                  >
                    {method.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} LOCS.UY Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-blue-400 transition-colors">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-blue-400 transition-colors">
              Cookies
            </Link>
            <Link href="/accesibilidad" className="hover:text-blue-400 transition-colors">
              Accesibilidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
