import { Product } from "@/types/product"
import Image from "next/image"

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="bg-zinc-900 border cursor-pointer border-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

            <div className="relative">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-52 object-cover"
                    width={500}
                    height={500}
                />
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
                </div>
            </div>
        </div>
    )
}

export default ProductCard