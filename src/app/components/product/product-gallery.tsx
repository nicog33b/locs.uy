"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductGalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToImage = (index: number) => {
    setCurrentImage(index)
  }

  return (
    <div className="relative">
      <div className="aspect-square overflow-hidden rounded-lg bg-zinc-900 relative">
        <Image
          src={images[currentImage].src || "/placeholder.svg"}
          alt={images[currentImage].alt}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />

        {/* Controles de navegación */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Miniaturas */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative aspect-square overflow-hidden rounded-md ${
              currentImage === index ? "ring-2 ring-yellow-500" : "ring-1 ring-zinc-800"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={`Miniatura ${index + 1}`}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 12vw, 25vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
