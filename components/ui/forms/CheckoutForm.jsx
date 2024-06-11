'use client';

import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Select from 'react-select';
import { IoIosArrowDown } from "react-icons/io";
import { useAppSelector } from '@redux/store';
import { logger } from '@utils/log';
import { useStateContex } from '@redux/StateProvider';
import { initialValues } from '@lib/initialValues';
import { CheckoutSchema } from '@utils/formSchemas';
import { fieldStyles, labelStyles } from '@styles/styles';
import { LocationOnOutlined } from '@mui/icons-material';
import { runFireworks } from '@utils/fireworks';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Mock data for country codes with flags
const countryCodes = [
    { code: '+1', country: 'US', flag: 'https://flagcdn.com/us.svg' },
    { code: '+44', country: 'UK', flag: 'https://flagcdn.com/gb.svg' },
    { code: '+233', country: 'GH', flag: 'https://flagcdn.com/gh.svg' },
];

const defaultCountryCodeOption = countryCodes[countryCodes.length - 1];

const formatOptionLabel = ({ country, flag }) => (
    <div className="flex items-center">
        <Image src={flag} alt="" width={20} height={15} className="mr-2" />
        {country}
    </div>
);

export const CheckoutForm = () => {
    const [status, setStatus] = useState(null);
    const [deliveryOption, setDeliveryOption] = useState('delivery');
    const [sameMomoNumber, setSameMomoNumber] = useState(false);

    const { user } = useAppSelector((state) => state.auth);
    const { setShowLoaderOverlay, toggleFormModal } = useStateContex();

    const router = useRouter();

    const handleCheckout = async (values) => {
        console.log(values);
        setStatus('loading');
        setShowLoaderOverlay(true);

        try {
            toggleFormModal();
            runFireworks();
            router.push('/');
            setStatus('success');
        } catch (error) {
            logger(`ERR:${error}`);
            setStatus('error');
        } finally {
            setShowLoaderOverlay(false);
        }
    };

    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center mt-[1rem]">
            <Formik
                initialValues={initialValues.checkout}
                validationSchema={CheckoutSchema}
                onSubmit={handleCheckout}
            >
                {({ values, setFieldValue }) => (
                    <Form className="bg-white px-2 pb-16 mb-4 flex flex-col w-11/12">
                        <div className='w-2/3'>
                            <p className='text-black text-xl font-semibold mb-3'>Payment Details</p>

                            <label className={`-mt-0 ${labelStyles}`} htmlFor="name">
                                Name
                                <span className="text-red">*</span>
                            </label>
                            <Field className={fieldStyles} placeholder='Kwame Dartey' type="text" name="name" />
                            <ErrorMessage name="name" component="div" className="text-red text-xs mt-1" />

                            <label className={labelStyles} htmlFor="phoneNumber">
                                Phone Number
                                <span className="text-red">*</span>
                            </label>
                            <div className="relative">
                                <Select
                                    name="countryCode"
                                    options={countryCodes}
                                    defaultValue={defaultCountryCodeOption}
                                    formatOptionLabel={formatOptionLabel}
                                    className="w-1/4 absolute px-2 top-1/2 transform -translate-y-1/2 flex items-center bg-[#ebe9e9] h-full"
                                    onChange={(option) => setFieldValue('countryCode', option.code)}
                                    menuPlacement="bottom"
                                />
                                <Field
                                    className={`${fieldStyles} pl-32`}
                                    placeholder={`+233 278 811 107`}
                                    type="text"
                                    name="phoneNumber"
                                />
                            </div>

                            <ErrorMessage name="phoneNumber" component="div" className="text-red text-xs mt-1" />

                            <p className='text-black text-xl font-semibold mt-4'>Select Payment Method</p>
                            <div role="group" aria-labelledby="paymentMethod" className="flex items-center gap-4 mt-2">
                                {['Momo', 'Card', 'Cash', 'Delivery'].map(method => (
                                    <label key={method} className="flex items-center">
                                        <Field type="radio" name="paymentMethod" value={method} className="mr-2 text-green checked:appearance-none h-[13px] w-[13px] bg-green rounded-full" />
                                        {method}
                                    </label>
                                ))}
                            </div>
                            <ErrorMessage name="paymentMethod" component="div" className="text-red text-xs mt-1" />

                            <div className="flex items-center mt-10 -mb-4">
                                <Field
                                    type="checkbox"
                                    name="momoNumber"
                                    id="momoNumber"
                                    className={`mr-2 text-green checked:appearance-none -mt-4 h-[13px] w-[13px] border border-gray rounded ${sameMomoNumber ? 'bg-green' : ''}`}
                                    checked={sameMomoNumber}
                                    onChange={() => {
                                        setSameMomoNumber(!sameMomoNumber);
                                        if (!sameMomoNumber) {
                                            setFieldValue('momoNumber', values.phoneNumber);
                                            setFieldValue('momoCountryCode', values.countryCode);
                                        }
                                    }}
                                />
                                <label htmlFor="momoNumber" className={`-mt-4 ${labelStyles}`}>
                                    Is your Momo number the same as your phone number?
                                </label>
                            </div>

                            <div>
                                <label className={labelStyles} htmlFor="momoNumber">
                                    Momo Phone Number
                                    <span className="text-red">*</span>
                                </label>
                                <div className="relative">
                                    <Select
                                        name="momoCountryCode"
                                        options={countryCodes}
                                        defaultValue={defaultCountryCodeOption}
                                        formatOptionLabel={formatOptionLabel}
                                        className="w-1/4 absolute px-2 top-1/2 transform -translate-y-1/2 flex items-center bg-[#ebe9e9] h-full"
                                        isDisabled={sameMomoNumber}
                                        onChange={(option) => setFieldValue('momoCountryCode', option.code)}
                                        menuPlacement="bottom"
                                    />
                                    <Field
                                        className={`${fieldStyles} pl-32 ${sameMomoNumber ? 'bg-gray' : ''}`}
                                        placeholder={'+233 278 811 107'}
                                        type="text"
                                        name="momoNumber"
                                        disabled={sameMomoNumber}
                                    />
                                </div>

                                <ErrorMessage name="momoNumber" component="div" className="text-red text-xs mt-1" />
                            </div>

                            <p className='text-black text-xl font-semibold mt-6'>Delivery Details</p>
                            <p className='text-black text-lg font-semibold mt-2'>Select Delivery Option</p>
                            <div className="flex gap-4 mt-2">
                                {['delivery', 'pickup'].map(option => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => setDeliveryOption(option)}
                                        className={`px-4 py-2 rounded-lg focus:outline-none ${deliveryOption === option ? 'bg-[#069B5C] text-white' : 'bg-gray-200 text-black border border-gray'}`}
                                    >
                                        {option.charAt(0).toUpperCase() + option.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='flex items-center justify-between bg-rose-100 w-full py-6 px-6 mt-8 rounded-md'>
                            <div className='flex flex-col'>
                                <p>Delivery location</p>
                                <strong>Circle</strong>
                            </div>
                            <div className='flex items-center gap-2 cursor-pointer'>
                                <span className='underline'>Change</span>
                                <LocationOnOutlined />
                            </div>
                        </div>

                        {/* Form Submission Status */}
                        <div className='py-6'>
                            {status === 'loading' && <p className="text-gray-700 text-sm font-bold mt-12">Submitting...</p>}
                            {status === 'success' && <p className="text-green-500 text-sm font-bold mt-4">Submission successful!</p>}
                            {status === 'error' && <p className="text-red text-sm font-bold mt-4">Submission failed. Please try again.</p>}
                        </div>

                        <div className='absolute bottom-0 border-t border-gray w-full right-4 overflow-x-hidden flex justify-end items-center py-5 bg-white z-10'>
                            <button
                                className={`${status === 'loading' ? 'hidden' : 'flex'} text-center justify-center text-white text-lg bg-green py-3 px-8 rounded-full focus:outline-none focus:shadow-outline mr-10`}
                                type="submit"

                                aria-label='submit button'
                            >
                                Checkout
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
