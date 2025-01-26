"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
  };

  return (
    <div className='w-screen h-screen  bg-slate-300'>
    <div className="max-w-lg mx-auto  bg-slate-300">
      <h1 className="text-4xl font-bold pt-10 mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border"
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Send Message</button>
      </form>
    </div>
    </div>
  );
}
