import React from 'react'
import { cn } from '../utils'
import { Sparkles, Coffee, UtensilsCrossed } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-stone-800">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-800">1. Choose Your Spot</h3>
            <p className="text-stone-600">
              Browse our cozy café layout and select your preferred seating area - from our sunlit terrace to the quiet corner nook.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
              <Coffee className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-800">2. Order Your Brew</h3>
            <p className="text-stone-600">
              Our baristas will craft your perfect coffee - whether it's a classic espresso or a modern cold brew.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-800">3. Enjoy the Moment</h3>
            <p className="text-stone-600">
              Savor your coffee in our warm, brown-themed ambiance while enjoying the finest pastries and desserts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}