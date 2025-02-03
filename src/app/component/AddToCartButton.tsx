import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function AddToCartButton({ product }: { product: Product }) {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { addToCart } = cartContext;

  return (
    <button 
      onClick={() => addToCart(product)}
      className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-700 text-white rounded-lg transition duration-300"
    >
      Add to Cart
    </button>
  );
}

