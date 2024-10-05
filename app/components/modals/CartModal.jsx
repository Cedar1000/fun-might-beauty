import Image from "next/image";
const CartModal = ({ image, title, quantity, onClose }) => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-4" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-green-500 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-lg font-semibold">Item added to your cart!</span>
      </div>

      <div className="flex mb-4">
        <Image src={image} height={80} width={80} alt={title} className="w-20 h-20 mr-4" />
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500">X{quantity}</p>
        </div>
      </div>

      <div className="mb-4">
        <button className="w-full py-2 border border-gray-400 rounded-md mb-2">
          View Cart (1)
        </button>
        <button className="w-full py-2 bg-orange-300 rounded-md text-white mb-2">
          Check Out
        </button>
        <button className="w-full text-orange-400 underline">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartModal;
