"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-full h-screen mb-0">
      {/* Background Image Section */}
      <Image 
        src="/Background-pic.jpg" 
        alt="Luxury Car Background" 
        layout="fill" 
        objectFit="cover" 
        quality={100}
        className="absolute inset-0 z-0"
      />

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center bg-black/60 backdrop-blur-sm">
        <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">Luxury Cars Collection</h1>
        <p className="text-lg mb-8 drop-shadow-lg">
          Discover the ultimate driving experience with our premium vehicles.
        </p>
        {/* Button */}
        <Link href="/products" >
        <button  className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold rounded-lg transition duration-300">
          Explore Cars
        </button>  
        </Link>
        
      </div>
    </div>
  );
}
