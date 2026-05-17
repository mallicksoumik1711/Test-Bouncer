import { Search, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f1ea]/95 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Left Nav */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] text-zinc-700">
          <a href="#" className="hover:text-black transition-colors">
            Shop
          </a>

          <a href="#" className="hover:text-black transition-colors">
            New Arrivals
          </a>

          <a href="#" className="hover:text-black transition-colors">
            Collections
          </a>
        </nav>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl tracking-[-0.08em] font-semibold text-zinc-900">
            lenalena
          </h1>
        </div>

        {/* Right Actions */}
        <div className="ml-auto flex items-center gap-5 text-zinc-700">
          <button className="hover:text-black transition-colors">
            <Search className="w-[18px] h-[18px]" strokeWidth={1.8} />
          </button>

          <Link to="/login" className="hover:text-black transition-colors">
            <User className="w-[18px] h-[18px]" strokeWidth={1.8} />
          </Link>

          <button className="relative hover:text-black transition-colors">
            <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.8} />

            <span className="absolute -top-2 -right-2 text-[11px] text-black">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
