import { createSlice } from "@reduxjs/toolkit";

// Load products from local storage
const loadProductsFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("products");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load products from local storage", e);
    return [];
  }
};

// Save products to local storage
const saveProductsToLocalStorage = (products) => {
  try {
    const serializedState = JSON.stringify(products);
    localStorage.setItem("products", serializedState);
  } catch (e) {
    console.error("Could not save products to local storage", e);
  }
};

const initialState = {
  products: loadProductsFromLocalStorage(),
  isLoading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      saveProductsToLocalStorage(state.products);
    },
    updateProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        state.products[index] = updatedProduct;
        saveProductsToLocalStorage(state.products);
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
      saveProductsToLocalStorage(state.products);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
      saveProductsToLocalStorage(state.products);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, setProducts, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;
