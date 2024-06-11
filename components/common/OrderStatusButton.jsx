"use client"
import { statusStyles } from '@styles/styles';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export const OrderStatusButton = () => {
    const [status, setStatus] = useState('pending');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const statuses = ['pending', 'canceled', 'confirmed', ];

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const selectStatus = (newStatus) => {
        setStatus(newStatus);
        setDropdownOpen(false);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={toggleDropdown}
                className={`w-36 px-3 py-2 text-black rounded flex items-center justify-between ${statusStyles[status]} capitalize`}
            >
                {status}
                <IoIosArrowDown className="ml-2" />
            </button>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                    {statuses.map((status) => (
                        <button
                            key={status}
                            onClick={() => selectStatus(status)}
                            className={`block px-4 py-2 text-left w-full hover:bg-[#f7f7f7] capitalize`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
