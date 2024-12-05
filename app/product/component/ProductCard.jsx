'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cartPlus } from '@/public/icons';
import Modal from '@/app/components/modals/Modal';
import CartModal from '@/app/components/modals/CartModal';

import { useCart } from '@/context/cartContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCartClick = () => {
    setIsModalOpen(true);
  };

  const addToCart = (product) => {
    addItem(product);

    // toast.success('Added To Cart!');
  };
  return (
    <div className="w-fit ">
      <div className="border border-[#272424] rounded-tr-lg rounded-tl-lg p-2 w-[240px] h-[244px]">
        <div className="relative  h-[182px] grid place-items-center ">
          <Image
            src={product.image}
            alt={product.name}
            width={92}
            height={138}
            className=" object-cover rounded-md"
          />
          {product.isNew && (
            <span className="absolute top-0 left-0 bg-[#FF938C] text-white text-xs px-2 py-1 rounded">
              in stock
            </span>
          )}
        </div>
        <div className="flex justify-between items-center ">
          <h3 className="text-lg ">{product.name}</h3>
          <p className=" text-sm">{product.price}</p>
        </div>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="w-full bg-[#FF938C] py-2 text-[#4F4444] px-4  flex justify-center items-center space-x-2"
      >
        <span> Add to Cart</span>
        <Image src={cartPlus} alt="icon" width={24} height={24} />
      </button>

      <ToastContainer autoClose={true} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CartModal
          image={product.image}
          title={product.name}
          quantity={1}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default ProductCard;
