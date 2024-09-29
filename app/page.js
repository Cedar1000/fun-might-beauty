import Image from "next/image";
import { banner } from "@/public/images";
import Nav from "./components/layout/Nav";
import Button from "./components/element/Button";
import Service from "./components/sections/Service";
import Products from "./components/sections/ProductSection";
import WorkingHours from "./components/sections/WorkHours";
import Testimonial from "./components/sections/Testimonial";
import FeaturedGallery from "./components/sections/Gallery";

export default function Home() {
  return (
    <div className="bg-[#FEEDEC]">
      {/* Hero Section */}
      <section className="md:flex flex-row-reverse justify-between items-center px-8 py-12 md:pb-0 lg:mx-14 xl:ml-[125px] xl:mr-[125px]">
        <div className="relative  w-72 h-96 md:w-[350px] md:h-[500px]">
          <Image src={banner} alt="Beauty" layout="fill" className=" " />
        </div>
        <div className="mt-5 md:mt-0 self-start">
          <h1 className="text-6xl md:7xl lg:text-8xl xl:text-9xl font-medium text-[#272424]">
            FunMight Beauty
          </h1>
          <p className="text-3xl text-[#E9A163] pt-4 md:pt-10 ">
            Bringing your beauty to life
          </p>
          <p className="text-xl font-light md:w-[310px] text-[#272424] mb-8">
            Experience personalized beauty treatments tailored to your needs
          </p>
          <Button className="px-6 py-4 ">Book an Appointment</Button>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="relative py-12 px-8 md:pt-14 md:pb-28 border-[#272424] border-b border-t"
      >
        <div className="absolute inset-0 flex justify-center items-center opacity-[7%]">
          <h2 className="text-5xl lg:text-9xl font-bold text-[#EDB88B]">
            FunMight
          </h2>
        </div>
        <div className="">
          <h2 className="text-4xl font-bold text-[#0D0F66] mb-4 md:text-center  ">
            Our Mission
          </h2>
          <p className=" text-gray-600  md:text-2xl md:ml-6 lg:ml-12 xl:ml-[134px] xl:mr-[146px] ">
            <strong className="text-2xl lg:text-5xl">“</strong>We are dedicated
            to providing high-quality , tailored hair services, focusing on
            achieving complete customer satisfaction and showcasing creativity
            in every hairstyle we deliver.
            <strong className="text-2xl lg:text-5xl">”</strong>
          </p>
        </div>
      </section>
      {/* Services Section */}
      <div>
        <Service />
      </div>
      {/* Product Section */}
      <div>
        <Products />
      </div>
      {/* Working Section */}
      <div>
        <WorkingHours />
      </div>
      {/* Testimonial Section */}
      <div>
        <Testimonial />
      </div>
      {/* Featured Gallery Section */}
      <div>
        <FeaturedGallery />
      </div>
    </div>
  );
}
