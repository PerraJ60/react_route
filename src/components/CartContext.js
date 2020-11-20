import React, { createContext, useContext, useMemo } from 'react';

import { GlobalContext } from './GlobalState';

export const CartContext = createContext();

export const CartCountProvider = ({ children }) => {
  const { incrementItemsInCartCount } = useContext(GlobalContext);

  const provider = useMemo(() => {
    return { incrementItemsInCartCount };
  }, []);

  return (
    <CartContext.Provider value={provider}>
      {children}
    </CartContext.Provider>
  );
};