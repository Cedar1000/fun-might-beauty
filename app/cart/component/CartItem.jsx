// app/cart/CartItem.jsx
'use client';

import { intlMoneyFormat } from '@/utils/helpers';
import Image from 'next/image';
import { useState } from 'react';
import { trash } from '@/public/icons';

import { useCart } from '@/context/cartContext';

const CartItem = ({ item, updateQuantity, deleteItem }) => {
  const { increaseItem, decreaseItem } = useCart();

  const [quantity, setQuantity] = useState(item.quantity);

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
    increaseItem(item.id);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(item.id, newQuantity);

      decreaseItem(item.id);
    }
  };

  return (
    <tr className="border-b">
      <td className="py-4  w-[50%]">
        <div className="flex items-center">
          <div className="bg-[#FEEDEC]">
            <Image
              src={item.images?.[0]?.url}
              alt={item.name}
              width={64}
              height={140}
              className="object-cover rounded"
            />
          </div>

          <div className="ml-2 md:ml-4">
            <p className="md:text-lg lg:text-xl font-semibold">{item.name}</p>
            <p className="text-primary text-sm md:text-base">
              {intlMoneyFormat(item.price)}
            </p>
          </div>
        </div>
      </td>
      <td className="py-4 ">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 border md:text-xl md:px-5 md:py-2 border-primary rounded">
            <button onClick={increaseQuantity} className="px-2 py-1 ">
              +
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center "
            />
            <button onClick={decreaseQuantity} className="px-2 py-1 ">
              -
            </button>
          </div>
          <Image
            src={trash}
            alt="trash-can"
            width={14}
            height={14}
            className="cursor-pointer"
            onClick={() => deleteItem(item)}
          />
        </div>
      </td>
      <td className="py-4 md:text-xl px-4">
        {intlMoneyFormat(item.price * quantity)}
      </td>
    </tr>
  );
};

export default CartItem;
