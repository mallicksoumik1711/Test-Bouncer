const HeroSection = () => {
  return (
    <section className="bg-[#f5f1ea]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 lg:pt-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center min-h-[90vh]">
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.25em] uppercase text-zinc-500 mb-6">
              Spring / Summer 2026
            </p>

            <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[6rem] leading-[0.92] tracking-[-0.05em] font-semibold text-zinc-900">
              Modern essentials
              <br />
              for everyday wear.
            </h1>

            <p className="mt-8 text-zinc-600 text-lg leading-relaxed max-w-lg">
              Refined silhouettes, premium fabrics, and timeless pieces designed
              to move effortlessly between comfort and luxury.
            </p>

            <div className="flex items-center gap-6 mt-10">
              <button className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-800 transition">
                Shop Collection
              </button>

              <button className="text-sm font-medium border-b border-zinc-900 pb-1 hover:opacity-70 transition">
                Explore Lookbook
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-16 lg:mt-0">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop"
                alt="Fashion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 shadow-xl max-w-[240px] hidden lg:block">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
                Featured Piece
              </p>

              <h3 className="text-lg font-medium text-zinc-900">
                Minimal Wool Jacket
              </h3>

              <p className="text-zinc-500 mt-2 text-sm">
                Crafted from premium Italian wool with a relaxed modern fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
