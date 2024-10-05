"use client";

import { useState } from "react";
import Image from "next/image";

const PaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState("paystack");

  const handlePaymentChange = (method) => {
    setSelectedPayment(method);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
      <div className="flex flex-col gap-4">
        <div
          className={`border p-4 rounded-md cursor-pointer ${
            selectedPayment === "paystack"
              ? "border-orange-500"
              : "border-gray-300"
          }`}
          onClick={() => handlePaymentChange("paystack")}
        >
          <span className="flex items-center justify-between">
            <span>Paystack</span>
            <Image
              src="/images/payment-icons.png"
              alt="payment-icons"
              width={24}
              height={24}   
              className="h-6"
            />
          </span>
        </div>
        {/* Add other payment methods here */}
      </div>

      <div className="mt-6">
        <button className="bg-orange-500 text-white w-full py-2 rounded-md hover:bg-orange-600 transition">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
