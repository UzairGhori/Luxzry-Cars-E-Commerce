"use client";
import AddToCartButton from '../component/AddToCartButton';
import { useCart } from '../context/page';
import Image from 'next/image';

const products = [
    { id: 1, name: 'Toyota Revo Hilux', price: '10000', image: '/Toyota Revo Hilux.webp' },
    { id: 2, name: 'Mercedes-Benz GL', price: '120000', image: '/Mercedes-Benz GL.jpeg' },
    { id: 3, name: 'BMW 7', price: '20000', image: '/BMW 7.jpeg' },
    { id: 4, name: 'Foton Tunland', price: ' 30000', image : '/Foton Tunland.jpeg' },
    { id: 5, name: 'Ford Eco Sport SE', price: '10000', image: '/Ford Eco Sport SE.png' }, 
    { id: 6, name: 'Maserati', price: '15000', image : '/Maserati.png' },
    { id: 7, name: 'MG eZS', price: '17000', image : '/MG eZS.jpg' },
    { id: 8, name: 'Rolls Royce', price: '40000', image : '/Rolls Royce.jpeg' },
    { id: 9, name: 'Toyota Fortuner', price: '4500', image : '/Toyota Fortuner.jpeg' },
    { id: 10, name: 'Bugatti Veyron', price: '80000', image : '/Bugatti Veyron.jpeg' },
  ];

export default function ProductsPage() {
  const { addToCart } = useCart([]);

  return (
    <div className=" max-w-screen p-8 px-auto bg-slate-300">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-3 gap-10 ml-40  w-[1000px]">
        {products.map((product) => (
          <div key={product.id} className="border border-slate-500 p-4 rounded-lg">
            <Image src={product.image} alt={product.name} width={300} height={200} />
            <h2 className="text-2xl">{product.name}</h2>
            <p className="text-lg">${product.price}</p>
            <AddToCartButton product={{ ...product, price: Number(product.price) }} />
          </div>
        ))}
      </div>
    </div>
  );
}
