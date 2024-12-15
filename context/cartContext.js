// cartContext.js
'use client';
import { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext({
  count: 0,
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) setItems(JSON.parse(cart));
  }, []);

  useEffect(() => {
    // Calculate count based on items
    const cart = localStorage.getItem('cart');

    const items = JSON.parse(cart) || [];

    const newCount = items.reduce((acc, item) => acc + item.quantity, 0);
    setCount(newCount);
  }, [items]);

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
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
