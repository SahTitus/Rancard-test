import * as Yup from 'yup';

export const ProductSchema = Yup.object().shape({
    name: Yup.string().required('Product name is required'),
    image: Yup.string().required('Product image is required'),
    category: Yup.string().required('Product category is required'),
    description: Yup.string().required('Product description is required'),
    variants: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('Variant name is required'),
            price: Yup.number().required('Variant price is required').positive('Price must be a positive number'),
            size: Yup.string().required('Variant size is required'),
        })
    ),
});

export const CheckoutSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, 'Phone number must contain only numbers')
        .required('Phone number is required'),
    momoNumber: Yup.string()
        .matches(/^[0-9]+$/, 'Momo number must contain only numbers')
        .required('Momo number is required'),
    paymentMethod: Yup.string().required('Payment method is required'),
});
