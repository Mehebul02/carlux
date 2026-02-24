"use client"

import { useEffect, useMemo, useState } from "react"
import { fetchProducts } from "@/lib/fetchProducts"
import { Product } from "@/types/product"
import ProductGrid from "@/components/ProductGrid"
import SearchBar from "@/components/SearchBar"
import SortDropdown from "@/components/SortDropdown"
import Loader from "@/components/Loader"
import ErrorState from "@/components/ErrorState"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (err) {
        setError("Something went wrong while fetching vehicles.")
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

 const filteredProducts = useMemo(() => {
  let filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  if (sort === "asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price)
  }

  if (sort === "desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price)
  }

  return filtered
}, [products, search, sort])
  return (
   <main className="min-h-screen bg-black text-white px-6 md:px-20 py-12">
    <h1 className="text-3xl md:text-4xl font-bold">
      Carlux Inventory
    </h1>

    <div className="flex flex-col md:flex-row gap-4 mt-6">
      <SearchBar value={search} onChange={setSearch} />
      <SortDropdown value={sort} onChange={setSort} />
    </div>

    {loading && <Loader />}
    {error && <ErrorState message={error} />}

    {!loading && !error && (
      <>
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-zinc-500">
            <div className="text-5xl mb-4">🚫</div>
            <h2 className="text-2xl font-semibold">
              No Vehicles Found
            </h2>
            <p className="mt-2 text-sm">
              No results found for "{search}"
            </p>
          </div>
        ) : (
          <ProductGrid products={filteredProducts} />
        )}
      </>
    )}
  </main>
  )
}