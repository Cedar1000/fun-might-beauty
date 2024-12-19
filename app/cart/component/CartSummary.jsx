import { intlMoneyFormat } from "@/utils/helpers";
import Link from "next/link";
import { Tooltip } from "@mui/material"; // Using Material-UI Tooltip

const CartSummary = ({ subtotal, hasItems }) => {
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
        <Tooltip
          title={hasItems ? "" : "Your cart is empty. Add items to proceed."}
          arrow
        >
          <div>
            <Link href={hasItems ? "/checkout" : "#"} passHref>
              <button
                className={`mt-4 px-6 py-2 w-full border border-primary font-bold rounded ${
                  hasItems
                    ? "bg-[#FDCCA1] text-primary hover:bg-opacity-50"
                    : "bg-gray-400 text-gray-600 cursor-not-allowed"
                }`}
                disabled={!hasItems}
              >
                Check Out
              </button>
            </Link>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default CartSummary;
