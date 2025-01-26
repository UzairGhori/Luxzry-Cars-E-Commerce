// src/components/Navbar.tsx
"use client";
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="bg-black text-white p-4 shadow-md shadow-white">
            <div className="container w-screen  flex  justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <span className="text-2xl font-bold cursor-pointer">LuxzryCars</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-lg">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                    <li><Link href="/cart">🛒 Cart</Link></li>
                </ul>

                {/* Mobile Menu Icon */}
                <div className="md:hidden z-50" onClick={() => setNavOpen(!navOpen)}>
                    {navOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
                </div>

                {/* Mobile Menu */}
                {navOpen && (
                    <ul className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-6 py-8">
                        <li><Link href="/" onClick={() => setNavOpen(false)}>Home</Link></li>
                        <li><Link href="/products" onClick={() => setNavOpen(false)}>Products</Link></li>
                        <li><Link href="/about" onClick={() => setNavOpen(false)}>About</Link></li>
                        <li><Link href="/contact" onClick={() => setNavOpen(false)}>Contact</Link></li>
                        <li><Link href="/cart" onClick={() => setNavOpen(false)}>🛒 Cart</Link></li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
