// app/cart/page.jsx
"use client"; // Mark this as a Client Component

import { useState } from "react";
import CartSummary from "./component/CartSummary";
import CartItem from "./component/CartItem";
import { productImage } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { home, greater } from "@/public/icons";
import { useRouter } from "next/navigation";


const CartPage = () => {
  const initialCartItems = [
    {
      id: 1,
      name: "Elsa Braid Extensions",
      price: 25.04,
      quantity: 4,
      image: productImage,
    },
    {
      id: 2,
      name: "Elsa Braid Extensions",
      price: 50.45,
      quantity: 4,
      image: productImage,
    },
  ];

  const router = useRouter();

  const [cartItems, setCartItems] = useState(initialCartItems);

  // Update quantity function
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate subtotal dynamically
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="">
      {/* Cart Header */}
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
            <h1 className="">Your Cart</h1>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <h1 className="text-3xl lg:text-[40px] ">Your Cart</h1>
          <Link href="/product">
          <p className="text-primary border-b border-primary pb-1">
            Continue Shopping
          </p>
          </Link>
        </div>
      </div>

      {/* Cart Table */}
      <div className="px-4 py-10 md:py-16 lg:py-20 md:px-16 lg:px-32">

      <table className="w-full text-left border-collapse mb-6 ">
        <thead>
          <tr className="border-b">
            <th className="py-4 text-xl font-normal">Products</th>
            <th className="py-4 text-xl font-normal">Quantity</th>
            <th className="py-4 text-xl font-normal">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
            />
          ))}
        </tbody>
      </table>

      {/* Cart Summary */}
      <CartSummary subtotal={subtotal} />
      </div>
    </div>
  );
};

export default CartPage;
