import { Star } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

const ProductCard = ({ product, showAddToCartBtn, toggleFormModal }) => {
    return (
        <div className='flex flex-col gap-2 mx-1'>
            <div className={`w-full h-[200px] rounded-lg overflow-hidden`}>
                <Image
                    width={320}
                    height={200}
                    className="w-full h-full object-cover rounded-lg"
                    src={product?.image}
                    alt={product?.name}
                    loading="lazy"
                    as="image"
                    sizes="(max-width: 600px) 100vw, 300px"
                    srcSet={`${product?.image} 500w, ${product?.image} 300w`}
                />
            </div>

            <div className='flex flex-col px-4'>
                <div className='flex items-center text-black'>
                    <p className=' flex-1 line-clamp-1'>{product?.name}</p>
                    <p ><Star className='mr-1 text-gold text-xl' />{product?.rating}</p>
                </div>
                <strong className='text-black'>GHS {product?.price}</strong>
            </div>

            {showAddToCartBtn && <button
                type="button"
                onClick={() => toggleFormModal('cart', product)}
                className="flex items-center justify-center gap-2 text-green mt-3 bg-white w-fit px-6 py-2 rounded-full ml-auto mb-6 border-green border"
                aria-label='Add to cart'
            >
                <IoCartOutline className='text-2xl' />
                <span className='font-[500]'> Add to Cart</span>
            </button>}

        </div>
    )
}

export default ProductCard