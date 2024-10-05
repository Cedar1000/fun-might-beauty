"use client";
import { useState } from "react";
import CategoryTabs from "./component/CategoryTab";
import ProductGrid from "./component/ProductGrid";
import { productImage } from "@/public/images";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showMore, setShowMore] = useState(false);

  const categories = [
    "all",
    "best sellers",
    "wigs",
    "hair accessories",
    "hair extensions",
    "hair products", // Make sure this is included in your tabs
  ];

  const allProducts = {
    all: [
      {
        id: 1,
        name: "Diva Braids",
        price: "£25.99",
        image: productImage,
        isNew: true,
        category: "Hair Extensions",
      },
      {
        id: 2,
        name: "Lux Curls",
        price: "£29.99",
        image: productImage,
        isNew: true,
        category: "Hair Extensions",
      },
      {
        id: 3,
        name: "Silky Wigs",
        price: "£59.99",
        image: productImage,
        isNew: false,
        category: "Wigs",
      },
      {
        id: 4,
        name: "Smooth Pins",
        price: "£7.99",
        image: productImage,
        isNew: false,
        category: "Hair Accessories",
      },
      {
        id: 5,
        name: "Voluminous Wigs",
        price: "£65.99",
        image: productImage,
        isNew: true,
        category: "Wigs",
      },
      {
        id: 6,
        name: "Premium Scrunchies",
        price: "£4.99",
        image: productImage,
        isNew: false,
        category: "Hair Accessories",
      },
      {
        id: 7,
        name: "Curl Delight",
        price: "£18.99",
        image: productImage,
        isNew: true,
        category: "Hair Products",
      },
      {
        id: 8,
        name: "Frizz Control Serum",
        price: "£15.99",
        image: productImage,
        isNew: false,
        category: "Hair Products",
      },
    ],

    bestSellers: [
      {
        id: 9,
        name: "Frizz Control Serum",
        price: "£15.99",
        image: productImage,
        isNew: false,
        category: "Hair Products",
      },
      {
        id: 10,
        name: "Voluminous Wigs",
        price: "£65.99",
        image: productImage,
        isNew: true,
        category: "Wigs",
      },
      {
        id: 11,
        name: "Silky Wigs",
        price: "£59.99",
        image: productImage,
        isNew: false,
        category: "Wigs",
      },
      {
        id: 12,
        name: "Lux Curls",
        price: "£29.99",
        image: productImage,
        isNew: true,
        category: "Hair Extensions",
      },
    ],

    wigs: [
      {
        id: 13,
        name: "Silky Wigs",
        price: "£59.99",
        image: productImage,
        isNew: false,
        category: "Wigs",
      },
      {
        id: 14,
        name: "Voluminous Wigs",
        price: "£65.99",
        image: productImage,
        isNew: true,
        category: "Wigs",
      },
      {
        id: 15,
        name: "Curly Wig Special",
        price: "£55.99",
        image: productImage,
        isNew: false,
        category: "Wigs",
      },
    ],

    hairAccessories: [
      {
        id: 16,
        name: "Smooth Pins",
        price: "£7.99",
        image: productImage,
        isNew: false,
        category: "Hair Accessories",
      },
      {
        id: 17,
        name: "Premium Scrunchies",
        price: "£4.99",
        image: productImage,
        isNew: false,
        category: "Hair Accessories",
      },
      {
        id: 18,
        name: "Gold Hair Clips",
        price: "£12.99",
        image: productImage,
        isNew: true,
        category: "Hair Accessories",
      },
    ],

    hairExtensions: [
      {
        id: 19,
        name: "Diva Braids",
        price: "£25.99",
        image: productImage,
        isNew: true,
        category: "Hair Extensions",
      },
      {
        id: 20,
        name: "Lux Curls",
        price: "£29.99",
        image: productImage,
        isNew: true,
        category: "Hair Extensions",
      },
      {
        id: 21,
        name: "Natural Weave",
        price: "£40.99",
        image: productImage,
        isNew: false,
        category: "Hair Extensions",
      },
    ],

    hairProducts: [
      {
        id: 22,
        name: "Curl Delight",
        price: "£18.99",
        image: productImage,
        isNew: true,
        category: "Hair Products",
      },
      {
        id: 23,
        name: "Frizz Control Serum",
        price: "£15.99",
        image: productImage,
        isNew: false,
        category: "Hair Products",
      },
      {
        id: 24,
        name: "Hair Nourish Oil",
        price: "£20.99",
        image: productImage,
        isNew: false,
        category: "Hair Products",
      },
    ],
  };


  const products = {
    all: [
      ...allProducts.all,
      // ...allProducts.bestSellers,
      // ...allProducts.wigs,
      // ...allProducts.hairAccessories,
      // ...allProducts.hairExtensions,
      // ...allProducts.hairProducts,
    ], // Display all products or first 8
    "best sellers": allProducts.bestSellers,
    wigs: allProducts.wigs,
    "hair accessories": allProducts.hairAccessories,
    "hair extensions": allProducts.hairExtensions,
    "hair products": allProducts.hairProducts,
  };

  const handleSeeMore = () => setShowMore(!showMore);

  return (
    <div className=" py-10 md:pb-20 lg:pb-[107px] ">
      <h1 className="text-center text-4xl lg:text-6xl xl:text-7xl font-medium mt-6 md:mt-14 lg:mt-24">
        Explore Our Products
      </h1>
      <p className="text-center text-lg md:text-2xl mt-6 mb-8">
        Explore our curated selection of high-quality beauty products
      </p>

      {/* Category Tabs */}
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Product Grid */}
      {/* <div className="px-8 md:px-16 lg:px-28">
        <ProductGrid products={products[selectedCategory]} />
        {selectedCategory === "all" && (
          <div>
            <div>All</div>
            <ProductGrid products={products[selectedCategory]} />
            <ProductGrid products={products[selectedCategory]} />
          </div>
        )}
      </div> */}

      <div className="px-8 md:px-16 lg:px-28">
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6 my-10 md:my-20 lg:my-[109px]">
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}{" "}
            {selectedCategory === "all" && "Products"}
          </h2>
          <ProductGrid products={products[selectedCategory]} />
        </div>
      </div>
      {selectedCategory === "all" && (
        <div>
          {categories
            .filter((category) => category !== "all") // Exclude 'all' from categories
            .map((category) => (
              <div
                key={category}
                className="mt-10 md:mt-[70px] border-t border-primary px-8 md:px-16 lg:px-28"
              >
                <h1 className="text-2xl lg:text-3xl font-semibold mb-6 my-10 md:my-20 lg:my-[109px]">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h1>
                <ProductGrid products={products[category]} />
              </div>
            ))}
        </div>
      )}

      {/* See More Button */}
      {/* {selectedCategory === "all" && (
        <div className="text-center mt-8">
          <button
            className="px-6 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600"
            onClick={handleSeeMore}
          >
            {showMore ? "Show Less" : "See More"}
          </button>
        </div>
      )} */}
    </div>
  );
};

export default ProductsPage;
