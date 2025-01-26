"use client";
import { useCart } from '../context/page';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  // Subtotal Calculation
  const subtotal = cart.reduce((acc, item) => acc + (item.price as number), 0);

  return (
    <div className="container max-w-full p-8 bg-slate-300">
      <h1 className="text-4xl font-bold text-center mb-8">Add to Cart</h1>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="p-4 border flex justify-between items-center">
                <div>
                  {item.name} - ${item.price}
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold">Subtotal: ${subtotal.toFixed(2)}</h2>
          </div>
        </>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
  );
}
