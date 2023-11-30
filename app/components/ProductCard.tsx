// 'use client'
// - nextJs will include this in JS bundle and will be considered to be client components
import React from 'react'
import AddToCart from './AddToCart'


const ProductCard = () => (
  // <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
  <div>
    <AddToCart />
  </div>
)

export default ProductCard