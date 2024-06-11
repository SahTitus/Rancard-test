"use client";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

//wrap our app and provide the Data layer
export const StateProvider = ({ children }) => {
  const [showLoaderOverlay, setShowLoaderOverlay] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [showAddToCartBtn, setShowAddToCartBtn] = useState(false)

  const toggleFormModal = (type, product) => {

    setModalType(type)
    setIsFormModalOpen(prevState => !prevState)

    if (!isFormModalOpen) {
      setShowAddToCartBtn(false)
    }
  };
  const toggleShowAddToCartBtn = () => {
    setShowAddToCartBtn((prevState) => !prevState)
  };


  return (
    <StateContext.Provider
      value={{
        setShowLoaderOverlay,
        toggleFormModal,
        toggleShowAddToCartBtn,
        showLoaderOverlay,
        isFormModalOpen,
        showAddToCartBtn,
        modalType
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//Pull information from the data layer
export const useStateContex = () => useContext(StateContext);
