"use client";

import { useState, useEffect } from "react";
import moment from "moment";
import { intlMoneyFormat } from "@/utils/helpers";
const OrderSummary = () => {
  const [summary, setSummary] = useState({
    price: 500,
    discount: 0,
    shipping: 10,
    coupon: 5,
    total: 510,
    deliveryDate: "2024-02-01",
  });

  useEffect(() => {
    const calculateTotal = () => {
      const total =
        summary.price + summary.shipping - summary.discount - summary.coupon;
      setSummary((prev) => ({ ...prev, total }));
    };

    calculateTotal();
  }, [summary.price, summary.shipping, summary.discount, summary.coupon]);

  return (
    <div className="bg-white p-6 md:h-[580px] shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      {/* Price */}
      <div className="flex justify-between mb-6">
        <span>Price:</span>
        <span>{intlMoneyFormat(summary.price)}</span>
      </div>

      {/* Discount */}
      <div className="flex justify-between mb-6">
        <span>Discount:</span>
        <span>{intlMoneyFormat(summary.discount)}</span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between mb-6">
        <span>Shipping:</span>
        <span>{intlMoneyFormat(summary.shipping)}</span>
      </div>

      {/* Coupon */}
      <div className="flex justify-between mb-6 border-b border-primary pb-8">
        <span>Coupon Applied:</span>
        <span>{intlMoneyFormat(summary.coupon)}</span>
      </div>

      {/* Total */}
      <div className="flex justify-between  mb-4 mt-8">
        <span>TOTAL:</span>
        <span className="font-semibold">{intlMoneyFormat(summary.total)}</span>
      </div>

      {/* Estimated Delivery Date */}
      <div className="flex justify-between mb-4 mt-6">
        <span>Estimated Delivery by:</span>
        <span>{moment(summary.deliveryDate).format("DD MMM, YYYY")}</span>
      </div>

      {/* Coupon Code Input */}
      <input
        type="text"
        placeholder="Coupon Code"
        className="border border-gray-300 rounded-md p-2 w-full mb-4"
      />

      {/* Continue to Payment Button */}
      <button className="mt-4 px-6 py-2 w-full bg-[#FDCCA1] text-primary border border-primary font-bold rounded hover:bg-opacity-50">
        Continue to Payment
      </button>
    </div>
  );
};

export default OrderSummary;
