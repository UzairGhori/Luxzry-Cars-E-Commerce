import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function useCart() {

    const [cart, setCart] = useState<CartItem[]>([]);
  
  
  
    function addToCart(item: CartItem) {
  
      setCart([...cart, item]);
  
    }
  
  
  
    function removeFromCart(index: number) {
  
      setCart(cart.filter((_, i) => i !== index));
  
    }
  
  
  
    return {
  
      cart,
  
      addToCart,
  
      removeFromCart,
  
    };
  
  }
  