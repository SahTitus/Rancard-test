export const findPriceRange = (variants) => {
    if (!variants.length) return '';

    const prices = variants.map(variant => variant.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    if (minPrice === maxPrice) {
        return `$${minPrice}`;
    }

    return `${minPrice} - ${maxPrice}`;
};

export const findMinPrice = (variants) => {
    return variants.reduce((min, variant) => variant.price < min ? variant.price : min, variants[0].price);
};