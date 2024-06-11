export const initialValues = {
    product: {
        name: '',
        image: '',
        rating: '',
        price: '',
        variants: [
            {
                name: '',
                price: '',
                size: '',
            },
        ],
    },
    checkout: {
        name: '',
        phoneNumber: '',
        momoNumber: '',
        paymentMethod: '',
        deleiveryMethod: '',
        location: 'Circle',
    }
};
