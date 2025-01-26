import { NextResponse } from 'next/server';

// Sample Products Data
const products = [
  { id: 1, name: 'Toyota Revo Hilux', price: '100000', image: '/Toyota Revo Hilux.webp' },
  { id: 2, name: 'Mercedes-Benz GL', price: '120000', image: '/Mercedes-Benz GL.jpeg' },
  { id: 3, name: 'BMW 7', price: '100000', image: '/BMW 7.jpeg' },
  { id: 4, name: 'Foton Tunland', price: ' 1000', image : '/Foton Tunland.jpeg' },
  { id: 5, name: 'Ford Eco Sport SE', price: '100000', image: '/Ford Eco Sport SE.png' }, 
  { id: 6, name: 'Maserati', price: '100000', image : '/Maserati.png' },
  { id: 7, name: 'MG eZS', price: '100000', image : '/MG eZS.jpg' },
  { id: 8, name: 'Rolls Royce', price: '100000', image : '/Rolls Royce.jpeg' },
  { id: 9, name: 'Toyota Fortuner', price: '100000', image : '/Toyota Fortuner.jpeg' },
  { id: 10, name: 'Bugatti Veyron', price: '100000', image : '/Bugatti Veyron.jpeg' },
];

export async function GET() {
    return NextResponse.json(products);
}
