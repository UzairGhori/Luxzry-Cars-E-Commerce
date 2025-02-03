import { CartProvider, useCart } from "@/context/CartContext";
import CartComponent from "../Product/page";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}


export default function ContextPage() {

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
  
  return (
    <CartProvider>
      <CartComponent />
    </CartProvider>
  );
}

export { useCart };