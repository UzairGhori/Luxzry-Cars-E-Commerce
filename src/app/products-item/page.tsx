// "use client";
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import AddToCartButton from '../component/AddToCartButton';

// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// }

// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("http://localhost:3000/api/Products");
//       const data = await res.json();
//       setProducts(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className=" text-center  bg-slate-300 ">
//         <h1 className="text-5xl text-center font-serif animate-bounce px-10 py-10 pt-16 font-bold">Our Products</h1>

//       {/* Display products in a grid layout */}
//     <div className="grid grid-cols-3 gap-6 px-10 py-10 bg-slate-300">
        
//       {products.map((product) => (
//         <div key={product.id} className="border border-slate-500 w-80 h-auto  p-4 rounded-lg">
//           <Image src={product.image} alt={product.name} width={300} height={200} />
//           <h2 className="text-xl font-semibold">{product.name}</h2>
//           <p className="text-lg text-gray-600">${product.price}</p>
//           <AddToCartButton product={product} />
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// }
