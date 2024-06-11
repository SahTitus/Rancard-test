const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export function logger(...args) {
    if (!IS_PRODUCTION) {
        console.log('SYS LOGS::::>>>', ...args);
    }

    throw new Error(...args);
};