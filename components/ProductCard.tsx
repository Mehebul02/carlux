import { Product } from "@/types/product"
import Image from "next/image"

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

      <div className="relative">
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-52 object-cover"
          width={500}
          height={500}
        />

        <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          ⭐ {product.rating}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white line-clamp-1">
          {product.title}
        </h3>

        <p className="text-sm text-zinc-400 mt-1">
          {product.brand}
        </p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-white">
            ${product.price.toLocaleString()}
          </p>

          <span className="text-xs text-green-400">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard