import Image from "next/image";
import { cartPlus } from "@/public/icons"; 
const ProductCard = ({ product }) => {
  return (
    <div className="w-fit ">
      <div className="border border-[#272424] rounded-tr-lg rounded-tl-lg p-2 w-[240px] h-[244px]">
        <div className="relative  h-[182px] grid place-items-center ">
          <Image
            src={product.image}
            alt={product.name}
            width={92}
            height={138}
            className=" object-cover rounded-md"
          />
          {product.isNew && (
            <span className="absolute top-0 left-0 bg-[#FF938C] text-white text-xs px-2 py-1 rounded">
              in stock
            </span>
          )}
        </div>
        <div className="flex justify-between items-center ">
          <h3 className="text-lg ">{product.name}</h3>
          <p className=" text-sm">{product.price}</p>
        </div>
      </div>
      <button className="w-full bg-[#FF938C] py-2 text-[#4F4444] px-4  flex justify-center items-center space-x-2">
        <span> Add to Cart</span>
        <Image src={cartPlus} alt="icon" width={24} height={24} />
      </button>
    </div>
  );
};

export default ProductCard;
