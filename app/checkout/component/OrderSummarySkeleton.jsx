"use client";

const OrderSummarySkeleton = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-md animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-4/5 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-4/5 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
      <div className="h-10 bg-gray-300 rounded w-full"></div>
    </div>
  );
};

export default OrderSummarySkeleton;
