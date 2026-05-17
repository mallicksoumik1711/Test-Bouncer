const products = [
  {
    id: 1,
    name: "Minimal Wool Coat",
    category: "Outerwear",
    price: "$240",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Leather Sneakers",
    category: "Footwear",
    price: "$180",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Classic Blazer",
    category: "Essentials",
    price: "$320",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Relaxed Knitwear",
    category: "Knitwear",
    price: "$140",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-[#f5f1ea]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-4">
              Featured
            </p>

            <h2 className="text-4xl lg:text-5xl tracking-[-0.04em] font-semibold text-zinc-900">
              Latest arrivals
            </h2>
          </div>

          <button className="hidden md:block text-sm border-b border-zinc-900 pb-1 hover:opacity-60 transition">
            Shop All
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden bg-zinc-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Info */}
              <div className="pt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 mb-2">
                  {product.category}
                </p>

                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-medium text-zinc-900">
                    {product.name}
                  </h3>

                  <p className="text-sm text-zinc-500 whitespace-nowrap">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;