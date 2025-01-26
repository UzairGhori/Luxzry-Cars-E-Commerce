// src/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                
                {/* Brand Name */}
                <p className="text-xl font-semibold">LuxzryCars © {new Date().getFullYear()}</p>

                {/* Footer Links */}
                <ul className="flex space-x-6 mt-4 md:mt-0">
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                    <li><Link href="/terms">Terms of Service</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                </ul>
                
                {/* Social Media */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
