'use client'
import React, { useState } from 'react'
import { Add, Remove } from '@mui/icons-material'
import { AddToCartCard } from './cards/AddToCartCard'
import { useStateContex } from '@redux/StateProvider'
import { useAppSelector } from '@redux/store'

const product = {
    title: 'Product 1',
    image: '/pizza1.jpg',
    quantity: 1,
    variants: [
        { name: 'Variant A', size: 'Small', qty: 20, price: 3.50 },
        { name: 'Variant B', size: 'Medium', qty: 15, price: 6.00 },
        { name: 'Variant C', size: 'Large', qty: 10, price: 8.00 },
    ],
}

export const AddToCart = () => {
    const [status, setStatus] = useState(null);
    const { user } = useAppSelector((state) => state.auth);
    const { toggleFormModal, setShowLoaderOverlay } = useStateContex();


    const handleAddToCart = async (values) => {
        console.log(values)
        setStatus('loading');
        setShowLoaderOverlay(true);

        try {

            setStatus('success');
            setShowLoaderOverlay(false);
            toggleFormModal('');
        } catch (error) {
            setShowLoaderOverlay(false);
            setStatus('error');
            logger(` ERR:${error}`);
        }
    };
    return (
        <div className='flex flex-col'>
            <AddToCartCard product={product} />

            <hr className='border-none bg-gray h-[1px] w-full my-4' />
            <div className='flex flex-col w-11/12 mx-auto'>
                <p className='text-lg font-semibold'>Select</p>

                <div className='flex items-center text-black mb-6'>
                    <p className='w-[45%]'>Small</p>
                    <p className='w-[30%]'>GHC150</p>
                    <div className='flex w-[25%] items-center justify-end gap-3 text-black'>
                        <button className='flex items-center bg-[#DFDFDF] rounded-2xl py-1 px-3'>
                            <Add className='text-lg' />
                        </button>
                        <span className='border border-gray px-4 py-1 rounded '>6</span>
                        <button className='flex items-center bg-[#DFDFDF] rounded-2xl py-1 px-3'>
                            <Remove className='text-lg' />
                        </button>
                    </div>
                </div>
                <div className='flex items-center text-black mb-6'>
                    <p className='w-[45%]'>Small</p>
                    <p className='w-[30%]'>GHC150</p>
                    <div className='flex w-[25%] items-center justify-end gap-3 text-black'>
                        <button className='flex items-center bg-[#DFDFDF] rounded-2xl py-1 px-3'>
                            <Add className='text-lg' />
                        </button>
                        <span className='border border-gray px-4 py-1 rounded '>6</span>
                        <button className='flex items-center bg-[#DFDFDF] rounded-2xl py-1 px-3'>
                            <Remove className='text-lg' />
                        </button>
                    </div>
                </div>
                <div className='flex items-center text-black mb-6'>
                    <p className='w-[45%]'>Small</p>
                    <p className='w-[30%]'>GHC150</p>
                    <div className='flex w-[25%] items-center justify-end gap-3 text-black'>
                        <button className='flex items-center bg-[#DFDFDF] rounded-2xl py-1 px-3'>
                            <Add className='text-lg' />
                        </button>
                        <span className='border border-gray px-4 py-1 rounded '>6</span>
                        <button className='flex items-center bg-[#DFDFDF] rounded-2xl py-1 px-3'>
                            <Remove className='text-lg' />
                        </button>
                    </div>
                </div>
                <div className='flex items-center text-black mb-6'>
                    <p className='w-[45%]'>Small</p>
                    <p className='w-[30%]'>GHC150</p>
                    <div className='flex w-[25%] items-center justify-end gap-3 text-black'>
                        <button className='flex items-center bg-[#DFDFDF] rounded-2xl py-1 px-3'>
                            <Add className='text-lg' />
                        </button>
                        <span className='border border-gray px-4 py-1 rounded '>6</span>
                        <button className='flex items-center bg-[#DFDFDF] rounded-2xl py-1 px-3'>
                            <Remove className='text-lg' />
                        </button>
                    </div>
                </div>
                <hr className='border-none bg-gray h-[1px] w-full' />
            </div>

            <div className='absolute left-0 right-0 bottom-0 border-t border-gray  w-full overflow-x-hidden flex justify-between items-center py-5 px-10 bg-white z-10'>
                <div className='flex flex-col text-center'>
                    <p className='text-gray'>Total</p>
                    <strong>
                        34
                    </strong>
                </div>
                <button
                    className={`${status === 'loading' ? 'hidden' : 'flex'} text-center justify-center text-white text-lg bg-green py-3 px-8 rounded-full focus:outline-none focus:shadow-outline`}
                    type="submit"
                    onClick={handleAddToCart}
                    aria-label='submit button'
                >
                    AddTo To Cart
                </button>
            </div>
        </div>
    )
}
