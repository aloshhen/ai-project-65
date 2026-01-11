import React from 'react'
import { cn } from '../utils'

export default function Footer() {
  return (
    <footer className="py-12 bg-stone-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Café Mocha</h3>
            <p className="text-stone-300">
              123 Coffee Street, Brown Town, BT123 456
            </p>
            <p className="text-stone-300 mt-2">Opening Hours: 8:00 AM - 10:00 PM</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-300 hover:text-amber-400">Home</a></li>
              <li><a href="#menu" className="text-stone-300 hover:text-amber-400">Menu</a></li>
              <li><a href="#booking" className="text-stone-300 hover:text-amber-400">Booking</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
            <p className="text-stone-300 mb-4">Subscribe for special offers and coffee news</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-2xl border border-stone-600 bg-stone-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <button className="px-4 py-2 bg-amber-600 text-white rounded-r-2xl hover:bg-amber-700 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-stone-700 text-center text-stone-400">
          <p>© 2024 Café Mocha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}