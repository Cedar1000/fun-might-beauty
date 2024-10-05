import { intlMoneyFormat } from "@/utils/helpers";
import Link from "next/link";

// app/cart/CartSummary.jsx
const CartSummary = ({ subtotal }) => {
  return (
    <div className="flex justify-end mt-8 md:mt-14">
      <div className="text-right">
        <div className="flex justify-between items-center gap-[94px] border-t border-primary pt-4">
          <span className="text-xl md:text-2xl font-semibold">Subtotal</span>
          <span className="text-xl">{intlMoneyFormat(subtotal)}</span>
        </div>
        <p className="md:text-xl mt-4">
          Taxes and shipping calculated at checkout
        </p>
        <Link href="/checkout">
        <button className="mt-4 px-6 py-2 w-full bg-[#FDCCA1] text-primary border border-primary font-bold rounded hover:bg-opacity-50">
          Check Out
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
