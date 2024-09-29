import Image from "next/image";
import { image1, image2, image3, image4 } from "@/public/images";

const Service = () => {
  return (
    <section className="py-16 lg:pb-24 xl:mx-24 px-2 md:px-8 relative">
      <div className="md:text-center px-4 md-px-0 mb-12">
        <h2 className="text-4xl font-bold text-[#0D0F66]">Our Services</h2>
      </div>

      <section className="grid lg:flex  relative justify-center items-center mt-[98px] ">
        <div className="absolute left-20 lg:left-0 xl:left-20 w-[50%] md:w-[40%] h-full lg:h-[680px] bg-[#FDE4D4] rounded-tl-[180px]  "></div>
        <aside className="z-10 lg:ml-9">
          <div className="flex items-stretch ">
            <div className="bg-[#FFF3F2] pl-3 pt-14 pb-12 rounded-tl-[52px] w-[230px] rounded-br-[52px] shadow-lg flex flex-col justify-between">
              <h3 className="text-2xl font-medium mt-4 w-[169px]">
                Instant Dreadlocks
              </h3>
              <p className="text-gray-600 mt-2 text-xl">
                We can make instant dreadlocks for any and every hair type.
              </p>
            </div>
            <Image
              src={image1}
              alt="Instant Dreadlocks"
              width={500}
              height={500}
              className="rounded-bl-[52px] rounded-br-[52px] w-[200px] md:w-[230px] object-cover"
            />
          </div>
          <div className="flex items-stretch ">
            <Image
              src={image3}
              alt="Wig Insallation"
              width={500}
              height={500}
              className=" rounded-tr-[52px] w-[230px] object-cover"
            />
            <div className="bg-[#FFF3F2] md:pl-3 pr-2 pt-14 pb-12 rounded-tl-[52px] rounded-tr-[52px] w-[200px] md:w-[230px]  shadow-lg flex flex-col justify-between">
              <h3 className="text-2xl font-medium mt-4 w-[169px]">
                Wig Insallation
              </h3>
              <p className="text-gray-600 text-xl">
                We create custom made wigs and fit them just how you like
              </p>
            </div>
          </div>
        </aside>

        <aside className="z-10">
          <div className="flex items-stretch ">
            <div className="bg-[#FFF3F2] pl-3 pt-14 pb-12 rounded-bl-[52px] rounded-br-[52px] w-[230px] shadow-lg flex flex-col justify-between">
              <h3 className="text-2xl font-medium mt-4 w-[169px]">Braiding</h3>
              <p className="text-gray-600 mt-2 text-xl">
                There are many braiding styles and options and guess what we can
                make them all
              </p>
            </div>
            <Image
              src={image2}
              alt="Braiding"
              width={500}
              height={500}
              className="rounded-bl-[52px] rounded-tr-[52px] w-[200px] md:w-[230px] object-cover"
            />
          </div>
          <div className="flex items-stretch ">
            <Image
              src={image4}
              alt="Wig Coloring"
              width={500}
              height={500}
              className=" rounded-tr-[52px] rounded-tl-[52px] w-[230px] object-cover"
            />
            <div className="bg-[#FFF3F2] pl-3 pr-2 pt-14 pb-12 rounded-tl-[52px] w-[230px]  shadow-lg flex flex-col justify-between">
              <h3 className="text-2xl font-medium mt-4 w-[146px]">
                Wig Coloring
              </h3>
              <p className="text-gray-600 text-xl">
                We bleach and tint wigs for different looks. Can also be custom
                made.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
};

export default Service;
