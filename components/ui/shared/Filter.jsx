"use client"
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export const Filter = () => {
    const [selectedItem, setSelecetdItem] = useState('Filter');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const filterOptions = ['Latest', 'Date', 'Price'];

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSelect = (newItem) => {
        setSelecetdItem(newItem);
        setDropdownOpen(false);
    };

    return (
        <div className="relative inline-block">
            <div
                onClick={toggleDropdown}
                className={`w-36 px-3 py-2 border border-gray text-black rounded flex items-center justify-between capitalize`}
            >
                {selectedItem}
                <IoIosArrowDown className="ml-2" />
            </div>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                    {filterOptions.map((selectedItem) => (
                        <div
                            key={selectedItem}
                            onClick={() => handleSelect(selectedItem)}
                            className={`block px-4 py-2 text-left w-full text-black hover:bg-[#f7f7f7] capitalize`}
                        >
                            {selectedItem}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
