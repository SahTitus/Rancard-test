'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineChartBar } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";

const sidebarItems = [
    {
        label: 'Home',
        icon: <AiOutlineHome className='text-2xl' />,
        path: '/',
    },
    {
        label: 'Products',
        icon: <IoCartOutline className='text-2xl' />,
        path: '/products'
    },
    {
        label: 'Orders',
        icon: <IoCartOutline className='text-2xl' />,
        path: '/orders'
    },
    {
        label: 'Reports',
        icon: <HiOutlineChartBar className='text-2xl' />,
        path: '/reports'
    },
]

export const Sidebar = () => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(pathname || '');

    // a boolean var to hide sidebar on the login page
    const hideSide = pathname.startsWith('/auth');

    return (
        <div className={`fixed ${hideSide ? 'hidden' : 'flex'} items-center flex-col bg-white gap-5 w-96 h-screen py-10 px-4 `}>
            {sidebarItems.map((item, index) => (
                <Link href={item.path} onClick={() => setIsActive(item.path)} className={`flex items-center gap-2 ${isActive === item.path ? 'bg-green text-white' : 'text-[#8F8F8F]'} pl-5 h-16 text-xl rounded-lg w-11/12`} key={index}>
                    {item.icon}
                    <p>{item.label}</p>
                </Link>
            ))}
        </div>
    )
}
