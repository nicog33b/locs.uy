'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

// Definición de la interfaz para las props
interface SunglassesGridProps {
  sunglasses: {
    id: number;
    name: string;
    price: number;
    image: string;
    originalPrice?: number;
    isNew?: boolean;
    tags?: string[];
  }[];
}

// Datos de ejemplo para las gafas de sol
const sunglassesData = [
  {
    id: 1,
    name: "X-Loop Shield Men's - Sport Edition",
    price: 42.99,
    originalPrice: 59.99,
    image: "/sunglasses/1.webp",
    isNew: true,
    tags: ["Polarizados", "Sport"],
  },
  {
    id: 2,
    name: "VG Butterfly - Colección Urbana",
    price: 47.50,
    originalPrice: 67.99,
    image: "/sunglasses/2.webp",
    isNew: true,
    tags: ["Mujer", "Fashion"],
  },
  {
    id: 3,
    name: "Air Force Aviator - Blue Edition",
    price: 54.00,
    originalPrice: 69.99,
    image: "/sunglasses/3.webp",
    isNew: false,
    tags: ["Polarizados", "Hombre"],
  },
  {
    id: 4,
    name: "Locs Classic - BlackMatte Series",
    price: 39.99,
    originalPrice: 49.99,
    image: "/sunglasses/4.webp",
    isNew: false,
    tags: ["Unisex", "Urban"],
  },
  {
    id: 5,
    name: "X-Loop Sport Pro - X3693",
    price: 44.50,
    originalPrice: 59.99,
    image: "/sunglasses/5.webp",
    isNew: true,
    tags: ["Sport", "Hombre"],
  },
  {
    id: 6,
    name: "VG Cat Eye - Pink Gradient",
    price: 45.75,
    originalPrice: 62.99,
    image: "/sunglasses/6.webp",
    isNew: false,
    tags: ["Mujer", "Elegante"],
  },
  {
    id: 7,
    name: "X-Loop Rimless - Limited Edition",
    price: 48.99,
    originalPrice: 69.99,
    image: "/sunglasses/7.webp",
    isNew: true,
    tags: ["Premium", "Unisex"],
  },
];

const SunglassesGrid: React.FC<SunglassesGridProps> = ({ sunglasses }) => {
  // Utilizamos los datos pasados como props, o los datos por defecto si no se proporcionan
  const displaySunglasses = sunglasses || sunglassesData;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">NUEVOS MODELOS</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra colección exclusiva de gafas de sol, combinando estilo urbano con la mejor protección UV para tus ojos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displaySunglasses.map((glasses) => (
            <motion.div
              key={glasses.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: glasses.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                {/* Etiqueta de descuento */}
                {glasses.originalPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full z-10">
                    {Math.round(((glasses.originalPrice - glasses.price) / glasses.originalPrice) * 100)}% OFF
                  </div>
                )}
                
                {/* Etiqueta de nuevo producto */}
                {glasses.isNew && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold py-1 px-2 rounded-full z-10">
                    NUEVO
                  </div>
                )}
                
                {/* Imagen del producto */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={glasses.image}
                    alt={glasses.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay con botones */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-md hover:bg-yellow-500 hover:text-white transition-colors"
                    >
                      <Eye size={18} />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-md hover:bg-yellow-500 hover:text-white transition-colors"
                    >
                      <Heart size={18} />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-md hover:bg-yellow-500 hover:text-white transition-colors"
                    >
                      <ShoppingCart size={18} />
                    </motion.button>
                  </div>
                </div>
                
                {/* Información del producto */}
                <div className="p-5">
                  {glasses.tags && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {glasses.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 h-14">{glasses.name}</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">${glasses.price.toFixed(2)}</span>
                      {glasses.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${glasses.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                    
                    <button className="bg-black hover:bg-yellow-500 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-300 flex items-center gap-1">
                      <ShoppingCart size={16} />
                      <span>Añadir</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SunglassesGrid;
