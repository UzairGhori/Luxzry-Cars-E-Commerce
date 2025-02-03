"use client";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key, useState } from 'react';
import { useCart } from '@/context/CartContext';

interface CartItem {

  name: string;

  price: number;

}

export default function CartPage() {


  

  const { cart, removeFromCart } = useCart([]);

  // Subtotal Calculation
  const subtotal = cart.reduce((acc: number, item: { price: number; }) => acc + (item.price as number), 0);

  function handleproceed(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    alert('Proceeding to checkout!');
    // Implement your checkout logic here
     localStorage.setItem('cart', JSON.stringify(cart));
     
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCart([]);
  }

  return (
    <div className="container max-w-full p-8 bg-slate-300">
      <h1 className="text-4xl font-bold text-center mb-8">Add to Cart</h1>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: number) => (
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
            <button onClick={handleproceed} className="bg-blue-500 text-white px-8 py-4 rounded-lg mt-4">
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
  );
}
