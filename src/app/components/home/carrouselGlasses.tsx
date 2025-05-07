"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Button } from '../../../components/ui/button';
import { ShoppingCart } from 'lucide-react';

// Datos de productos para el carrusel
const products = [
  {
    id: 1,
    name: 'Ray-Ban Wayfarer Classic',
    price: 149,
    imageSrc: '/carrouselFotos/1.jpg',
    imageAlt: 'Ray-Ban Wayfarer Classic sunglasses with black frame',
  },
  {
    id: 2,
    name: 'Oakley Holbrook Polarized',
    price: 199,
    imageSrc: '/carrouselFotos/2.jpg',
    imageAlt: 'Oakley Holbrook Polarized Sunglasses with matte black frame',
  },
  {
    id: 3,
    name: 'Persol 649 Original',
    price: 329,
    imageSrc: '/carrouselFotos/3.jpg',
    imageAlt: 'Persol 649 Original sunglasses with tortoise frame',
  },
  {
    id: 4,
    name: 'Gucci Square Acetate',
    price: 399,
    imageSrc: '/carrouselFotos/4.jpg',
    imageAlt: 'Gucci Square Frame Acetate Sunglasses with Web detail',
  },
];

export default function CarrouselGlasses() {
  return (
      <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-black text-center uppercase tracking-wider mb-8">
        Colección HipHop
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-[33rem] w-full">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-lg">${product.price}</p>
                </div>

                <Button
                  className="mt-4 w-full flex items-center justify-center"
                  onClick={() => console.log(`Added ${product.name} to cart`)}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Añadir al Carrito
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
