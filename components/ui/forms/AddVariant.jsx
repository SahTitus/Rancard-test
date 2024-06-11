import React from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';
import { GoPlusCircle } from 'react-icons/go';
import { FiMinusCircle } from "react-icons/fi";

const AddVariant = ({ values, labelStyles, fieldStyles }) => (
    <FieldArray name="variants">
        {({ insert, remove, push }) => (
            <div className='mt-6'>
                <p className='text-black text-xl font-semibold'>Product Variants</p>
                {!!values?.variants?.length &&
                    values.variants.map((variant, index) => (
                        <div className="flex flex-col -mt-2" key={index}>
                            <div className="flex gap-3">
                                <div>
                                    <label className={labelStyles} htmlFor={`variants.${index}.name`}>Variant Name <span className="text-red">*</span></label>
                                    <Field
                                        name={`variants.${index}.name`}
                                        placeholder="Name"
                                        type="text"
                                        className={fieldStyles}
                                    />
                                    <ErrorMessage
                                        className="text-red text-xs mt-1"
                                        name={`variants.${index}.name`}
                                        component="div"
                                        fieldStyles
                                    />
                                </div>
                                <div>
                                    <label className={labelStyles} htmlFor={`variants.${index}.price`}>Price <span className="text-red">*</span></label>
                                    <Field
                                        name={`variants.${index}.price`}
                                        placeholder="Price"
                                        type="number"
                                        className={fieldStyles}
                                    />
                                    <ErrorMessage
                                        className="text-red text-xs mt-1"
                                        name={`variants.${index}.price`}
                                        component="div"
                                        fieldStyles
                                    />
                                </div>
                                <div>
                                    <label className={labelStyles} htmlFor={`variants.${index}.size`}>Size <span className="text-red">*</span></label>
                                    <Field
                                        name={`variants.${index}.size`}
                                        placeholder="Size"
                                        type="text"
                                        className={fieldStyles}
                                    />
                                    <ErrorMessage
                                        className="text-red text-xs mt-1"
                                        name={`variants.${index}.size`}
                                        component="div"
                                        fieldStyles
                                    />
                                </div>
                            </div>
                            {index > 0 && <div>
                                <button
                                    type="button"
                                    className="flex items-center gap-2 text-[#e95b5b] ml-auto mb-4 mt-3"
                                    aria-label='Remove variant'
                                    onClick={() => remove(index)}
                                >
                                    <FiMinusCircle className='text-xl' />
                                    <span className='underline'>Remove variant</span>
                                </button>
                            </div>}
                        </div>
                    ))}
                <button
                    type="button"
                    className="flex items-center gap-2 text-green mt-3"
                    onClick={() => push({ name: '', price: '', size: '' })}
                    aria-label='Add another variant'
                >
                    <GoPlusCircle className='text-xl' />
                    <span className='underline'> Add another variant</span>
                </button>
            </div>
        )}
    </FieldArray>
);

export default AddVariant;