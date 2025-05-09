import Image from "next/image"
import Link from "next/link"

interface RelatedProductsProps {
  products: {
    id: string
    name: string
    price: number
    originalPrice?: number
    discount?: number
    image: string
    category: string
  }[]
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} className="group">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900 mb-3 group-hover:opacity-90 transition">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            />
            {product.discount && (
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
                {product.discount}% OFF
              </div>
            )}
          </div>
          <div>
            <div className="text-sm text-zinc-400 mb-1">{product.category}</div>
            <h3 className="text-lg font-medium mb-1 group-hover:text-yellow-500 transition">{product.name}</h3>
            <div className="flex items-center gap-2">
              <span className="font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-zinc-500 line-through">${product.originalPrice}</span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
