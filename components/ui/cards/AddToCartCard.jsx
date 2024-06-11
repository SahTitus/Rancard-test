import { findPriceRange } from '@utils/helpers';
import Image from 'next/image'
import React from 'react'

export const AddToCartCard = ({ product }) => {
    return (
        <div className='flex gap-2 mx-1 px-8'>
            <div className={`w-36 h-[100px] rounded-lg overflow-hidden`}>
                <Image
                    width={250}
                    height={100}
                    className="w-full h-full object-cover rounded-lg"
                    src={product?.image}
                    alt={product?.name}
                    loading="lazy"
                    as="image"
                    sizes="(max-width: 600px) 70vw, 250px"
                    srcSet={`${product?.image} 500w, ${product?.image} 300w`}
                />
            </div>

            <div className='flex flex-col items-start justify-start px-4 text-black'>
                <p className=' line-clamp-1 font-[500]'>{product?.name}</p>
                <strong >GHS {findPriceRange(product?.variants)}</strong>
            </div>
        </div>
    )
};