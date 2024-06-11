import React from 'react';
import ProductCard from '../cards/ProductCard';

const ProductList = ({ products, showAddToCartBtn, toggleFormModal }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    toggleFormModal={toggleFormModal}
                    showAddToCartBtn={showAddToCartBtn}
                />
            ))}
        </div>
    );
};

export default ProductList;
