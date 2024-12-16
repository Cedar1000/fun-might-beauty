import Image from 'next/image';
import { image1, image2, hair7, ponytail, frontal } from '@/public/images';

const Service = () => {
  return (
    <section className="py-16 lg:pb-24 xl:mx-24 px-2 md:px-8 relative">
      <div className="md:text-center px-4 md-px-0 mb-12">
        <h2 className="text-4xl font-bold text-[#0D0F66]">Our Services</h2>
      </div>

      <section className="grid lg:flex  relative justify-center items-center mt-[98px] ">
        <div className="absolute left-20 lg:left-0 xl:left-20 w-[50%] md:w-[40%] h-full lg:h-[680px] bg-[#FDE4D4] rounded-tl-[180px]  "></div>
        <aside className="z-10 lg:ml-9">
          <div className="flex items-stretch h-[287px]">
            <div className="bg-[#FFF3F2] pl-3 pt-14 pb-12 rounded-tl-[52px] w-[230px] rounded-br-[52px] shadow-lg flex flex-col justify-between">
              <h3 className="text-2xl font-medium mt-4 w-[169px]">Frontal</h3>
              <p className="text-gray-600 mt-2 text-x sm:text-xl">
                We can make frontals for any and every hair type.
              </p>
            </div>
            <Image
              src={frontal}
              alt="frontal"
              width={500}
              height={500}
              className="rounded-bl-[52px] rounded-br-[52px] w-[200px] md:w-[230px] object-cover"
            />
          </div>
          <div className="flex items-stretch h-[287px]">
            <Image
              src={image2}
              alt="Short boho knotless braid"
              width={500}
              height={500}
              className=" rounded-tr-[52px] w-[230px] object-cover"
            />
            <div className="bg-[#FFF3F2] md:pl-3 pr-2 pt-14 pb-12 rounded-tl-[52px] rounded-tr-[52px] w-[200px] md:w-[230px]  shadow-lg flex flex-col justify-between">
              <h3 className="text-2xl font-medium mt-4 w-[169px] px-4">
                Short boho knotless braid
              </h3>
              <p className="text-gray-600 text-x sm:text-xl px-4">
                We do Short boho knotless braid just how you like
              </p>
            </div>
          </div>
        </aside>

        <aside className="z-10">
          <div className="flex items-stretch h-[287px]">
            <div className="bg-[#FFF3F2] pl-3 pt-14 pb-12 rounded-bl-[52px] rounded-br-[52px] w-[230px] shadow-lg flex flex-col justify-between">
              <h3 className="text-2xl font-medium mt-4 w-[169px]">Pony Tail</h3>
              <p className="text-gray-600 mt-2 text-x sm:text-xl">
                We can make Pony Tail just how you like it! to give you that
                extra spark!
              </p>
            </div>
            <Image
              src={ponytail}
              alt="ponytail"
              width={500}
              height={500}
              className="rounded-bl-[52px] rounded-tr-[52px] w-[200px] md:w-[230px] object-cover"
            />
          </div>
          <div className="flex items-stretch h-[287px]">
            <Image
              src={hair7}
              alt="Wig Coloring"
              width={500}
              height={500}
              className=" rounded-tr-[52px] rounded-tl-[52px] w-[230px] object-cover"
            />
            <div className="bg-[#FFF3F2] pl-3 pr-2 pt-14 pb-12 rounded-tl-[52px] w-[230px]  shadow-lg flex flex-col justify-between">
              <h3 className="text-2xl font-medium mt-4 w-[146px]">
                Instant Dreadlock
              </h3>
              <p className="text-gray-600 text-x sm:text-xl">
                We can make instant dreadlocks for any and every hair type.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
};

export default Service;
