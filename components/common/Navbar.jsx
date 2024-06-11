'use client'
import React from 'react';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { KeyboardArrowDown, NotificationsNone } from '@mui/icons-material';
import { IoCartOutline } from 'react-icons/io5'
import { useStateContex } from '@redux/StateProvider';
import Link from 'next/link';

export const Navbar = () => {
    const { toggleFormModal } = useStateContex()

    return (
        <div className="fixed w-full flex items-center justify-between bg-white pl-8 py-6 pr-5">
            <div className="flex items-center justify-center h-10 w-10 z-30">
                <Image
                    src="/Syst.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className='h-full w-full'
                    objectFit="contain"
                    objectPosition="center"
                />
            </div>

            <div className="flex text-center justify-center items-center bg-white rounded-full px-12 py-2 border border-gray">
                <SearchIcon className="text-gray mr-2" />
                <input
                    type="text"
                    placeholder="Search"
                    className="outline-none bg-transparent"
                />
            </div>

            <div className="flex items-center">
                <div onClick={() => toggleFormModal('checkout')} className='flex bg-green rounded-full px-3 py-1 text-white mr-2 cursor-pointer'>
                    <IoCartOutline className=" text-2xl mr-2 cursor-pointer" />
                    <span>0</span>
                </div>
                <NotificationsNone className="text-black mr-4 cursor-pointer" />
                <Link href={'/auth'}>
                    <Avatar alt="Avatar" src="/avatar.jpg" className="cursor-pointer" />
                </Link>
                <KeyboardArrowDown className="text-black ml-4 cursor-pointer" />
            </div>
        </div>
    );
};
