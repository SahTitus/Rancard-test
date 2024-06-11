'use client'
import React from 'react'
import ProductList from '../ui/listing/ProductList'
import { Modal } from '../ui/modals/Modal';
import { useStateContex } from '@redux/StateProvider';

export const Home = ({ products }) => {
    const { toggleFormModal, showAddToCartBtn, toggleShowAddToCartBtn } = useStateContex()

    return (
        <div className='mt-8 px-4'>
            <div className='flex items-center justify-between py-6'>
                <p className='text-black text-2xl font-[500]'>Products</p>
                <div className='flex items-center gap-3'>
                    <button onClick={() => toggleFormModal('product')} className='rounded-3xl px-8 py-2 border border-green text-green' aria-label='Add Product'>Add Product</button>
                    <button onClick={toggleShowAddToCartBtn} className={`${showAddToCartBtn ? 'bg-red' : 'bg-green'}  text-white rounded-3xl px-8 py-2`} aria-label='Add to Cart'> {showAddToCartBtn ? 'Cancel' : 'Add to Cart'}</button>
                </div>
            </div>

            <ProductList showAddToCartBtn={showAddToCartBtn}
                toggleFormModal={toggleFormModal}
                products={products}
            />
            <Modal />
        </div>
    )
};