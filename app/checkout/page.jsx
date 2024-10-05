"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { home, greater } from "@/public/icons";
import { useRouter } from "next/navigation";
import AddressForm from "./component/AddressForm";
import ShippingMethod from "./component/ShippingMethod";
import PaymentMethod from "./component/PaymentMethod";
import OrderSummary from "./component/OrderSummary";

const CheckoutPage = () => {
  const [step, setStep] = useState(0);
    const router = useRouter();

  const handleStepChange = (nextStep) => {
    setStep(nextStep);
  };

  return (
    <div className="">
      <div className="bg-[#FDCCA1] px-8 py-3 md:px-16 lg:px-32">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <Image
              src={home}
              alt="Home Icon"
              width={24}
              height={24}
              className=" cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            />
            <Image
              src={greater}
              alt="Greater Icon"
              width={24}
              height={24}
              className=""
            />
            <h1
              className="cursor-pointer"
              onClick={() => {
                router.push("/cart");
              }}
            >
              Your Cart
            </h1>
            <Image
              src={greater}
              alt="Greater Icon"
              width={24}
              height={24}
              className=""
            />
            <h1
              className="cursor-pointer"
              onClick={() => {
                router.push("/checkout");
              }}
            >
              Checkout
            </h1>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <h1 className="text-3xl lg:text-[40px] ">Checkout</h1>
          <Link href="/product">
            <p className="text-primary border-b border-primary pb-1">
              Continue Shopping
            </p>
          </Link>
        </div>
      </div>
      <div className="mb-6 mt-16 md:px-16 lg:px-32 px-4 flex items-center">
        <button
          className={`py-2 px-4 ${
            step === 0 ? "text-orange-500 font-semibold" : "text-gray-500"
          } `}
          onClick={() => handleStepChange(0)}
        >
          Address
        </button>
        <Image
          src={greater}
          alt="Greater Icon"
          width={24}
          height={24}
          className=""
        />
        <button
          className={`py-2 px-4 ${
            step === 1 ? "text-orange-500 font-semibold" : "text-gray-500"
          } `}
          onClick={() => handleStepChange(1)}
        >
          Shipping
        </button>
        <Image
          src={greater}
          alt="Greater Icon"
          width={24}
          height={24}
          className=""
        />
        <button
          className={`py-2 px-4 ${
            step === 2 ? "text-orange-500 font-semibold" : "text-gray-500"
          } `}
          onClick={() => handleStepChange(2)}
        >
          Payment
        </button>
      </div>
      <div className="flex flex-col lg:flex-row px-4 pb-10 gap-10 lg:gap-20 items-center md:py-16 lg:py-20 md:px-16 lg:px-32">
        <div className="w-full md:w-3/5 lg:w-2/3 p-4">
          <div className="checkout-content mb-6">
            {step === 0 && <AddressForm />}
            {step === 1 && <ShippingMethod />}
            {step === 2 && <PaymentMethod />}
          </div>
        </div>

        <div className="w-full md:w-2/5 lg:w-1/3 p-4  ">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
