"use client"

import { useState } from "react"
import { Star } from "lucide-react"

interface ProductReviewsProps {
  productId: string
}

export default function ProductReviews({}: ProductReviewsProps) {
  const [activeTab, setActiveTab] = useState("reviews")

  // Datos de ejemplo para las reseñas
  const reviews = [
    {
      id: "1",
      author: "Alex Rodriguez",
      rating: 5,
      date: "15/04/2025",
      title: "Increíbles gafas, estilo único",
      content:
        "Estas gafas son exactamente lo que estaba buscando. El estilo es perfecto para mi look urbano y la calidad es excepcional. La protección UV funciona muy bien incluso en días muy soleados.",
      verified: true,
    },
    {
      id: "2",
      author: "María González",
      rating: 4,
      date: "02/04/2025",
      title: "Buena calidad pero un poco grandes",
      content:
        "La calidad de las gafas es excelente y el diseño es muy moderno. Mi único problema es que son un poco más grandes de lo que esperaba. Aun así, estoy contenta con la compra.",
      verified: true,
    },
    {
      id: "3",
      author: "Carlos Mendoza",
      rating: 5,
      date: "28/03/2025",
      title: "Las mejores gafas que he tenido",
      content:
        "He comprado muchas gafas de sol a lo largo de los años, pero estas son sin duda las mejores. El estilo es increíble y la calidad de los materiales es superior. Muy recomendables.",
      verified: false,
    },
  ]

  return (
    <div>
      <div className="border-b border-zinc-800 mb-8">
        <div className="flex space-x-8">
          <button
            className={`pb-4 font-medium text-sm transition ${
              activeTab === "reviews" ? "border-b-2 border-yellow-500 text-white" : "text-zinc-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            RESEÑAS ({reviews.length})
          </button>
          <button
            className={`pb-4 font-medium text-sm transition ${
              activeTab === "details" ? "border-b-2 border-yellow-500 text-white" : "text-zinc-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("details")}
          >
            DETALLES DEL PRODUCTO
          </button>
        </div>
      </div>

      {activeTab === "reviews" && (
        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-zinc-800 pb-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="flex items-center mb-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-zinc-600"
                          }`}
                        />
                      ))}
                    <span className="ml-2 text-sm text-zinc-400">{review.date}</span>
                  </div>
                  <h3 className="font-bold text-lg">{review.title}</h3>
                </div>
                {review.verified && (
                  <span className="bg-green-900/30 text-green-500 text-xs px-2 py-1 rounded-sm flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Compra verificada
                  </span>
                )}
              </div>
              <div className="flex items-center mb-3">
                <span className="font-medium">{review.author}</span>
              </div>
              <p className="text-zinc-300">{review.content}</p>
            </div>
          ))}

          <div className="mt-8">
            <button className="border border-zinc-700 text-white py-2 px-4 rounded-md hover:bg-zinc-900 transition duration-200">
              Ver todas las reseñas
            </button>
          </div>
        </div>
      )}

      {activeTab === "details" && (
        <div className="space-y-6 text-zinc-300">
          <div>
            <h3 className="font-bold mb-2">Especificaciones</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Material: Acetato de alta calidad</li>
              <li>Protección UV: 100% UVA/UVB</li>
              <li>Categoría del filtro: 3</li>
              <li>Tipo de lente: Polarizada</li>
              <li>Incluye: Estuche rígido y paño de limpieza</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Dimensiones</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ancho de la lente: 54mm</li>
              <li>Puente: 18mm</li>
              <li>Longitud de la patilla: 145mm</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Cuidados</h3>
            <p>
              Limpiar con el paño incluido. Evitar el uso de productos químicos. Guardar en el estuche cuando no se
              utilicen para evitar arañazos.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
