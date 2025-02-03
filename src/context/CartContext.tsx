"use client"; // Ensures this runs on the client side

import { createContext, useContext, useState, ReactNode } from "react";

// Define the Product interface
interface Product {
  id: number;
  name: string;
  price: number;
}

// Define the CartContextType interface
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
}

// Create the CartContext with an initial value of `undefined`
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Define the CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Function to add a product to the cart
  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

  // Function to remove a product from the cart by index
  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    alert(`Product removed from cart!`);
  };

  // Provide the context value to children
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = (p0: never[]): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};