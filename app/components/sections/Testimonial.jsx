"use client";
import { useRef } from "react";
import Image from "next/image";
import { icon } from "@/public/images";
import { back, forward } from "@/public/icons";

const testimonials = [
  {
    id: 1,
    text: "I've been coming to Funmight beauty shop for years and I've never been disappointed. The stylists are incredibly talented and always know exactly what to do with my hair. I get so many compliments on my haircuts!",
    name: "Aisha O.",
    location: "Lekki",
    image: icon, 
    stars: 5,
  },
  {
    id: 2,
    text: "I recently had a Brazilian blowout at Funmight and I couldn't be happier with the results. My hair is so smooth and manageable now. I highly recommend this salon for hair treatments.",
    name: "Aisha O.",
    location: "Lekki",
    image: icon,
    stars: 3,
  },
  {
    id: 3,
    text: "I recently had a facial at Funmight and it was amazing. It's so soft and glowing. I'll definitely be back for more treatments.",
    name: "Aisha O.",
    location: "Lekki",
    image: icon,
    stars: 5,
  },
  {
    id: 4,
    text: "I recently had a facial at Funmight and it was amazing. It's so soft and glowing. I'll definitely be back for more treatments.",
    name: "Aisha O.",
    location: "Lekki",
    image: icon,
    stars: 5,
  },
  {
    id: 5,
    text: "I recently had a facial at Funmight and it was amazing. It's so soft and glowing. I'll definitely be back for more treatments.",
    name: "Aisha O.",
    location: "Lekki",
    image: icon,
    stars: 5,
  },
  {
    id: 6,
    text: "I recently had a facial at Funmight and it was amazing. It's so soft and glowing. I'll definitely be back for more treatments.",
    name: "Aisha O.",
    location: "Lekki",
    image: icon,
    stars: 2,
  },
  {
    id: 7,
    text: "I recently had a facial at Funmight and it was amazing. It's so soft and glowing. I'll definitely be back for more treatments.",
    name: "Aisha O.",
    location: "Lekki",
    image: icon,
    stars: 4,
  },
];

const Testimonial = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className=" py-16 md:py-24 lg:py-32 border-b border-[#272424]">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between mb-3 md:mb-5">
          <h2 className="text-2xl md:max-w-[400px] lg:text-3xl lg:max-w-[700px] font-bold mb-10">
            We are the talk of the town for a reason, see what our customers are
            saying about us
          </h2>
          <div className="flex flex-1 items-center self-end md:self-start mt-3 justify-end gap-4 md:gap-8 lg:gap-10 ">
            {/* Left Arrow */}
            <button onClick={() => scroll("left")}>
              <Image src={back} alt="icon" />
            </button>
            {/* Right Arrow */}
            <button onClick={() => scroll("right")}>
              <Image src={forward} alt="icon" />
            </button>
          </div>
        </div>
        <div className="relative flex items-center">
          {/* Testimonial Cards */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto no-scrollbar "
            style={{ scrollSnapType: "x mandatory" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0  w-[350px] lg:w-1/3 lg:min-w-[33.33%] bg-[#FFD4B0] p-6 rounded-lg shadow-md"
              >
                <div className="max-h-[80%]">
                  <p className="text-[#B8336A] font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    “
                  </p>
                  <p className="text-lg italic mb-4">
                    &ldquo; {testimonial.text} &rdquo;
                  </p>
                </div>
                <div className="flex items-center space-x-4 ">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    {/* <p className="text-sm text-primary">
                      {testimonial.location}
                    </p> */}
                    <div className="text-[#B8336A]">
                      {"★".repeat(testimonial.stars)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
