import { Product } from "@/types/product"

interface ApiResponse {
  products: Product[]
}

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(
    "https://dummyjson.com/products/category/vehicle"
  )

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  const data: ApiResponse = await res.json()

  return data.products
}