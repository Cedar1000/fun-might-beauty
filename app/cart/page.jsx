"use client";

import { useState, useEffect } from "react";
import CartSummary from "./component/CartSummary";
import CartItem from "./component/CartItem";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cartContext";
import { home, greater } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const router = useRouter();
  const { removeItem, items, updateQuantity, subtotal } = useCart();

  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } else {
      return [];
    }
  });

  console.log("cartItems", cartItems);
  console.log("items", items);
  console.log("subtotal", subtotal);

  useEffect(() => {
    setCartItems(items);
  }, [items]);

  const deleteItem = (item) => {
    removeItem(item.id);
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
                deleteItem={deleteItem}
              />
            ))}
          </tbody>
        </table>
        <CartSummary subtotal={subtotal} hasItems={cartItems.length > 0} />
      </div>
    </div>
  );
};

export default CartPage;
