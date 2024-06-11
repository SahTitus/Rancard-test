'use client'
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct } from '@redux/features/productSlice';
import { Dropzone } from './DropZone';
import { logger } from '@utils/log';
import { categories } from '@lib/categories';
import { useStateContex } from '@redux/StateProvider';
import { initialValues } from '@lib/initialValues';
import AddVariant from './AddVariant';
import { IoIosArrowDown } from "react-icons/io";
import { ProductSchema } from '@utils/formSchemas';
import { fieldStyles, labelStyles } from '@styles/styles';
import { useRouter } from 'next/navigation';

export const ProductForm = ({ product = null }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [status, setStatus] = useState(null);
    const { user } = useSelector((state) => state.auth);
    const { setShowLoaderOverlay } = useStateContex();

    const initialProductValues = product ? { ...product } : initialValues.product;

    const handleSubmit = async (values) => {
        setStatus('loading');
        setShowLoaderOverlay(true);

        console.log(values);

        try {
            if (product) {
                dispatch(updateProduct({ id: product.id, updatedProduct: values }));
            } else {
                dispatch(addProduct({ ...values, id: Date.now() }));
            }
            setStatus('success');
            setShowLoaderOverlay(false);
            router.push('/products');
        } catch (error) {
            setShowLoaderOverlay(false);
            setStatus('error');
            logger(`ERR:${error}`);
        }
    };

    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center">
            <Formik
                initialValues={initialProductValues}
                validationSchema={ProductSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => (
                    <Form className="bg-white px-2 pb-16 mb-4 flex flex-col w-11/12">
                        <div className='w-2/3'>
                            <p className='text-black text-xl font-semibold'>Product Details</p>
                            <label className={`mt-2 ${labelStyles}`} htmlFor="image">
                                Image
                                <span className="text-red">*</span>
                            </label>
                            <Field name="image">
                                {({ field, form }) => (
                                    <Dropzone
                                        values={values}
                                        field={field}
                                        form={form}
                                        setFieldValue={setFieldValue}
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="image" component="div" className="text-red text-xs mt-1" />

                            <label className={labelStyles} htmlFor="name">
                                Product Name
                                <span className="text-red">*</span>
                            </label>
                            <Field className={fieldStyles} placeholder='Fried rice' type="text" name="name" />
                            <ErrorMessage name="name" component="div" className="text-red text-xs mt-1" />

                            <label className={labelStyles} htmlFor="category">
                                Category
                                <span className="text-red">*</span>
                            </label>
                            <div className="relative">
                                <Field
                                    as="select"
                                    className={`${fieldStyles} pr-10`}
                                    name="category"
                                    value={values.category}
                                    onChange={(e) => {
                                        const selectedCategory = e.target.value;
                                        const category = categories.find((c) => c.title === selectedCategory);
                                        setFieldValue('category', selectedCategory);
                                        setFieldValue('category_id', category ? category.category_id : '');
                                    }}
                                >
                                    <option value="">Select category</option>
                                    {categories.map((category) => (
                                        <option key={category.category_id} value={category.title}>
                                            {category.title}
                                        </option>
                                    ))}
                                </Field>
                                <IoIosArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                            </div>
                            <ErrorMessage name="category" component="div" className="text-red text-xs mt-1" />

                            <label className={labelStyles} htmlFor="description">
                                Product Description
                                <span className="text-red">*</span>
                            </label>
                            <Field
                                as="textarea"
                                className={`${fieldStyles} resize-none`}
                                placeholder='Enter description'
                                name="description"
                                rows={3}
                            />
                            <ErrorMessage name="description" component="div" className="text-red text-xs mt-1" />
                        </div>

                        <AddVariant labelStyles={labelStyles} fieldStyles={fieldStyles} values={values} />

                        <div className=' py-6'>
                            {status === 'loading' && <p className="text-gray-700 text-sm font-bold mt-12">Submitting...</p>}
                            {status === 'success' && <p className="text-green-500 text-sm font-bold mt-4">Submission successful!</p>}
                            {status === 'error' && <p className="text-red text-sm font-bold mt-4">Submission failed. Please try again.</p>}
                        </div>

                        <div className='absolute bottom-0 border-t border-gray  w-full right-4 overflow-x-hidden flex justify-end items-center py-5 bg-white z-10'>
                            <button
                                className={`${status === 'loading' ? 'hidden' : 'flex'} text-center justify-center text-white text-lg bg-green py-3 px-8 rounded-full focus:outline-none focus:shadow-outline mr-10`}
                                type="submit"
                                aria-label='submit button'
                            >
                                {product ? 'Update Product' : 'Add Product'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
