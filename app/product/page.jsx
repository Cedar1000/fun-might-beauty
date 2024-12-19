"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "@/utils/axios";
import CategoryTabs from "./component/CategoryTab";
import ProductGrid from "./component/ProductGrid";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Fetch products from the server
const fetchProducts = async () => {
  const res = await axios.get("/products");
  return res.data.doc;
};

// Fetch categories from the server
const fetchCategories = async () => {
  const res = await axios.get("/category");
  return res.data.doc;
};

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch products
  const {
    data: productsData = [],
    isLoading: isLoadingProducts,
    error: productsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Fetch categories
  const {
    data: categoriesData = [],
    isLoading: isLoadingCategories,
    error: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  // Combine fetched categories with "all" category
  const categories = [{ id: "all", name: "all" }, ...categoriesData];

  // Map products by category
  const productsByCategory = categories.reduce((acc, category) => {
    acc[category.name] =
      category.id === "all"
        ? productsData
        : productsData.filter((product) => product.category === category.id);
    return acc;
  }, {});

  // Skeleton Loading State
  if (isLoadingProducts || isLoadingCategories) {
    return (
      <div className="py-10 px-8 md:px-16 lg:px-28">
        <h1 className="text-center text-4xl lg:text-6xl xl:text-7xl font-medium mt-6 md:mt-14 lg:mt-24">
          Explore Our Products
        </h1>
        <p className="text-center text-lg md:text-2xl mt-6 mb-8">
          Explore our curated selection of high-quality beauty products
        </p>

        <div className="mb-10">
          <Skeleton width={120} height={30} className="mr-4" inline />
          <Skeleton width={120} height={30} className="mr-4" inline />
          <Skeleton width={120} height={30} className="mr-4" inline />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index}>
              <Skeleton height={150} className="mb-4" />
              <Skeleton height={20} width={200} className="mb-2" />
              <Skeleton height={20} width={150} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Handle error state
  if (productsError || categoriesError) {
    return (
      <div className="text-center text-red-500">
        Error loading data: {productsError?.message || categoriesError?.message}
      </div>
    );
  }

  return (
    <div className="py-10 md:pb-20 lg:pb-[107px]">
      <h1 className="text-center text-4xl lg:text-6xl xl:text-7xl font-medium mt-6 md:mt-14 lg:mt-24">
        Explore Our Products
      </h1>
      <p className="text-center text-lg md:text-2xl mt-6 mb-8">
        Explore our curated selection of high-quality beauty products
      </p>

      {/* Category Tabs */}
      <CategoryTabs
        categories={categories.map((category) => category.name)}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Product Grid */}
      <div className="px-8 md:px-16 lg:px-28">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-6 my-10 md:my-20 lg:my-[109px]">
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}{" "}
          {selectedCategory === "all" && "Products"}
        </h2>
        <ProductGrid products={productsByCategory[selectedCategory]} />
      </div>

      {/* Render other categories if "all" is selected */}
      {selectedCategory === "all" &&
        categories
          .filter((category) => category.name !== "all")
          .map((category) => (
            <div
              key={category.id}
              className="mt-10 md:mt-[70px] border-t border-primary px-8 md:px-16 lg:px-28"
            >
              <h1 className="text-2xl lg:text-3xl font-semibold mb-6 my-10 md:my-20 lg:my-[109px]">
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </h1>
              <ProductGrid products={productsByCategory[category.name]} />
            </div>
          ))}
    </div>
  );
};

export default ProductsPage;
