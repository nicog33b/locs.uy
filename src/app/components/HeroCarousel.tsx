'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroCarousel() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Banner principal con imagen de fondo */}
      <div className="relative w-full h-full">
        <Image 
          src="/bannerone.jpg" 
          alt="Urban Sunglasses HipHop Collection" 
          fill 
          priority
          className="object-cover object-center brightness-75"
        />
        
        {/* Overlay de gradiente para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        
        {/* Contenido del banner con animaciones */}
        <div className="absolute max-w-7xl mx-auto inset-0 flex flex-col justify-center px-8 lg:px-0 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 ff-1 tracking-tight leading-tight">
              URBAN <span className="text-yellow-400">VISION</span> COLLECTION
            </h1>
            
            <h2 className="text-xl md:text-3xl font-bold text-white/90 mb-8 ff-2">
              DONDE EL ESTILO HIP HOP SE ENCUENTRA CON LA ELEGANCIA
            </h2>
            
            <p className="text-base md:text-lg text-gray-200 mb-8 max-w-xl">
              Nuestra exclusiva colección combina la actitud urbana con diseños vanguardistas para quienes viven su estilo sin compromisos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-md text-lg transition-all"
              >
                EXPLORAR COLECCIÓN
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white hover:text-yellow-400 border-2 border-white hover:border-yellow-400 font-bold rounded-md text-lg transition-all"
              >
                ÚLTIMOS LANZAMIENTOS
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Indicador de scroll */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        >
          <div className="h-14 w-8 border-2 border-white rounded-full flex justify-center">
            <div className="h-3 w-3 bg-white rounded-full mt-2"></div>
          </div>
          <p className="text-white text-xs font-medium text-center mt-2">SCROLL</p>
        </motion.div>
      </div>
    </section>
  );
}
