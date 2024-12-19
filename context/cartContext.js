"use client";
import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext({
  count: 0,
  items: [],
  subtotal: 0,
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  increaseItem: () => {},
  decreaseItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) setItems(JSON.parse(cart));
  }, []);

  useEffect(() => {
    calculateTotals(items);
  }, [items]);

  const calculateTotals = (cartItems) => {
    const newCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const newSubtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setCount(newCount);
    setSubtotal(newSubtotal);
  };

  const addItem = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((el) => el.id === item.id);

    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setItems(cart);
  };

  const removeItem = (itemId) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const result = cart.filter((item) => item.id !== itemId);

    localStorage.setItem("cart", JSON.stringify(result));
    setItems(result);
  };

  const updateQuantity = (id, newQuantity) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item.id === id);

    if (index !== -1) {
      cart[index].quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      setItems(cart);
    }
  };

  const clearCart = () => {
    setItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const increaseItem = (id) => {
    updateQuantity(id, items.find((item) => item.id === id).quantity + 1);
  };

  const decreaseItem = (id) => {
    updateQuantity(id, items.find((item) => item.id === id).quantity - 1);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        subtotal,
        addItem,
        removeItem,
        clearCart,
        updateQuantity,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
