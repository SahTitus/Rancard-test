'use client'
import { OrderHistoryTable } from '@components/ui/listing/OrderHistoryTable';
import { Filter } from '@components/ui/shared/Filter';
import { Pagination } from '@components/ui/shared/Pagination';
import React from 'react';

export const Orders = () => {
    const productList = [
        {
            name: 'Product 1',
            quantity: 1,
            variants: [{
                name: 'Groo',
                size: 'Large',
                qty: 10,
                price: 5.00,
            }],
        },
        {
            name: 'Product 1',
            quantity: 1,
            variants: [{
                name: 'Groo',
                size: 'Large',
                qty: 10,
                price: 5.00,
            }],
        },
        {
            name: 'Product 1',
            quantity: 1,
            variants: [{
                name: 'Groo',
                size: 'Large',
                qty: 10,
                price: 5.00,
            }],
        },
        {
            name: 'Product 1',
            quantity: 1,
            variants: [{
                name: 'Groo',
                size: 'Large',
                qty: 10,
                price: 5.00,
            }],
        },
        {
            name: 'Product 1',
            quantity: 1,
            variants: [{
                name: 'Groo',
                size: 'Large',
                qty: 10,
                price: 5.00,
            }],
        },
        {
            name: 'Product 1',
            quantity: 1,
            variants: [{
                name: 'Groo',
                size: 'Large',
                qty: 10,
                price: 5.00,
            }],
        },
        {
            name: 'Product 1',
            quantity: 1,
            variants: [{
                name: 'Jh',
                size: 'Medium',
                qty: 10,
                price: 5.00,
            }],
        },

    ];

    return (
        <div className='mt-8 px-4 w-full'>
            <div className='flex items-center justify-between py-6'>
                <p className='text-black text-2xl font-[500]'>Orders</p>
                <div className='flex items-center gap-3'>
                    < Filter />
                </div>
            </div>
            <OrderHistoryTable productList={productList} />
            <Pagination />
        </div>
    );
};
