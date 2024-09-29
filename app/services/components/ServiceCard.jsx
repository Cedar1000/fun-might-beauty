import Image from "next/image";
const ServiceCard = ({ image, title, description, priceItems }) => (
  <div className="flex flex-col md:flex-row border-b md:gap-10 lg:gap-20 border-[#272424] pb-6 mb-6">
    {/* Image */}
    <div className="flex-shrink-0 md:w-fit px-8 pt-12 ">
      <Image
        src={image}
        alt={title}
        width={218}
        height={253}
        className=" object-cover rounded-lg shadow-md"
      />
    </div>

    {/* Content */}
    <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
      <h2 className="text-2xl md:text-3xl lg:text-[32px] font-medium text-[#272424] mb-3 md:mb-6">
        {title}
      </h2>
      <p className="text-[#272424] mb-4">{description}</p>

      {/* Pricing Section */}
      <div className="space-y-4">
        <p className="text-[#272424] text-2xl mb-[2px]">Price</p>
        {priceItems.map((item, index) => (
          <ul
            key={index}
            className="flex font-semibold list-disc list-inside justify-between max-w-lg text-[#272424]"
          >
            <li>{item.label}</li>
            <li className=" list-none">{item.price}</li>
          </ul>
        ))}
      </div>
      <p className="text-[#272424] mt-3 md:mt-6">
        All our service pricing is based upon length, thickness, amount of
        product used, and quantity of time required to achieve desired
        style/effects. In certain cases, prices for services may vary from the
        listed price. 
      </p>
    </div>
  </div>
);

export default ServiceCard;
