import { Search, Heart, ShoppingBag, Minus, Plus, X } from "lucide-react";

const cartItems = [
  {
    id: 1,
    name: "Oversized Wool Coat",
    price: 240,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Leather Sneakers",
    price: 180,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
];

const Cart = () => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-zinc-900">
      {/* Navbar */}
      <header className="border-b border-black/5 bg-[#f5f1ea]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <h1 className="text-2xl tracking-[-0.08em] font-semibold cursor-pointer">
            lenalena
          </h1>

          <div className="flex items-center gap-5 text-zinc-700">
            <Search className="w-[18px] h-[18px] cursor-pointer" />

            <Heart className="w-[18px] h-[18px] cursor-pointer" />

            <div className="relative cursor-pointer">
              <ShoppingBag className="w-[18px] h-[18px]" />

              <span className="absolute -top-2 -right-2 text-[11px]">
                {cartItems.length}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Page */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="mb-14">
          <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-4">
            Shopping Cart
          </p>

          <h1 className="text-5xl lg:text-6xl tracking-[-0.05em] font-semibold">
            Your selections
          </h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-16">
          {/* Left */}
          <div className="space-y-10">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border-b border-black/5 pb-10 flex flex-col sm:flex-row gap-6"
              >
                {/* Image */}
                <div className="overflow-hidden bg-zinc-100 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-[220px] h-[300px] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h2 className="text-2xl font-medium tracking-[-0.03em] mb-3">
                        {item.name}
                      </h2>

                      <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
                        Premium craftsmanship with timeless aesthetics designed
                        for modern everyday wear.
                      </p>
                    </div>

                    <button className="text-zinc-400 hover:text-zinc-900 transition">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mt-10">
                    {/* Quantity */}
                    <div>
                      <p className="uppercase tracking-[0.2em] text-[11px] text-zinc-500 mb-3">
                        Quantity
                      </p>

                      <div className="flex items-center border border-black/10 w-fit">
                        <button className="w-12 h-12 flex items-center justify-center hover:bg-black/5 transition">
                          <Minus className="w-4 h-4" />
                        </button>

                        <div className="w-14 h-12 flex items-center justify-center text-sm">
                          {item.quantity}
                        </div>

                        <button className="w-12 h-12 flex items-center justify-center hover:bg-black/5 transition">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-left sm:text-right">
                      <p className="uppercase tracking-[0.2em] text-[11px] text-zinc-500 mb-3">
                        Total
                      </p>

                      <h3 className="text-2xl font-medium">
                        ${item.price * item.quantity}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="h-fit sticky top-28 border border-black/5 bg-white/40 p-8">
            <div className="mb-10">
              <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-4">
                Order Summary
              </p>

              <h2 className="text-3xl tracking-[-0.04em] font-semibold">
                Summary
              </h2>
            </div>

            <div className="space-y-5 border-b border-black/5 pb-8">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500">Subtotal</span>

                <span>${subtotal}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500">Shipping</span>

                <span>$20</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500">Taxes</span>

                <span>$14</span>
              </div>
            </div>

            <div className="flex items-center justify-between py-8">
              <span className="text-lg font-medium">Total</span>

              <span className="text-3xl font-semibold">
                ${subtotal + 20 + 14}
              </span>
            </div>

            <button className="w-full bg-zinc-900 text-white py-4 text-sm uppercase tracking-[0.15em] hover:bg-zinc-800 transition">
              Proceed to Checkout
            </button>

            <button className="w-full mt-4 border border-black/10 py-4 text-sm uppercase tracking-[0.15em] hover:bg-black/5 transition">
              Continue Shopping
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;