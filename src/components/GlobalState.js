import React from 'react';
import useProductsDataManager from './useProductsDataManager';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const {
    isLoading,
    productList,
    ItemsInCartCount,
    toggleMarkProduct,
    incrementItemsInCartCount,
    decrementItemsInCartCount,
    hasErrored,
    error
  } = useProductsDataManager();

  const provider = {
    isLoading,
    productList,
    ItemsInCartCount,
    toggleMarkProduct,
    incrementItemsInCartCount,
    decrementItemsInCartCount,
    hasErrored,
    error
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};