'use client'
import React from 'react';
import { Dialog, Slide } from '@mui/material';
import { Close } from '@mui/icons-material';
import { formModalStyles } from '@styles/styles';
import { ProductForm } from '../forms/ProductForm';
import { AddToCart } from '../AddToCart';
import { useStateContex } from '@redux/StateProvider';
import { CheckoutForm } from '../forms/CheckoutForm';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const modalContent = {
    product: {
        title: 'Add Product',
        component: <ProductForm />
    },
    cart: {
        title: 'Add to Cart',
        component: <AddToCart />
    },
    checkout: {
        title: 'Payment',
        component: <CheckoutForm />
    }
};
const ModalHeader = ({ title, onClose }) => (
    <div className='absolute top-0 left-0 right-0 bg-white z-10 flex items-center justify-between w-11/12 mx-auto pt-10 pb-2'>
        <p className='text-black text-2xl'>{title}</p>
        <button className='flex items-center gap-2 border-none text-[#000]' onClick={onClose} aria-label='close modal button'>
            <Close />
            Close
        </button>
        <hr className='absolute bottom-0 border-none bg-gray h-[1px] w-full' />
    </div>
);

export const Modal = () => {
    const { toggleFormModal, modalType, isFormModalOpen } = useStateContex();
    const content = modalContent[modalType] || { title: '', component: null };

    return (
        <div className='flex flex-col'>
            <Dialog
                open={isFormModalOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={toggleFormModal}
                id="drawer"
                fullScreen
                className="flex flex-col h-screen"
                sx={formModalStyles.dialogSx}
                PaperProps={{ sx: formModalStyles.paperProps }}
                aria-describedby="search box dialog"
            >
                <div className='relative flex flex-col h-full'>
                    <ModalHeader title={content.title} onClose={toggleFormModal} />
                    <div className='pt-[6rem] flex-1 overflow-y-auto custom-scrollbar'>
                        {content.component}
                    </div>
                </div>
            </Dialog>
        </div>
    );
};
