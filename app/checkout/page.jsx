"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { home, greater } from "@/public/icons";
import { useRouter } from "next/navigation";
import AddressForm from "./component/AddressForm";
import ShippingMethod from "./component/ShippingMethod";
import PaymentMethod from "./component/PaymentMethod";
import OrderSummary from "./component/OrderSummary";
import { useCart } from "@/context/cartContext";
import moment from "moment";
import axios from "@/utils/axios";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const [step, setStep] = useState(0);
  const { removeItem, items, subtotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    address: "",
    flatNo: "",
    city: "",
    state: "",
    postalCode: "",
    landmark: "",
  });
  const [summary, setSummary] = useState({
    price: 0,
    discount: 0,
    shipping: 0,
    coupon: 0,
    total: 0,
    deliveryDate: "",
  });
  const router = useRouter();

  // Function to get the current date and time
  const getCurrentDateTime = () => moment().toISOString();

  useEffect(() => {
    // Set initial delivery date and calculate price
    setSummary((prev) => ({
      ...prev,
      deliveryDate: prev.deliveryDate || getCurrentDateTime(),
    }));

    const calculatePrice = () => {
      const price = subtotal;
      setSummary((prev) => ({ ...prev, price }));
    };

    calculatePrice();
  }, [subtotal, summary.price]);

  console.log("items on checkout", items, "summary", summary);

  const handleStepChange = (nextStep) => {
    setStep(nextStep);
  };

  const handlePlaceOrder = async () => {
    // Map products from the cart items
    const mappedProducts = items.map((item) => ({
      product: item.id || item._id,
      quantity: item.quantity,
    }));

    // Construct the payload
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      countryCode: formData.countryCode,
      phone: formData.phoneNumber,
      houseNumber: formData.flatNo,
      shippingAddress: formData.address,
      billingAddress: formData.address,
      city: formData.city,
      postalCode: formData.postalCode,
      landmark: formData.landmark,
      deliveryDate: summary.deliveryDate,
      price: summary.price,
      shipping: summary.shipping,
      shipmentMethod: "regular", 
      products: mappedProducts,
    };

    console.log("Order Payload:", payload);

    // Make POST request to the server
    try {
      const response = await axios.post("/orders", payload); 
      toast.success("Order placed successfully!");
      clearCart();
      router.push("/product"); 
    } catch (error) {
      console.error("Error placing order:", error.response || error.message);
    }
  };

  return (
    <div className="">
      {/* Header and breadcrumb */}
      <div className="bg-[#FDCCA1] px-8 py-3 md:px-16 lg:px-32">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <Image
              src={home}
              alt="Home Icon"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={() => router.push("/")}
            />
            <Image src={greater} alt="Greater Icon" width={24} height={24} />
            <h1 className="cursor-pointer" onClick={() => router.push("/cart")}>
              Your Cart
            </h1>
            <Image src={greater} alt="Greater Icon" width={24} height={24} />
            <h1
              className="cursor-pointer"
              onClick={() => router.push("/checkout")}
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

      {/* Steps */}
      <div className="mb-6 mt-16 md:px-16 lg:px-32 px-4 flex items-center">
        <button
          className={`py-2 px-4 ${
            step === 0 ? "text-orange-500 font-semibold" : "text-gray-500"
          } `}
          onClick={() => handleStepChange(0)}
        >
          Address
        </button>
        <Image src={greater} alt="Greater Icon" width={24} height={24} />
        <button
          className={`py-2 px-4 ${
            step === 1 ? "text-orange-500 font-semibold" : "text-gray-500"
          } `}
          onClick={() => handleStepChange(1)}
        >
          Shipping
        </button>
        <Image src={greater} alt="Greater Icon" width={24} height={24} />
        <button
          className={`py-2 px-4 ${
            step === 2 ? "text-orange-500 font-semibold" : "text-gray-500"
          } `}
          onClick={() => handleStepChange(2)}
        >
          Payment
        </button>
      </div>

      {/* Form and summary */}
      <div className="flex flex-col lg:flex-row px-4 pb-10 gap-10 lg:gap-20 items-center md:py-16 lg:py-20 md:px-16 lg:px-32">
        <div className="w-full md:w-3/5 lg:w-2/3 p-4">
          <div className="checkout-content mb-6">
            {step === 0 && (
              <AddressForm formData={formData} setFormData={setFormData} />
            )}
            {step === 1 && <ShippingMethod />}
            {step === 2 && <PaymentMethod />}
          </div>
        </div>

        <div className="w-full md:w-2/5 lg:w-1/3 p-4">
          <OrderSummary summary={summary} setSummary={setSummary} onClick={handlePlaceOrder} />
        </div>
      </div>

      {/* Place Order Button */}
      {/* <div className="px-4 md:px-16 lg:px-32 mb-10">
        <button
          onClick={handlePlaceOrder}
          className="bg-orange-500 text-white py-2 px-6 rounded-md"
        >
          Place Order
        </button>
      </div> */}
    </div>
  );
};

export default CheckoutPage;
