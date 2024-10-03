import { intlMoneyFormat } from "@/utils/helpers";

// app/cart/CartSummary.jsx
const CartSummary = ({ subtotal }) => {
  return (
    <div className="flex justify-end mt-6">
      <div className="text-right">
        <div className="flex justify-between items-center border-t pt-4">
          <span className="text-xl font-semibold">Subtotal</span>
          <span className="text-xl">£{intlMoneyFormat(subtotal)}</span>
        </div>
        <button className="mt-4 px-6 py-2 bg-orange-300 text-white font-bold rounded hover:bg-orange-400">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
