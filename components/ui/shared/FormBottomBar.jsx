import React from 'react'

export const FormBottomBar = ({ status, label }) => {
    return (
        <div className='absolute bottom-0 border-t border-gray  w-full right-4 overflow-x-hidden flex justify-end items-center py-5 bg-white z-10'>
            <button
                className={`${status === 'loading' ? 'hidden' : 'flex'} text-center justify-center text-white text-lg bg-green py-3 px-8 rounded-full focus:outline-none focus:shadow-outline mr-10`}
                type="submit"
                aria-label='submit button'
            >
                {label}
            </button>
        </div>
    )
}
