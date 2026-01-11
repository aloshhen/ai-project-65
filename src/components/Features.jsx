import React from 'react'
import { cn } from '../utils'
import { Coffee, UtensilsCrossed, Clock, Sparkles } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-stone-800">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-stone-200/50">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Coffee className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Premium Coffee</h3>
            <p className="text-stone-600">
              Our beans are ethically sourced from the finest coffee farms, roasted to perfection for that rich, aromatic flavor you love.
            </p>
          </div>
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-stone-200/50">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <UtensilsCrossed className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Gourmet Menu</h3>
            <p className="text-stone-600">
              From classic pastries to modern desserts, our menu complements every cup of coffee with perfect harmony.
            </p>
          </div>
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-stone-200/50">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Flexible Booking</h3>
            <p className="text-stone-600">
              Reserve your table in advance or walk in anytime. We ensure a comfortable experience for every visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}