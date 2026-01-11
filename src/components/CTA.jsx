import React from 'react'
import { cn } from '../utils'

export default function CTA() {
  return (
    <section className="py-24 bg-amber-600">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Café Mocha?</h2>
          <p className="text-amber-100 mb-10">
            Our doors are always open for coffee lovers who appreciate the perfect blend of quality and comfort.
          </p>
          <a href="#booking" className="px-8 py-4 bg-white text-amber-600 rounded-2xl font-medium hover:bg-amber-50 transition-colors">
            Reserve Your Table Now
          </a>
        </div>
      </div>
    </section>
  )
}