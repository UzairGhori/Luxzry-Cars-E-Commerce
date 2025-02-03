"use client";
import useCart from "../context/page";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

const CartComponent = () => {


const useCart = () => {

    const [cart, setCart] = useState<Product[]>([]);
  
  
  
    const addToCart = (product: Product) => {
  
      setCart([...cart, product]);
  
    };
  
  
  
    const removeFromCart = (index: number) => {
  
      setCart(cart.filter((_, i) => i !== index));
  
    };
  
  
  
    return { cart, addToCart, removeFromCart };
  
  };
  

  const { cart, addToCart, removeFromCart } = useCart();

  const product: Product = { id: 1, name: "Sample Product", price: 100 };

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <ul>
        {cart.map((item, index) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartComponent;