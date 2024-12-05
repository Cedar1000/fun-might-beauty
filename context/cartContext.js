// cartContext.js
'use client';
import { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cart = localStorage.getItem('cartItems');
    if (cart) setItems(JSON.parse(cart));
  }, []);

  const addItem = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const index = cart.findIndex((el) => el.id === item.id);

    if (index > -1) {
      // increase quantity
      cart[index].quantity = cart[index].quantity + 1;
    } else {
      // add as new item

      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    setItems([...items, item]);
  };

  const removeItem = (itemId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const result = cart.filter((item) => item.id !== itemId);

    localStorage.setItem('cart', JSON.stringify(result));

    setItems(result);
  };

  const increaseItem = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const index = cart.findIndex((el) => el.id === id);

    if (!index === -1) return;

    cart[index].quantity = cart[index].quantity + 1;

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const decreaseItem = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const index = cart.findIndex((el) => el.id === id);

    if (!index === -1) return;

    cart[index].quantity = cart[index].quantity - 1;

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const clearCart = () => {
    setItems([]);

    localStorage.setItem('cart', JSON.stringify(items));
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
