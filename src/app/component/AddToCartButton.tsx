"use client";

import { useCart } from "../context/page";


interface Product {
  id: number;
  name: string;
  price: number;
}

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => addToCart(product)}
      className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-700 text-white rounded-lg transition duration-300"
    >
      Add to Cart
    </button>
  );
}
