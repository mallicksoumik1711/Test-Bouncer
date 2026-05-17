const categories = [
  {
    title: "Women",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Men",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
  },
];

const Categories = () => {
  return (
    <section className="bg-[#f5f1ea] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-4">
              Categories
            </p>

            <h2 className="text-4xl lg:text-5xl tracking-[-0.04em] font-semibold text-zinc-900">
              Curated collections
            </h2>
          </div>

          <button className="hidden md:block text-sm border-b border-zinc-900 pb-1 hover:opacity-60 transition">
            View All
          </button>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          {/* Large Left Card */}
          <div className="relative group overflow-hidden">
            <img
              src={categories[0].image}
              alt={categories[0].title}
              className="h-[700px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-10 left-10">
              <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-3">
                Collection
              </p>

              <h3 className="text-white text-4xl font-medium">
                {categories[0].title}
              </h3>
            </div>
          </div>

          {/* Right Stacked Cards */}
          <div className="grid gap-6">
            {categories.slice(1).map((category) => (
              <div
                key={category.title}
                className="relative group overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-[337px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute bottom-8 left-8">
                  <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-2">
                    Collection
                  </p>

                  <h3 className="text-white text-3xl font-medium">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
