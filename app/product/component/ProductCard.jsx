"use client";

import { useState } from "react";
import Image from "next/image";
import { cartPlus } from "@/public/icons";
import Modal from "@/app/components/modals/Modal";
import CartModal from "@/app/components/modals/CartModal";
import { intlMoneyFormat } from "@/utils/helpers";

import { useCart } from "@/context/cartContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false); // For disabling button

  const handleAddToCartClick = () => {
    setIsModalOpen(true);
  };

  const addToCart = (product) => {
    setIsAdding(true);
    addItem(product);

    // Trigger success toast
    // toast.success(`${product.name} added to cart!`, {
    //   position: "top-right",
    //   autoClose: 1000, // 1 second timeout
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    // });

    // Re-enable button after short delay
    setTimeout(() => {
      setIsAdding(false);
    }, 1000); // Match the toast timeout for consistency
  };

  // Determine product availability
  const isInStock = product.status === "published";
  const isOutOfStock =
    product.status === "out-of-stock" || product.status === "draft";

  // Accessing the first image URL from the images array
  const imageUrl = product.images?.[0]?.url;

  return (
    <div className="w-fit">
      <div className="border border-[#272424] rounded-tr-lg rounded-tl-lg p-2 w-[240px] h-[244px] relative">
        {/* Product Image */}
        <div className="relative h-[182px] grid place-items-center">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={product.name}
              width={92}
              height={138}
              className="object-cover rounded-md"
            />
          )}

          {/* Badge for Stock Status */}
          <span
            className={`absolute top-0 left-0 px-2 py-1 text-xs rounded ${
              isInStock ? "bg-[#FF938C] text-white" : "bg-gray-400 text-white"
            }`}
          >
            {isInStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Product Details */}
        <div className="flex justify-between gap-3 items-center mt-2">
          <h3 className="">{product.name}</h3>
          <p className="text-sm">{intlMoneyFormat(product.price)}</p>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        disabled={!isInStock || isAdding} 
        className={`w-full py-2 px-4 flex justify-center items-center space-x-2 ${
          !isInStock || isAdding
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#FF938C] text-white"
        }`}
      >
        <span>{isAdding ? "Adding..." : "Add to Cart"}</span>
        <Image src={cartPlus} alt="icon" width={24} height={24} />
      </button>

      <ToastContainer
        position="top-right"
        autoClose={1000} 
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />

      {/* Modal for Cart */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CartModal
          image={imageUrl} 
          title={product.name}
          quantity={1}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default ProductCard;
