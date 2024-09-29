"use client";
import ServiceCard from "./components/ServiceCard";
import Image from "next/image";
import { image, image1, service1, service2, service3, service4 } from "@/public/images";
import Button from "../components/element/Button";


const Services = () => {
  const services = [
    {
      image: image,
      title: "Braiding and Weaving",
      description:
        "There are many braiding and Ghana weaving styles and guess what? We can make them all.",
      priceItems: [
        { label: "Ghana Weaves (Starting from)", price: "£150+" },
        { label: "Braiding (Starting from)", price: "£150+" },
      ],
    },
    {
      image: image1,
      title: "Wigging and Installation",
      description:
        "There are many frontal and Ghana weaving wigs and guess what? We can create them all.",
      priceItems: [
        { label: "Wig Installation", price: "£150+" },
        { label: "Wigging", price: "£150+" },
        { label: "Hair Resampling", price: "£150+" },
      ],
    },
    {
      image: image,
      title: "Coloring",
      description:
        "We are experts in various approaches to give you new hair color, highlights, bolder colors, lived-in color, or balayage, with a multi-dimensional color.",
      priceItems: [
        { label: "Bleaching", price: "£150+" },
        { label: "Tinting", price: "£150+" },
      ],
    },
    {
      image: image,
      title: "Instant Dreads",
      description:
        "We are able to make any hair type into dreadlocks instantly. Start your loc journey with us.",
      priceItems: [
        { label: "Bleaching", price: "£150+" },
        { label: "Tinting", price: "£150+" },
      ],
    },
    {
      image: image1,
      title: "Jerry Curls and Ponytails",
      description: "We do trendy curls and ponytails.",
      priceItems: [
        { label: "Ponytails", price: "£150+" },
        { label: "Jerry Curls", price: "£150+" },
      ],
    },
  ];

  return (
    <section>
      <section className="bg-white border-b-2 border-[#272424] py-12 md:py-24 lg:py-28 md:px-20 px-9 lg:px-[100px] flex flex-col  lg:flex-row-reverse items-center gap-20 xl:gap-28 md:justify-between">
        {/* Images Section */}
        <div className=" mt-8 flex-1 xl:flex-none md:mt-0 grid grid-cols-2">
          <div className="">
            <Image
              src={service1}
              alt="Service 1"
              width={280}
              height={234}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="">
            <Image
              src={service2}
              alt="Service 2"
              width={280}
              height={234}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="">
            <Image
              src={service3}
              alt="Service 3"
              width={280}
              height={234}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="">
            <Image
              src={service4}
              alt="Service 4"
              width={280}
              height={234}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold mb-4 md:mb-8 lg:mb-11">
            Check out our services
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-[26px] text-[#272424] mb-6 md:mb-12 lg:mb-16">
            Get ready to fall in love with your new look with our high-quality
            and well-tailored salon services designed to bring your personal
            beauty to life.
          </p>
          <Button className="px-6 py-4 font-normal text-base ">
            Book an Appointment
          </Button>
        </div>

      </section>

      <section className="container mx-auto py-12 md:px-20 px-9 lg:px-[100px]">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            priceItems={service.priceItems}
          />
        ))}
      </section>
    </section>
  );
};

export default Services;
