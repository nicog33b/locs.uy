"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ShoppingCart, Star } from "lucide-react"

interface CardGlassesCarrouselProps {
  imageSrc: string
  imageAlt: string
  name: string
  price: number
  rating: number // 0-5
  reviews: number
  onAddToCart: () => void
}

export default function CardGlassesCarrousel({
  imageSrc,
  imageAlt,
  name,
  price,
  rating,
  reviews,
  onAddToCart,
}: CardGlassesCarrouselProps) {
  // Format price to USD
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)

  // Generate stars based on rating
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300 dark:text-gray-600"
          }`}
          data-testid={`star-${i}`}
        />
      ))
  }

  return (
    <motion.div
      className="w-full sm:w-90  overflow-hidden shadow-lg flex flex-col"
      whileHover={{
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      data-testid="product-card"
    >
      {/* Product Image */}
      <div className="relative h-90 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
          sizes="(max-width: 640px) 100vw, 288px"
          className="object-cover"
          data-testid="product-image"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Name */}
        <h3
          className="text-balance font-medium text-zinc-900 line-clamp-2 mb-2"
          data-testid="product-name"
        >
          {name}
        </h3>

        {/* Price */}
        <p className="text-xl font-semibold text-zinc-600 mb-2" data-testid="product-price">
          {formattedPrice}
        </p>

      
      </div>
    </motion.div>
  )
}
