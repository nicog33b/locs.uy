"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, User, Search, ChevronDown, X, Menu, Heart, Sun, Eye, Glasses } from "lucide-react"

// Datos de ejemplo para los menús desplegables
const productCategories = [
  {
    name: "Gafas de Sol",
    href: "/productos/gafas-de-sol",
    icon: <Sun className="h-5 w-5 text-amber-500" />,
    featured: [
      { name: "Colección Verano", href: "/colecciones/verano" },
      { name: "Polarizadas", href: "/productos/gafas-de-sol/polarizadas" },
      { name: "Deportivas", href: "/productos/gafas-de-sol/deportivas" },
    ],
  },
  {
    name: "Gafas Graduadas",
    href: "/productos/gafas-graduadas",
    icon: <Eye className="h-5 w-5 text-blue-500" />,
    featured: [
      { name: "Montura Completa", href: "/productos/gafas-graduadas/montura-completa" },
      { name: "Semi al Aire", href: "/productos/gafas-graduadas/semi-al-aire" },
      { name: "Sin Montura", href: "/productos/gafas-graduadas/sin-montura" },
    ],
  },
  {
    name: "Lentes de Contacto",
    href: "/productos/lentes-de-contacto",
    icon: <Glasses className="h-5 w-5 text-emerald-500" />,
    featured: [
      { name: "Diarias", href: "/productos/lentes-de-contacto/diarias" },
      { name: "Mensuales", href: "/productos/lentes-de-contacto/mensuales" },
      { name: "Cosméticas", href: "/productos/lentes-de-contacto/cosmeticas" },
    ],
  },
]

const navLinks = [
  {
    href: "/productos",
    label: "Productos",
    hasSubmenu: true,
    submenu: productCategories,
  },
  {
    href: "/destacados",
    label: "Destacados",
    hasSubmenu: false,
  },
  {
    href: "/marcas",
    label: "Marcas",
    hasSubmenu: false,
  },
  {
    href: "/contacto",
    label: "Contacto",
    hasSubmenu: false,
  },
]

// Productos de ejemplo para el mini carrito
const cartItems = [
  {
    id: 1,
    name: "Gafas de Sol Ray-Ban Aviator",
    price: 149.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Lentes de Contacto Acuvue Oasys",
    price: 45.5,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)

  const searchRef = useRef<HTMLDivElement>(null)
  const cartRef = useRef<HTMLDivElement>(null)
  const userDropdownRef = useRef<HTMLDivElement>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Calcular el total del carrito
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  // Detectar scroll para cambiar la apariencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar dropdowns al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Cerrar búsqueda
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }

      // Cerrar carrito
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setCartOpen(false)
      }

      // Cerrar dropdown de usuario
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false)
      }

      // Cerrar dropdowns de navegación
      if (
        activeDropdown &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [activeDropdown])

  // Función para alternar el dropdown
  const toggleDropdown = (href: string) => {
    setActiveDropdown(activeDropdown === href ? null : href)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-[#f7f7f7]/95 backdrop-blur-md shadow-md" : "bg-[#f7f7f7]"
      }`}
    >
      {/* Barra superior con información de envío y contacto */}
      <div className="hidden md:block bg-[#222222] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <p className="ff-2 fw-lighter">Envío gratis en pedidos superiores a 50USD</p>
          <div className="flex items-center gap-4">
            <Link href="/tiendas" className="hover:text-gray-300 transition-colors">
              Nuestras tiendas
            </Link>
            <span>|</span>
            <Link href="/ayuda" className="hover:text-gray-300 transition-colors">
              Ayuda
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <nav className={`max-w-7xl mx-auto transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="flex items-center justify-between px-4 relative">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center justify-left min-w-[120px]">
              <Image
                src="/logo.png"
                alt="OptiVision"
                width={300}
                height={300}
                className={`transition-all duration-300 h-18 w-18 ${isScrolled ? "h-10" : "h-12"}`}
              />
            </div>
          </Link>

          {/* Navegación principal - Escritorio */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-8 text-base font-medium items-center">
              {navLinks.map((link) => (
                <li key={link.href} className="relative group">
                  {link.hasSubmenu ? (
                    <div ref={(el) => { dropdownRefs.current[link.href] = el; }}>
                      <button
                        onClick={() => toggleDropdown(link.href)}
                        className="flex items-center gap-1 px-2 py-1 text-gray-800 hover:text-blue-600 transition-colors focus:outline-none"
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === link.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown menu */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[400px] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 z-20 ${
                          activeDropdown === link.href
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="p-4 grid grid-cols-1 gap-4">
                          {link.submenu?.map((category) => (
                            <div key={category.name} className="space-y-2">
                              <Link
                                href={category.href}
                                className="flex items-center gap-2 font-medium text-gray-900 hover:text-blue-600 transition-colors"
                              >
                                {category.icon}
                                {category.name}
                              </Link>
                              <div className="pl-7 grid grid-cols-1 gap-1">
                                {category.featured.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href} className="relative px-2 py-1 text-gray-800 transition-colors">
                      <span className="relative z-10 hover:text-blue-600 transition-colors duration-300">
                        {link.label}
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Iconos de acción */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            {/* Búsqueda expandible */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Buscar"
              >
                {isSearchOpen ? <X className="h-5 w-5 text-gray-700" /> : <Search className="h-5 w-5 text-gray-700" />}
              </button>

              <div
                className={`absolute right-0 top-full mt-2 w-72 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 transform origin-top-right z-20 ${
                  isSearchOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                }`}
              >
                <form className="flex p-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="search"
                    placeholder="Buscar productos..."
                    className="flex-1 border-0 focus:outline-none px-3 py-2"
                    autoFocus={isSearchOpen}
                  />
                  <button type="submit" className="p-2 text-gray-500 hover:text-gray-700">
                    <Search className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Favoritos */}
            <Link
              href="/favoritos"
              className="hidden sm:flex p-2 rounded-full hover:bg-gray-100 transition-colors relative"
              aria-label="Favoritos"
            >
              <Heart className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-blue-600 text-white text-xs font-bold rounded-full">
                3
              </span>
            </Link>

            {/* Usuario */}
            <div className="relative" ref={userDropdownRef}>
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Mi cuenta"
              >
                <User className="h-5 w-5 text-gray-700" />
              </button>

              <div
                className={`absolute right-0 top-full mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-200 z-20 ${
                  userDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="py-1">
                  <Link href="/cuenta" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Mi cuenta
                  </Link>
                  <Link href="/pedidos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Mis pedidos
                  </Link>
                  <Link href="/favoritos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Favoritos
                  </Link>
                  <div className="border-t my-1"></div>
                  <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Iniciar sesión
                  </Link>
                  <Link href="/registro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Registrarse
                  </Link>
                </div>
              </div>
            </div>

            {/* Mini carrito */}
            <div className="relative" ref={cartRef}>
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
                aria-label="Carrito"
              >
                <ShoppingBag className="h-5 w-5 text-gray-700" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-blue-600 text-white text-xs font-bold rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>

              <div
                className={`absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-200 z-20 ${
                  cartOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <h2 className="text-lg font-semibold">Tu carrito</h2>
                    <button onClick={() => setCartOpen(false)} className="rounded-full hover:bg-gray-100 p-2">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Cerrar</span>
                    </button>
                  </div>

                  <div className="max-h-80 overflow-auto py-4">
                    {cartItems.length > 0 ? (
                      <ul className="space-y-4">
                        {cartItems.map((item) => (
                          <li key={item.id} className="flex gap-4">
                            <div className="h-20 w-20 rounded-md overflow-hidden bg-gray-100">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-sm font-medium">{item.name}</h3>
                              <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center border rounded-md">
                                  <button className="px-2 py-1 text-gray-500 hover:text-gray-700">-</button>
                                  <span className="px-2 py-1">{item.quantity}</span>
                                  <button className="px-2 py-1 text-gray-500 hover:text-gray-700">+</button>
                                </div>
                                <p className="font-medium">{item.price.toFixed(2)}€</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-center py-8">
                        <ShoppingBag className="h-12 w-12 mx-auto text-gray-400" />
                        <p className="mt-4 text-gray-500">Tu carrito está vacío</p>
                      </div>
                    )}
                  </div>

                  {cartItems.length > 0 && (
                    <div className="border-t pt-4 space-y-4">
                      <div className="flex items-center justify-between font-medium">
                        <span>Total</span>
                        <span>{cartTotal.toFixed(2)}€</span>
                      </div>
                      <div className="grid gap-2">
                        <Link
                          href="/checkout"
                          className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                        >
                          Finalizar compra
                        </Link>
                        <Link
                          href="/carrito"
                          className="block w-full text-center py-2 px-4 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md transition-colors"
                        >
                          Ver carrito
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Menú móvil */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors ml-1"
              aria-label="Menú"
            >
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Menú móvil panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b p-4">
            <Image src="/logo.png" alt="OptiVision" width={100} height={40} />
            <button onClick={() => setMobileMenuOpen(false)} className="rounded-full hover:bg-gray-100 p-2">
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar</span>
            </button>
          </div>

          <div className="py-4 flex-1 overflow-auto">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.href} className="py-1">
                  {link.hasSubmenu ? (
                    <details className="group">
                      <summary className="flex items-center justify-between px-4 py-2 cursor-pointer list-none">
                        <span className="font-medium">{link.label}</span>
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="pl-4 space-y-2 mt-2">
                        {link.submenu?.map((category) => (
                          <details key={category.name} className="group">
                            <summary className="flex items-center gap-2 px-4 py-2 cursor-pointer list-none">
                              {category.icon}
                              <span className="text-sm font-medium">{category.name}</span>
                              <ChevronDown className="h-3 w-3 ml-auto transition-transform duration-200 group-open:rotate-180" />
                            </summary>
                            <div className="pl-10 space-y-1 mt-1">
                              {category.featured.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block px-4 py-2 text-xs text-gray-600 hover:bg-gray-50"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </details>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-2 font-medium hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4 p-4 space-y-2">
            <Link
              href="/tiendas"
              className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nuestras tiendas
            </Link>
            <Link
              href="/ayuda"
              className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ayuda
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
