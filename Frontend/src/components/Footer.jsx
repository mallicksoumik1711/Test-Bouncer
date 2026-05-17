const Footer = () => {
  return (
    <footer className="bg-[#e7ded2] pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 pb-20 border-b border-black/10">
          {/* Brand */}
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-6">
              lenalena
            </p>

            <h2 className="text-4xl lg:text-6xl tracking-[-0.05em] leading-[1] font-semibold text-zinc-900 max-w-xl">
              Timeless essentials designed for modern living.
            </h2>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500 mb-6">
                Shop
              </p>

              <div className="flex flex-col gap-4 text-zinc-700">
                <a href="#" className="hover:text-black transition">
                  New Arrivals
                </a>

                <a href="#" className="hover:text-black transition">
                  Collections
                </a>

                <a href="#" className="hover:text-black transition">
                  Accessories
                </a>

                <a href="#" className="hover:text-black transition">
                  Footwear
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500 mb-6">
                Company
              </p>

              <div className="flex flex-col gap-4 text-zinc-700">
                <a href="#" className="hover:text-black transition">
                  About
                </a>

                <a href="#" className="hover:text-black transition">
                  Journal
                </a>

                <a href="#" className="hover:text-black transition">
                  Contact
                </a>

                <a href="#" className="hover:text-black transition">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-zinc-500">
            © 2026 lenalena. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-black transition">
              Privacy
            </a>

            <a href="#" className="hover:text-black transition">
              Terms
            </a>

            <a href="#" className="hover:text-black transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
