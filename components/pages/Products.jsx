'use client'
import { ProductHistoryTable } from '@components/ui/listing/ProductHistoryTable';
import { Pagination } from '@components/ui/shared/Pagination';
import React from 'react';
import { useSelector } from 'react-redux';

export const Products = () => {
    const productList = useSelector((state) => state.products.products);

    return (
        <div className='mt-8 px-4 w-full'>
            <p className='text-black text-2xl font-[500] mb-6'>Product History</p>
            <ProductHistoryTable productList={productList} />
            <Pagination />
        </div>
    );
};