import { Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-zinc-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
          <Heart className="w-4 h-4" />
        </button>

        <span className="absolute top-4 left-4 bg-black text-white text-[10px] uppercase tracking-[0.2em] px-3 py-2">
          {product.badge}
        </span>
      </div>

      <div className="pt-5">
        <div className="flex items-center justify-between gap-4 mb-2">
          <h3 className="text-lg font-medium text-zinc-900">
            {product.name}
          </h3>

          <p className="text-sm text-zinc-500">
            ⭐ {product.rating}
          </p>
        </div>

        <p className="text-sm text-zinc-500 mb-4">
          {product.category}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-lg font-medium">
              ${product.price}
            </p>

            <p className="text-sm line-through text-zinc-400">
              ${product.oldPrice}
            </p>
          </div>

          <button className="text-sm border-b border-zinc-900 pb-1 hover:opacity-60 transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;