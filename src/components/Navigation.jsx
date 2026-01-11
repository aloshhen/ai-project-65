import React from 'react'
import { cn } from '../utils'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-stone-200/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-amber-700">Café Mocha</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="text-stone-600 hover:text-amber-600 transition-colors">Home</a>
          <a href="#menu" className="text-stone-600 hover:text-amber-600 transition-colors">Menu</a>
          <a href="#booking" className="text-stone-600 hover:text-amber-600 transition-colors">Booking</a>
        </div>
      </div>
    </nav>
  )
}