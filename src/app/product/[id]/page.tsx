'use client'
import { notFound } from "next/navigation";

import { Suspense } from "react";
import ProductGallery from "@/app/components/product/product-gallery";
import AddToCartButton from "@/app/components/product/add-to-cart-button";
import RelatedProducts from "@/app/components/product/related-products";
import ProductReviews from "@/app/components/product/product-reviews";
import { getProductById, getRelatedProducts } from '@/lib/products'
import { Clock, Shield, Truck } from 'lucide-react';

// eslint-disable-next-line @next/next/no-async-client-component
export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  // Simulamos obtener el producto por ID
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.category);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Anuncio de envío */}
      <div className="bg-black text-white py-2 px-4 flex items-center justify-center text-sm border-b border-zinc-800">
        <Clock className="h-4 w-4 mr-2 text-yellow-500" />
        <span>Envío en 24h</span>
        <span className="mx-2">•</span>
        <span>Gratis en pedidos +50USD</span>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 py-12">
          {/* Galería de imágenes */}
          <Suspense fallback={<div className="aspect-square bg-zinc-900 animate-pulse rounded-lg"></div>}>
            <ProductGallery images={product.images} />
          </Suspense>

          {/* Información del producto */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-sm mr-2">
                  NUEVO
                </span>
                <span className="text-zinc-400 text-sm">{product.category}</span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating
                              ? "text-yellow-500"
                              : "text-zinc-600"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                  <span className="ml-2 text-zinc-400 text-sm">
                    ({product.reviewCount} reseñas)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-zinc-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Descripción */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">Descripción</h2>
              <p className="text-zinc-400 mb-4">{product.description}</p>
              
              <div className="space-y-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-yellow-500">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-2 text-zinc-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Opciones */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">Color</h2>
              <div className="flex space-x-3 mb-6">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-10 h-10 rounded-full border-2 ${
                      color.selected
                        ? "border-yellow-500"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Botones de acción */}
            <div className="mt-auto space-y-4">
              <AddToCartButton product={product} />
              
              <button className="w-full bg-transparent border border-zinc-700 text-white py-3 px-4 rounded-md hover:bg-zinc-900 transition duration-200 flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Añadir a favoritos
              </button>
            </div>

            {/* Beneficios */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-zinc-800 pt-8">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-yellow-500 mr-3" />
                <span className="text-zinc-300 text-sm">Envío gratis en pedidos superiores a $50</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yellow-500 mr-3" />
                <span className="text-zinc-300 text-sm">Garantía de 2 años contra defectos de fabricación</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reseñas */}
        <div className="my-16">
          <ProductReviews productId={params.id} />
        </div>

        {/* Productos relacionados */}
        <div className="my-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span>PRODUCTOS RELACIONADOS</span>
            <span className="h-1 w-12 bg-yellow-500 ml-4"></span>
          </h2>
          <RelatedProducts products={relatedProducts} />
        </div>
      </main>
    </div>
  );
}
