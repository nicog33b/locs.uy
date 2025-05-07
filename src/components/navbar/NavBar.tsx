"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ShoppingBag, 
  User, 
  Search, 
  ChevronDown, 
  X, 
  Menu as MenuIcon, 
  Heart, 
  Sun, 
  Eye, 
  Glasses,
  Home,
  MapPin,
  Clock,
  Menu
} from "lucide-react"
import { useScrollDirection } from "./hooks/useScrollDirection"
import { CartItem } from "./store"

// Datos para el menú
const productCategories = [
  {
    name: "Gafas de Sol",
    href: "/productos/gafas-de-sol",
    icon: <Sun strokeWidth={1.75} className="h-5 w-5 text-[#FFB800]" />,
    featured: [
      { name: "Colección Verano", href: "/colecciones/verano" },
      { name: "Polarizadas", href: "/productos/gafas-de-sol/polarizadas" },
      { name: "Deportivas", href: "/productos/gafas-de-sol/deportivas" },
    ],
  },
  {
    name: "Gafas Graduadas",
    href: "/productos/gafas-graduadas",
    icon: <Eye strokeWidth={1.75} className="h-5 w-5 text-[#E5006A]" />,
    featured: [
      { name: "Montura Completa", href: "/productos/gafas-graduadas/montura-completa" },
      { name: "Semi al Aire", href: "/productos/gafas-graduadas/semi-al-aire" },
      { name: "Sin Montura", href: "/productos/gafas-graduadas/sin-montura" },
    ],
  },
  {
    name: "Lentes de Contacto",
    href: "/productos/lentes-de-contacto",
    icon: <Glasses strokeWidth={1.75} className="h-5 w-5 text-[#FFB800]" />,
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

// Elementos de navegación mobile
const mobileNavItems = [
  { icon: <Home strokeWidth={1.75} />, label: "Inicio", href: "/" },
  { icon: <Search strokeWidth={1.75} />, label: "Buscar", action: "search" },
  { icon: <Heart strokeWidth={1.75} />, label: "Favoritos", href: "/favoritos" },
  { icon: <ShoppingBag strokeWidth={1.75} />, label: "Carrito", action: "cart" },
  { icon: <Menu strokeWidth={1.75} />, label: "Menú", action: "menu" },
]

// Componente TopBar
const TopBar = () => {
  return (
    <div className="hidden md:block bg-[#0D0D0D] text-white py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
        <div className="flex items-center">
          <Clock strokeWidth={1.75} className="h-4 w-4 mr-2 text-[#FFB800]" />
          <p className="font-['Urbanist',_sans-serif] text-sm">
            <span className="font-medium">Envío en 24h</span>
            <span className="mx-2 text-gray-400">•</span>
            <span>Gratis en pedidos +50USD</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/tiendas" className="text-sm font-['Urbanist',_sans-serif] hover:text-[#E5006A] transition-colors duration-200 flex items-center">
            <MapPin strokeWidth={1.75} className="h-3 w-3 mr-1" />
            Tiendas
          </Link>
          <span className="text-gray-500">|</span>
          <Link href="/ayuda" className="text-sm font-['Urbanist',_sans-serif] hover:text-[#E5006A] transition-colors duration-200">
            Ayuda
          </Link>
        </div>
      </div>
    </div>
  )
}

// Componente Logo
const Logo = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <Link href="/" className="relative z-10">
      <div className="flex items-center justify-left min-w-[120px]">
        <div className="relative h-10 w-28 md:h-12 md:w-36 transition-all duration-300">
          <Image
            src="/logo.png"
            alt="locs.uy"
            fill
            sizes="(max-width: 768px) 100px, 140px"
            className={`transition-all duration-300 object-contain ${isScrolled ? "scale-90" : "scale-100"}`}
            priority
          />
        </div>
      </div>
    </Link>
  )
}

// Componente DesktopMenu
const DesktopMenu = ({ 
  activeDropdown, 
  toggleDropdown, 
  dropdownRefs 
}: { 
  activeDropdown: string | null, 
  toggleDropdown: (href: string) => void,
  dropdownRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
}) => {
  return (
    <div className="hidden lg:flex flex-1 justify-center">
      <ul className="flex gap-8 text-base font-medium items-center">
        {navLinks.map((link) => (
          <li key={link.href} className="relative group">
            {link.hasSubmenu ? (
              <div 
                ref={(el) => {
                  if (dropdownRefs.current) {
                    dropdownRefs.current[link.href] = el;
                  }
                }}
              >
                <button
                  onClick={() => toggleDropdown(link.href)}
                  className="flex items-center gap-1 px-2 py-1 text-white hover:text-[#E5006A] transition-colors focus:outline-none font-['Urbanist',_sans-serif]"
                >
                  {link.label}
                  <ChevronDown
                    strokeWidth={1.75}
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === link.href ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown menu */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: activeDropdown === link.href ? 1 : 0,
                    y: activeDropdown === link.href ? 0 : 10,
                    pointerEvents: activeDropdown === link.href ? 'auto' : 'none'
                  }}
                  transition={{ 
                    ease: [0.16, 1, 0.3, 1], // OutExpo
                    duration: 0.5 
                  }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-[400px] bg-[#0D0D0D] border border-gray-800 rounded-lg shadow-2xl overflow-hidden z-20"
                >
                  <div className="p-4 grid grid-cols-1 gap-4">
                    {link.submenu?.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <Link
                          href={category.href}
                          className="flex items-center gap-2 font-medium text-white hover:text-[#E5006A] transition-colors font-['Urbanist',_sans-serif]"
                        >
                          {category.icon}
                          {category.name}
                        </Link>
                        <div className="pl-7 grid grid-cols-1 gap-1">
                          {category.featured.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="text-sm text-gray-400 hover:text-[#E5006A] transition-colors font-['Urbanist',_sans-serif]"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ) : (
              <Link 
                href={link.href} 
                className="relative px-2 py-1 text-white font-['Urbanist',_sans-serif] group"
              >
                <span className="relative z-10 group-hover:text-[#E5006A] transition-colors duration-300">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E5006A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 animate-[wiggle_2s_ease-in-out]"></span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Componente SearchBar
const SearchBar = ({ isSearchOpen, setIsSearchOpen, searchRef }: { 
  isSearchOpen: boolean, 
  setIsSearchOpen: (value: boolean) => void,
  searchRef: React.RefObject<HTMLDivElement>
}) => {
  return (
    <div className="relative" ref={searchRef}>
      <button
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className="p-2 rounded-full hover:bg-[#1A1A1A] transition-colors"
        aria-label="Buscar"
      >
        {isSearchOpen ? 
          <X strokeWidth={1.75} className="h-5 w-5 text-white" /> : 
          <Search strokeWidth={1.75} className="h-5 w-5 text-white" />}
      </button>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.8 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.8 }}
            transition={{ 
              ease: [0.16, 1, 0.3, 1], // OutExpo
              duration: 0.4 
            }}
            className="absolute right-0 top-full mt-2 w-72 bg-[#0D0D0D] border border-gray-800 shadow-2xl rounded-lg overflow-hidden z-20"
          >
            <form className="flex p-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                placeholder="Buscar productos..."
                className="flex-1 border-0 bg-[#1A1A1A] text-white focus:outline-none px-3 py-2 rounded-l-md font-['Urbanist',_sans-serif]"
                autoFocus={isSearchOpen}
              />
              <button 
                type="submit" 
                className="p-2 bg-[#E5006A] text-white rounded-r-md hover:bg-[#ff0077] transition-colors"
              >
                <Search strokeWidth={1.75} className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Componente UserMenu
const UserMenu = ({ userDropdownOpen, setUserDropdownOpen, userDropdownRef }: {
  userDropdownOpen: boolean,
  setUserDropdownOpen: (value: boolean) => void,
  userDropdownRef: React.RefObject<HTMLDivElement>
}) => {
  return (
    <div className="relative" ref={userDropdownRef}>
      <button
        onClick={() => setUserDropdownOpen(!userDropdownOpen)}
        className="p-2 rounded-full hover:bg-[#1A1A1A] transition-colors"
        aria-label="Mi cuenta"
      >
        <User strokeWidth={1.75} className="h-5 w-5 text-white" />
      </button>

      <AnimatePresence>
        {userDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scaleY: 0.9 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: 10, scaleY: 0.9 }}
            transition={{ 
              type: "spring", 
              stiffness: 140,
              damping: 20
            }}
            className="absolute right-0 top-full mt-2 w-56 bg-[#0D0D0D] border border-gray-800 shadow-2xl rounded-lg overflow-hidden z-20"
          >
            <div className="py-1">
              <Link href="/cuenta" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1A1A1A] font-['Urbanist',_sans-serif]">
                Mi cuenta
              </Link>
              <Link href="/pedidos" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1A1A1A] font-['Urbanist',_sans-serif]">
                Mis pedidos
              </Link>
              <Link href="/favoritos" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1A1A1A] font-['Urbanist',_sans-serif]">
                Favoritos
              </Link>
              <div className="border-t border-gray-800 my-1"></div>
              <Link href="/login" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1A1A1A] font-['Urbanist',_sans-serif]">
                Iniciar sesión
              </Link>
              <Link href="/registro" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1A1A1A] font-['Urbanist',_sans-serif]">
                Registrarse
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Componente CartDrawer
const CartDrawer = ({ cartOpen, setCartOpen, cartRef, cartItems, cartTotal, itemCount }: {
  cartOpen: boolean,
  setCartOpen: (value: boolean) => void,
  cartRef: React.RefObject<HTMLDivElement>,
  cartItems: CartItem[],
  cartTotal: number,
  itemCount: number
}) => {
  return (
    <div className="relative" ref={cartRef}>
      <button
        onClick={() => setCartOpen(!cartOpen)}
        className="p-2 rounded-full hover:bg-[#1A1A1A] transition-colors relative"
        aria-label="Carrito"
      >
        <ShoppingBag strokeWidth={1.75} className="h-5 w-5 text-white" />
        {itemCount > 0 && (
          <span 
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-[#E5006A] text-white text-xs font-bold rounded-full"
            aria-live="polite"
          >
            {itemCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ 
              ease: [0.16, 1, 0.3, 1], // OutExpo
              duration: 0.4 
            }}
            className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-[#0D0D0D] border border-gray-800 shadow-2xl rounded-lg overflow-hidden z-20"
          >
            <div className="p-4">
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <h2 className="text-lg font-semibold text-white font-['Urbanist',_sans-serif]">Tu carrito</h2>
                <button onClick={() => setCartOpen(false)} className="rounded-full hover:bg-[#1A1A1A] p-2">
                  <X strokeWidth={1.75} className="h-4 w-4 text-white" />
                  <span className="sr-only">Cerrar</span>
                </button>
              </div>

              <div className="max-h-80 overflow-auto py-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                {cartItems.length > 0 ? (
                  <ul className="space-y-4">
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex gap-4">
                        <div className="h-20 w-20 rounded-md overflow-hidden bg-[#1A1A1A]">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-white font-['Urbanist',_sans-serif]">{item.name}</h3>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border border-gray-800 rounded-md bg-[#1A1A1A]">
                              <button className="px-2 py-1 text-gray-400 hover:text-white">-</button>
                              <span className="px-2 py-1 text-white">{item.quantity}</span>
                              <button className="px-2 py-1 text-gray-400 hover:text-white">+</button>
                            </div>
                            <p className="font-medium text-white">${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-8">
                    <ShoppingBag strokeWidth={1.75} className="h-12 w-12 mx-auto text-gray-500" />
                    <p className="mt-4 text-gray-400 font-['Urbanist',_sans-serif]">Tu carrito está vacío</p>
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t border-gray-800 pt-4 space-y-4">
                  <div className="flex items-center justify-between font-medium text-white font-['Urbanist',_sans-serif]">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="grid gap-2">
                    <Link
                      href="/checkout"
                      prefetch={false}
                      className="block w-full text-center py-2 px-4 bg-[#E5006A] hover:bg-[#ff0077] text-white font-medium rounded-md transition-colors font-['Urbanist',_sans-serif]"
                    >
                      Finalizar compra
                    </Link>
                    <Link
                      href="/carrito"
                      prefetch={false}
                      className="block w-full text-center py-2 px-4 border border-gray-700 hover:bg-[#1A1A1A] text-gray-200 font-medium rounded-md transition-colors font-['Urbanist',_sans-serif]"
                    >
                      Ver carrito
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Componente MobileMenu
const MobileMenu = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen,
  setIsSearchOpen,
  setCartOpen
}: { 
  mobileMenuOpen: boolean, 
  setMobileMenuOpen: (value: boolean) => void,
  setIsSearchOpen: (value: boolean) => void,
  setCartOpen: (value: boolean) => void
}) => {
  // Función para manejar acciones de los íconos mobile
  const handleMobileAction = (action: string | undefined) => {
    if (action === "menu") {
      setMobileMenuOpen(true);
    } else if (action === "search") {
      setIsSearchOpen(true);
    } else if (action === "cart") {
      setCartOpen(true);
    }
  };

  return (
    <>
      {/* Bottom Navigation en Mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-14 bg-[#0D0D0D] border-t border-gray-800 flex justify-around items-center z-40 pb-safe">
        {mobileNavItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            {item.href ? (
              <Link href={item.href} className="flex flex-col items-center px-3 py-1">
                <div className="text-white">{item.icon}</div>
                <span className="text-xs text-gray-300 mt-0.5 font-['Urbanist',_sans-serif]">{item.label}</span>
              </Link>
            ) : (
              <button 
                onClick={() => handleMobileAction(item.action)}
                className="flex flex-col items-center px-3 py-1"
              >
                <div className="text-white">{item.icon}</div>
                <span className="text-xs text-gray-300 mt-0.5 font-['Urbanist',_sans-serif]">{item.label}</span>
              </button>
            )}
          </div>
        ))}
      </nav>

      {/* Overlay para menú mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Panel de menú mobile */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "100%" }}
        transition={{ 
          type: "spring",
          damping: 30,
          stiffness: 300
        }}
        className="fixed top-0 right-0 h-full w-full max-w-xs bg-[#0D0D0D] shadow-2xl z-50 lg:hidden"
        drag="x"
        dragDirectionLock
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={(e, { offset, velocity }) => {
          if (offset.x > 100 || velocity.x > 300) {
            setMobileMenuOpen(false);
          }
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b border-gray-800 p-4">
            <div className="h-8 w-24 relative">
              <Image src="/logo.png" alt="locs.uy" fill className="object-contain" />
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="rounded-full hover:bg-[#1A1A1A] p-2"
            >
              <X strokeWidth={1.75} className="h-5 w-5 text-white" />
              <span className="sr-only">Cerrar</span>
            </button>
          </div>

          <div className="py-4 flex-1 overflow-auto">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.href} className="py-1">
                  {link.hasSubmenu ? (
                    <details className="group">
                      <summary className="flex items-center justify-between px-4 py-2 cursor-pointer list-none text-white font-['Urbanist',_sans-serif]">
                        <span className="font-medium">{link.label}</span>
                        <ChevronDown strokeWidth={1.75} className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="pl-4 space-y-2 mt-2">
                        {link.submenu?.map((category) => (
                          <details key={category.name} className="group">
                            <summary className="flex items-center gap-2 px-4 py-2 cursor-pointer list-none text-white font-['Urbanist',_sans-serif]">
                              {category.icon}
                              <span className="text-sm font-medium">{category.name}</span>
                              <ChevronDown strokeWidth={1.75} className="h-3 w-3 ml-auto transition-transform duration-200 group-open:rotate-180" />
                            </summary>
                            <div className="pl-10 space-y-1 mt-1">
                              {category.featured.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block px-4 py-2 text-xs text-gray-400 hover:bg-[#1A1A1A] font-['Urbanist',_sans-serif]"
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
                      className="block px-4 py-2 font-medium hover:bg-[#1A1A1A] text-white font-['Urbanist',_sans-serif]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 p-4 space-y-2">
            <Link
              href="/tiendas"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-[#1A1A1A] rounded-md font-['Urbanist',_sans-serif]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MapPin strokeWidth={1.75} className="h-4 w-4 text-[#FFB800]" />
              Nuestras tiendas
            </Link>
            <Link
              href="/ayuda"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-[#1A1A1A] rounded-md font-['Urbanist',_sans-serif]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ayuda
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}

// Componente principal Navbar
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastBanner, setIsPastBanner] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  
  const searchRef = useRef<HTMLDivElement>(null)
  const cartRef = useRef<HTMLDivElement>(null)
  const userDropdownRef = useRef<HTMLDivElement>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  
  const scrollDirection = useScrollDirection();

  // Altura aproximada del banner (ajustar según sea necesario)
  const BANNER_HEIGHT = 600;

  // Dummy data for cart
  const cartItems: CartItem[] = [
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

  // Calcular el total del carrito
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  // Detectar scroll para cambiar la apariencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      // Detectar si ha pasado de un valor pequeño de scroll
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Detectar si ha pasado la altura del banner
      if (window.scrollY > BANNER_HEIGHT) {
        setIsPastBanner(true);
      } else {
        setIsPastBanner(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        // Solo aplicar la transformación si ha pasado el banner
        isPastBanner 
          ? scrollDirection === "down" 
            ? "-translate-y-full" 
            : "translate-y-0"
          : "translate-y-0"
      } ${
        isScrolled || isPastBanner
          ? "bg-[#0D0D0D]/90 backdrop-blur-md drop-shadow-xl" 
          : "bg-[#0D0D0D]"
      }`}
    >
      {/* Barra superior */}
      <TopBar />
      
      {/* Navbar principal */}
      <nav className={`max-w-7xl mx-auto transition-all duration-300 ${
        isScrolled || isPastBanner ? "py-2" : "py-4"
      }`}>
        <div className="flex items-center justify-between px-4 relative">
          {/* Logo */}
          <Logo isScrolled={isScrolled} />

          {/* Navegación principal - Desktop */}
          <DesktopMenu 
            activeDropdown={activeDropdown} 
            toggleDropdown={toggleDropdown}
            dropdownRefs={dropdownRefs}
          />

          {/* Iconos de acción */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            {/* Búsqueda expandible */}
            <SearchBar 
              isSearchOpen={isSearchOpen} 
              setIsSearchOpen={setIsSearchOpen}
              searchRef={searchRef}
            />

            {/* Favoritos */}
            <Link
              href="/favoritos"
              className="hidden sm:flex p-2 rounded-full hover:bg-[#1A1A1A] transition-colors relative"
              aria-label="Favoritos"
            >
              <Heart strokeWidth={1.75} className="h-5 w-5 text-white" />
              <span 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-[#E5006A] text-white text-xs font-bold rounded-full"
                aria-live="polite"
              >
                3
              </span>
            </Link>

            {/* Usuario */}
            <UserMenu 
              userDropdownOpen={userDropdownOpen}
              setUserDropdownOpen={setUserDropdownOpen}
              userDropdownRef={userDropdownRef}
            />

            {/* Mini carrito */}
            <CartDrawer 
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
              cartRef={cartRef}
              cartItems={cartItems}
              cartTotal={cartTotal}
              itemCount={itemCount}
            />

            {/* Menú móvil - Solo visible en pantallas pequeñas */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-[#1A1A1A] transition-colors ml-1"
              aria-label="Menú"
            >
              <MenuIcon strokeWidth={1.75} className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil */}
      <MobileMenu 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setIsSearchOpen={setIsSearchOpen}
        setCartOpen={setCartOpen}
      />
    </header>
  )
} 