"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import axios from "@/utils/axios";
import { cartPlus } from "@/public/icons";
import { useCart } from "@/context/cartContext";
import { useState } from "react";
import { intlMoneyFormat } from "@/utils/helpers";

// Fetch products dynamically
const fetchProducts = async () => {
  const res = await axios.get("/products");
  return res.data.doc;
};

// Skeleton Loader Component
const ProductSkeleton = () => {
  return (
    <div className="bg-[#FFE5E4] grid rounded-lg p-4 shadow-lg relative animate-pulse">
      <div className="bg-gray-300 h-36 w-full rounded-md"></div>
      <div className="mt-4 h-6 bg-gray-300 w-3/4 rounded"></div>
      <div className="mt-2 h-6 bg-gray-300 w-1/2 rounded"></div>
      <div className="mt-4 h-10 bg-gray-300 w-full rounded"></div>
    </div>
  );
};

const Products = () => {

    const { addItem } = useCart();

    const [isAdding, setIsAdding] = useState(false); 

    const addToCart = (product) => {
      setIsAdding(true);
      addItem(product);


      // Re-enable button after short delay
      setTimeout(() => {
        setIsAdding(false);
      }, 1000); // Match the toast timeout for consistency
    };


  // Fetch products
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["home-products"],
    queryFn: fetchProducts,
  });

  if (error) {
    return (
      <div className="text-center text-red-500 py-16">
        Error loading products: {error.message}
      </div>
    );
  }

  return (
    <section className="py-16 px-8 md:px-16 lg:px-[86px] border-t border-[#272424]">
      {/* Section Title */}
      <div className="md:text-center mb-8">
        <h2 className="text-4xl font-bold text-[#0D0F66]">Shop Our Products</h2>
        <p className="text-lg text-[#272424] mt-2">
          We sell quality hairs, attachments, and other hair products
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl pt-6 pb-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-0">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : products.map((product) => {
              const isInStock = product.status === "published";
              const isOutOfStock =
                product.status === "out-of-stock" || product.status === "draft";

              return (
                <div
                  key={product.id}
                  className="bg-[#FFE5E4] grid rounded-lg p-4 shadow-lg relative"
                >
                  {/* Badge */}
                  <span
                    className={`absolute top-4 left-4 px-2 py-1 text-xs ${
                      isInStock
                        ? "bg-[#FF938C] text-[#4F4444]"
                        : "bg-gray-400 text-white"
                    }`}
                  >
                    {isInStock ? "In Stock" : "Out of Stock"}
                  </span>

                  {/* Product Image */}
                  <div className="place-self-center">
                    <Image
                      src={
                        product.images?.[0]?.url || "/default-product-image.jpg"
                      }
                      alt={product.name}
                      width={100}
                      height={200}
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <h3 className="text-xl mt-4">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-[#272424] mt-2">{intlMoneyFormat(product.price)}</p>
                    {/* Order Button */}
                    <button
                      onClick={() => addToCart(product)}
                      className={`rounded py-2 px-4 mt-4 flex justify-center items-center space-x-2 ${
                        isInStock
                          ? "bg-[#F9B871] text-[#4F4444]"
                          : "bg-gray-400 text-white cursor-not-allowed"
                      }`}
                      disabled={!isInStock}
                    >
                      <span>{isAdding ? "Adding..." : "Add to Cart"}</span>
                      <Image src={cartPlus} alt="icon" width={24} height={24} />
                    </button>
                  </div>
                </div>
              );
            })}
      </div>

      {/* Show More Link */}
      <div className="text-end mt-8">
        <Link
          href="/product"
          className="text-lg text-[#272424] pb-1 hover:underline"
        >
          Show More ...
        </Link>
      </div>
    </section>
  );
};

export default Products;
