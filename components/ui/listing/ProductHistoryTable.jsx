import { findMinPrice } from '@utils/helpers';
import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";

export const ProductHistoryTable = ({ productList }) => {
    return (
        <table className="min-w-full bg-white min-h-full text-black border-collapse">
            <thead>
                <tr className='bg-[#EFEFEF]'>
                    <th className="w-[35%] py-3 px-4 text-left">Name</th>
                    <th className="w-[35%] py-3 px-4 text-left">Variants</th>
                    <th className="w-[15%] py-3 px-4 text-left">Qty.</th>
                    <th className="w-[15%] py-3 px-4 text-left">Min. Price</th>
                    <th className="w-[15%] py-3 px-4 text-center">Action</th>
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
                        <td className="py-3 px-4 border-b border-gray">
                            {findMinPrice(product.variants)}
                        </td>
                        <td className="py-3 px-4 border-b border-gray text-center">
                            <button className="text-red-600 hover:text-red-800">
                                <RiDeleteBin5Line className='text-[#F5222D]' />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
