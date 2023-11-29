// 'use client'
// - nextJs will include this in JS bundle and will be considered to be client components
import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = () => (
  <div>
    <AddToCart />
  </div>
)

export default ProductCard