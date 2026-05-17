const PromoBanner = () => {
  return (
    <section className="bg-[#f5f1ea] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 min-h-[650px]">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop"
              alt="Campaign"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="bg-[#e7ded2] flex items-center">
            <div className="px-10 lg:px-16 py-16 max-w-xl">
              <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-6">
                Seasonal Campaign
              </p>

              <h2 className="text-4xl lg:text-6xl leading-[1] tracking-[-0.05em] font-semibold text-zinc-900 mb-8">
                Designed for
                <br />
                modern living.
              </h2>

              <p className="text-zinc-600 text-lg leading-relaxed mb-10">
                Discover refined essentials crafted with premium materials,
                timeless silhouettes, and understated elegance.
              </p>

              <button className="border border-zinc-900 px-8 py-4 text-sm font-medium hover:bg-zinc-900 hover:text-white transition duration-300">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;