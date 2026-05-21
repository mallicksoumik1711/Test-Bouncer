import { useState } from "react";

import { Search, ShoppingBag, Heart, SlidersHorizontal } from "lucide-react";

import { products, categories } from "../utils/store";

import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-zinc-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f5f1ea]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <h1 className="text-2xl tracking-[-0.08em] font-semibold">
            lenalena
          </h1>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-2xl items-center bg-white border border-black/5 h-12 px-4">
            <Search className="w-4 h-4 text-zinc-500" />

            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-transparent outline-none px-3 text-sm"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <Heart className="w-[18px] h-[18px] cursor-pointer text-zinc-700" />

            <div className="relative cursor-pointer">
              <ShoppingBag className="w-[18px] h-[18px] text-zinc-700" />

              <span className="absolute -top-2 -right-2 text-[11px]">2</span>
            </div>
          </div>
        </div>
      </header>

      {/* Store Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Left */}
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-4">
              Store
            </p>

            <h1 className="text-4xl lg:text-6xl tracking-[-0.05em] font-semibold">
              All Products
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button className="h-12 px-5 border border-black/10 bg-white flex items-center gap-2 text-sm hover:bg-zinc-100 transition">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            <select className="h-12 px-5 border border-black/10 bg-white text-sm outline-none">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 border text-sm transition flex-shrink-0
          
          ${
            activeCategory === category
              ? "bg-zinc-900 text-white border-zinc-900"
              : "bg-white border-black/10 hover:bg-zinc-900 hover:text-white"
          }
        `}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Product Count */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-10">
        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-500">
            Showing {filteredProducts.length} products
          </p>

          <p className="text-sm text-zinc-500 hidden md:block">
            Category: {activeCategory}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-14">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h1 className="text-2xl tracking-[-0.08em] font-semibold">
            lenalena
          </h1>

          <div className="flex items-center gap-8 text-sm text-zinc-500">
            <button>About</button>
            <button>Shop</button>
            <button>Contact</button>
            <button>Support</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AllProducts;
