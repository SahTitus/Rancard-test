import { OrderStatusButton } from '@components/common/OrderStatusButton';
import React from 'react';

export const OrderHistoryTable = ({ productList }) => {

    return (
        <table className="min-w-full bg-white min-h-full text-black border-collapse">
            <thead>
                <tr className='bg-[#EFEFEF]'>
                    <th className="w-[35%] py-3 px-4 text-left">Customer</th>
                    <th className="w-[35%] py-3 px-4 text-left">Products</th>
                    <th className="w-[15%] py-3 px-4 text-left">Price</th>
                    <th className="w-[15%] py-3 px-4 text-left">Delivery</th>
                    <th className="w-[15%] py-3 px-4 text-center">Date</th>
                    <th className="w-[15%] py-3 px-4 text-center">Status</th>
                </tr>
            </thead>
            <tbody>
                {productList.map((product, index) => (
                    <tr key={index} className="hover:bg-[#f7f7f7] hover:cursor-pointer">
                        <td className="py-3 px-4 border-b border-gray">{product.name}</td>
                        {
                            product?.variants?.map(variant =>
                                <td className="py-3 px-4 border-b border-gray overflow-x-hidden">{variant.name}, {variant.size}</td>
                            )
                        }
                        <td className="py-3 px-4 border-b border-gray">{product.quantity}</td>
                        <td className="py-3 px-4 border-b border-gray">{product.quantity}</td>
                        <td className="py-3 px-4 border-b border-gray">
                            12/03/2024
                        </td>
                       
                        <td className="py-3 px-4 border-b border-gray">
                            <OrderStatusButton />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
