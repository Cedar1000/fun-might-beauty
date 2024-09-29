import Image from "next/image";
import Link from "next/link"; 
import {productImage} from "@/public/images"; 
import { cartPlus } from "@/public/icons"; 

const products = [
  {
    id: 1,
    name: "Elsa Braid Extension",
    price: "₦5,800/per pack",
    image: productImage,
    inStock: true,
  },
  {
    id: 2,
    name: "Elsa Braid Extension",
    price: "₦5,800/per pack",
    image: productImage,
    inStock: true,
  },
  {
    id: 3,
    name: "Elsa Braid Extension",
    price: "₦5,800/per pack",
    image: productImage,
    inStock: true,
  },
  {
    id: 4,
    name: "Elsa Braid Extension",
    price: "₦5,800/per pack",
    image: productImage,
    inStock: true,
  },
];

const Products = () => {
  return (
    <section className="py-16 px-8 md:px-16 lg:px-[86px] border-t border-[#272424]">
      {/* Section Title */}
      <div className="md:text-center mb-8">
        <h2 className="text-4xl font-bold text-[#0D0F66]">Shop Our Products</h2>
        <p className="text-lg text-[#272424] mt-2">
          We sell quality hairs, attachments and other hair products
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl pt-6 pb-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-0">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#FFE5E4] grid rounded-lg p-4 shadow-lg relative"
          >
            {/* Badge */}
            {product.inStock && (
              <span className="absolute top-4 left-4 bg-[#FF938C] text-[#4F4444] px-2 py-1 text-xs ">
                In Stock
              </span>
            )}
            {/* Product Image */}
            <div className="place-self-center">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={200}
                className="object-cover"
              />
            </div>
            {/* Product Details */}
            <h3 className="text-xl mt-4">{product.name}</h3>
            <div className="flex justify-between items-center">
              <p className="text-[#272424] mt-2">{product.price}</p>
              {/* Order Button */}
              <button className="bg-[#F9B871] text-[#4F4444] rounded py-2 px-4 mt-4 flex justify-center items-center space-x-2">
                <span>Order Now</span>
                <Image src={cartPlus} alt="icon" width={24} height={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Link */}
      <div className="text-end mt-8">
        <Link
          href="/products"
          className="text-lg text-[#272424] pb-1 hover:underline"
        >
          Show More ...
        </Link>
      </div>
    </section>
  );
};

export default Products;
