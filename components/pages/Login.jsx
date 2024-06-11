'use client'
import React from 'react';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading, loginFailure, loginSuccess } from '@redux/features/authSlice';
import { useRouter } from 'next/navigation';

const Login = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const error = useSelector((state) => state.auth.error);
    const loading = useSelector((state) => state.auth.isLoading);

    const initialValues = {
        username: '',
        password: ''
    };

    const handleSubmit = (values, actions) => {
        dispatch(isLoading());

        const validUser = {
            username: 'admin',
            password: 'adminPassword',
        };

        setTimeout(() => {
            if (values.username === validUser.username && values.password === validUser.password) {
                dispatch(loginSuccess({ username: values.username }));
                router.push('/');
            } else {
                dispatch(loginFailure('Invalid username or password'));
            }
            actions.setSubmitting(false);
        }, 1000); // Simulate a network request
    };

    const validate = (values) => {
        const errors = {};

        if (!values.username) {
            errors.username = 'Required';
        }

        if (!values.password) {
            errors.password = 'Required';
        }

        return errors;
    };

    return (
        <div className="flex h-screen">
            {/* Left Side */}
            <div className="flex w-1/2 relative h-full">
                <Image
                    src="/man-eating-pizza.jpg"
                    alt="Background"
                    width={1920}
                    height={1080}
                    className='h-full w-full'
                    objectFit="contain"
                />
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="absolute bottom-36 left-20 flex items-center justify-center h-20 w-20 z-30">
                    <Image
                        src="/Syst.png"
                        alt="Logo"
                        width={80}
                        height={80}
                        className='h-full w-full'
                        objectFit="contain"
                        objectPosition="center"
                    />
                </div>
            </div>

            {/* Right Side */}
            <div className="w-1/2 bg-white flex items-center justify-center h-full">
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validate={validate}
                >
                    {({ isSubmitting, values }) => (
                        <Form className="flex justify-center flex-col w-4/5">
                            <div className='flex flex-col px-10'>
                                <h2 className="text-2xl font-bold mb-4 text-black">Log in to Syst</h2>
                                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                                <div className="mb-6">
                                    <label htmlFor="username" className="block text-lg font-medium text-gray-700">
                                        Username
                                    </label>
                                    <Field
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Enter your username"
                                        className="text-black border-b border-gray w-full py-2 px-3 text-lg focus:outline-none focus:border-green"
                                    />
                                    <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                                        Password
                                    </label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        className="text-black border-b border-gray w-full py-2 px-3 text-lg focus:outline-none focus:border-green"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <button
                                    type="submit"
                                    className={`${values.username && values.password ? 'bg-green' : 'bg-[#0DD9834F]'} text-white py-3 px-6 rounded-full font-medium hover:bg-[#289668] transition duration-300 ${isSubmitting || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={isSubmitting || loading}
                                >
                                    {isSubmitting || loading ? 'Logging in...' : 'Log in'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;