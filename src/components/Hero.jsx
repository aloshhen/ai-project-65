import React from 'react'
import { cn } from '../utils'
import { Coffee, UtensilsCrossed, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-900 to-stone-900 opacity-90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
              Coffee with a <span className="text-amber-800">Brown</span> Touch
            </h1>
            <p className="text-xl text-stone-600 max-w-lg">
              Experience the perfect blend of rich coffee and cozy ambiance in our brown-themed café. Reserve your table now and enjoy our signature brews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#booking" className="px-8 py-4 bg-amber-600 text-white rounded-2xl font-medium hover:bg-amber-700 transition-colors">
                Book a Table
              </a>
              <a href="#menu" className="px-8 py-4 border-2 border-amber-600 text-amber-600 rounded-2xl font-medium hover:bg-amber-50 transition-colors">
                View Menu
              </a>
            </div>
          </div>
          <div className="relative">
            <img src="https://source.unsplash.com/800x600/?coffee,cafe" alt="Coffee shop" className="rounded-3xl shadow-2xl shadow-amber-500/20" />
          </div>
        </div>
      </div>
    </section>
  )
}