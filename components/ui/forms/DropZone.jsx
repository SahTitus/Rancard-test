'use client'
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import Image from 'next/image'
import { useFormikContext } from 'formik';
import { useStateContex } from '@redux/StateProvider';
import { convertImageToBase64 } from '@utils';
import { GoUpload } from "react-icons/go";

export const Dropzone = ({ values }) => {
    const formik = useFormikContext();
    const [base64String, setBase64String] = useState('');
    const { setShowLoaderOverlay } = useStateContex();

    const onDrop = async (acceptedFiles) => {
        if (acceptedFiles.length === 0) return;

        const file = acceptedFiles[0];

        const base64String = await convertImageToBase64(file);
        setBase64String(base64String)

        formik.setValues({
            ...formik.values,
            image: base64String,
        });
    };

    const removeImg = async () => {
        setShowLoaderOverlay(true)

        if (!!formik.values.image) {
            formik.setValues({
                ...formik.values,
                image: '',
            });
        }
        setShowLoaderOverlay(false)
        setBase64String('')
    }

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop,
    });

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center rounded-md text-black justify-center text-center text-sm px-4 h-24 w-[70%] cursor-pointer border border-dashed border-[#E6E6E6]' {...getRootProps()}>
                <input {...getInputProps()} />
                <GoUpload className='text-2xl ' />
                <p>Click here or Drop your file here to upload it</p>
            </div>
            {!!base64String &&
                <>
                    <div >
                        <Image
                            className="rounded w-full h-[300px] object-cover"
                            src={base64String}
                            alt={`product image`}
                            width={200}
                            height={300}
                        />
                    </div>

                    <div className='flex justify-between items-center'>
                        <button type='button' onClick={removeImg} className='text-xl bg-[#e95b5b] text-white py-3 my-4 w-fit px-6 rounded-md mx-auto' aria-label='remove image'>
                            Remove image
                        </button>
                    </div>
                </>
            }
        </div>
    );
};