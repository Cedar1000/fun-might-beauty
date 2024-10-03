// app/cart/CartItem.jsx
"use client"; // Enable client-side interactivity

import { intlMoneyFormat } from "@/utils/helpers";
import Image from "next/image";
import { useState } from "react";

const CartItem = ({ item, updateQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity); 
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(item.id, newQuantity); 
    }
  };

  return (
    <tr className="border-b">
      <td className="py-4">
        <div className="flex items-center">
          {/* Use Next.js Image component */}
          <Image
            src={item.image}
            alt={item.name}
            width={64}
            height={64}
            className="object-cover rounded" 
          />
          <div className="ml-4">
            <p className="text-lg">{item.name}</p>
            <p className="text-gray-500">£{intlMoneyFormat(item.price)}</p>
          </div>
        </div>
      </td>
      <td className="py-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={decreaseQuantity}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-12 text-center border rounded"
          />
          <button
            onClick={increaseQuantity}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            +
          </button>
          <button className="ml-4 text-red-600">🗑️</button>
        </div>
      </td>
      <td className="py-4">£{intlMoneyFormat(item.price * quantity)}</td>
    </tr>
  );
};

export default CartItem;
