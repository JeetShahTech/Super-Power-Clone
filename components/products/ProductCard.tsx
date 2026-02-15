import { ProductBundle } from "@/types/api/product.types";

export default function ProductCard({ product }: { product: ProductBundle }) {
  return (
    <div className="min-w-[260px] bg-white rounded-2xl shadow-sm p-4 mr-6">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-[180px] object-contain rounded-xl mb-4"
      />

      <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
        {product.tag || "General"}
      </span>

      <h3 className="text-lg font-semibold mt-3">
        {product.name}
      </h3>

      <p className="text-gray-600 mt-1">
        ${product.price} 
      </p>
    </div>
  );
}
