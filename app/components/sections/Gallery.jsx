"use client";

import React from "react";
import { Image as AntImage } from "antd";
import {
  hair1,
  hair2,
  hair3,
  hair4,
  hair5,
  hair6,
  hair7,
} from "@/public/images";

const galleryImages = [
  {
    id: 1,
    src: "/images/hair1.jpg",
    alt: "Hairstyle 1",
  },
  {
    id: 2,
    src: "/images/hair2.jpg",
    alt: "Hairstyle 2",
  },
  {
    id: 3,
    src: "/images/hair7.jpg",
    alt: "Hairstyle 3",
  },
  {
    id: 4,
    src: "/images/hair4.jpg",
    alt: "Hairstyle 4",
  },
  {
    id: 5,
    src: "/images/hair5.jpg",
    alt: "Hairstyle 5",
  },
  {
    id: 6,
    src: "/images/hair6.jpg",
    alt: "Hairstyle 6",
  },
  {
    id: 7,
    src: "/images/hair3.jpg",
    alt: "Hairstyle 7",
  },
];

const FeaturedGallery = () => {
  // Placeholder for scalability
  const isLoading = false; // Example loading state
  const isError = false; // Example error state

  const skeletonArray = new Array(8).fill(0);

  if (isLoading) {
    return (
      <section className="py-12 md:pt-[78px] md:pb-28 px-4 md:px-10 lg:px-12 xl:px-[76px]">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#191919] mb-[14px]">
          Featured Gallery
        </h2>
        <p className="text-center text-lg md:text-xl lg:text-2xl max-w-[630px] mx-auto text-primary mb-8 md:mb-[92px]">
          Browse through our collection and you might just find some inspo for
          your next hairdo
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skeletonArray.map((_, index) => (
            <div
              key={index}
              className="w-full h-[350px] bg-gray-200 animate-pulse rounded-lg"
            />
          ))}
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-xl py-16">
        Failed to load featured gallery
      </p>
    );
  }

  if (galleryImages.length === 0) {
    return (
      <section className="py-12 md:pt-[78px] md:pb-28 px-4 md:px-10 lg:px-12 xl:px-[76px]">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#191919] mb-[14px]">
          Featured Gallery
        </h2>
        <p className="text-center text-lg md:text-xl lg:text-2xl max-w-[630px] mx-auto text-primary mb-8 md:mb-[92px]">
          Browse through our collection and you might just find some inspo for
          your next hairdo
        </p>
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-5xl">No images yet</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:pt-[78px] md:pb-28 px-4 md:px-10 lg:px-12 xl:px-[76px]">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#191919] mb-[14px]">
        Featured Gallery
      </h2>
      <p className="text-center text-lg md:text-xl lg:text-2xl max-w-[630px] mx-auto text-primary mb-8 md:mb-[92px]">
        Browse through our collection and you might just find some inspo for
        your next hairdo
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <AntImage.PreviewGroup>
          {galleryImages.map((image) => (
            <AntImage
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={350}
              height={350}
              className="transition-transform duration-300 transform group-hover:scale-110 cursor-pointer rounded-lg"
            />
          ))}
        </AntImage.PreviewGroup>
      </div>
    </section>
  );
};

export default FeaturedGallery;
