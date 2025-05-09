"use client"

import { useState } from "react"
import { ShoppingCart, Minus, Plus, Check } from "lucide-react"

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    price: number
  }
}

export default function AddToCartButton({}: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const addToCart = () => {
    setIsAdding(true)

    // Simulamos la adición al carrito
    setTimeout(() => {
      setIsAdding(false)
      setIsAdded(true)

      setTimeout(() => {
        setIsAdded(false)
      }, 2000)
    }, 800)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="flex items-center border border-zinc-700 rounded-md">
          <button
            onClick={decreaseQuantity}
            className="p-2 text-zinc-400 hover:text-white transition"
            aria-label="Disminuir cantidad"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="px-4 py-2 text-center w-12">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="p-2 text-zinc-400 hover:text-white transition"
            aria-label="Aumentar cantidad"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <button
        onClick={addToCart}
        disabled={isAdding || isAdded}
        className={`w-full py-3 px-4 rounded-md transition duration-200 flex items-center justify-center ${
          isAdded ? "bg-green-600 hover:bg-green-700" : "bg-yellow-500 hover:bg-yellow-600 text-black"
        }`}
      >
        {isAdding ? (
          <span className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Añadiendo...
          </span>
        ) : isAdded ? (
          <span className="flex items-center font-medium">
            <Check className="h-5 w-5 mr-2" />
            Añadido al carrito
          </span>
        ) : (
          <span className="flex items-center font-medium">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Añadir al carrito
          </span>
        )}
      </button>
    </div>
  )
}
