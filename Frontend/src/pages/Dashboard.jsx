import { Search, ShoppingBag, Heart, ArrowRight } from "lucide-react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const collections = [
  {
    title: "New Arrivals",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Minimal Essentials",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
];

const products = [
  {
    name: "Oversized Wool Coat",
    price: "$240",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Leather Sneakers",
    price: "$180",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Minimal Knitwear",
    price: "$140",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Relaxed Blazer",
    price: "$220",
    image:
      "https://images.unsplash.com/photo-1506629905607-c8f2fdc0a95d?q=80&w=1200&auto=format&fit=crop",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyDashboardAccess = async () => {
      try {
        const response = await fetch("http://localhost:5000/dashboard", {
          method: "GET",
          credentials: "include",
        });

        console.log(response);

        if (!response.ok) {
          navigate("/login");
          return;
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        navigate("/login");
      }
    };

    verifyDashboardAccess();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f1ea] text-zinc-900 text-lg">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-zinc-900">
      {/* Navbar */}
      <header className="border-b border-black/5 bg-[#f5f1ea]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <h1 className="text-2xl tracking-[-0.08em] font-semibold">
            lenalena
          </h1>

          <div className="flex items-center gap-5 text-zinc-700">
            <Search className="w-[18px] h-[18px] cursor-pointer" />
            <Heart className="w-[18px] h-[18px] cursor-pointer" />

            <div className="relative cursor-pointer">
              <ShoppingBag className="w-[18px] h-[18px]" />

              <span className="absolute -top-2 -right-2 text-[11px]">2</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-24">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 items-center">
          {/* Left */}
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-6">
              Welcome Back
            </p>

            <h1 className="text-5xl lg:text-7xl tracking-[-0.06em] leading-[0.95] font-semibold mb-8 max-w-2xl">
              Discover curated pieces designed for modern living.
            </h1>

            <p className="text-lg text-zinc-600 leading-relaxed max-w-xl mb-10">
              Explore timeless essentials, seasonal collections, and premium
              craftsmanship created with understated elegance.
            </p>

            <button className="bg-zinc-900 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] hover:bg-zinc-800 transition">
              Explore Collection
            </button>
          </div>

          {/* Right */}
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop"
              alt="Fashion"
              className="w-full h-[700px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 border-t border-black/5">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-4">
              Collections
            </p>

            <h2 className="text-4xl lg:text-5xl tracking-[-0.04em] font-semibold">
              Seasonal highlights
            </h2>
          </div>

          <button
            onClick={() => navigate("/products")}
            className="hidden md:flex items-center gap-2 text-sm border-b border-zinc-900 pb-1 hover:opacity-60 transition"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {collections.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[650px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute bottom-10 left-10">
                <p className="uppercase tracking-[0.2em] text-xs text-white/70 mb-3">
                  Collection
                </p>

                <h3 className="text-4xl font-medium text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-4">
              Featured Products
            </p>

            <h2 className="text-4xl lg:text-5xl tracking-[-0.04em] font-semibold">
              Latest arrivals
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="overflow-hidden bg-zinc-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="pt-5 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 mb-1">
                    {product.name}
                  </h3>

                  <p className="text-sm text-zinc-500">{product.price}</p>
                </div>

                <button className="text-sm border-b border-zinc-900 pb-1 hover:opacity-60 transition whitespace-nowrap">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
