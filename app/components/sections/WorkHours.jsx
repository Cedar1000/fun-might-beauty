'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import { workingImage } from '@/public/images';

import { PopupButton } from 'react-calendly';

import Button from '@/app/components/element/Button';

import Script from 'next/script';

const WorkingHours = ({ className, imageClass, dimension }) => {
  return (
    <section className="py-[90px] border-b border-t border-[#272424]  relative md:px-10 lg:px-16 xl:px-24">
      <div className=" flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto px-4 ">
        {/* Left side: Image with background shape */}
        <div className={` w-full md:w-1/2  ${imageClass}`}>
          {/* Background shape */}
          <div
            className={`absolute left-7 top-16 lg:left-16 lg:top-14 xl:left-40 w-[50%] md:w-[200px] md:h-[85%] lg:w-[220px] xl:w-[15%] bg-[#FDE4D4] rounded-tl-[100px] lg:rounded-tl-[130px] ${className}  `}
          ></div>

          <Image
            src={workingImage}
            alt="Working Hours"
            width={400}
            height={400}
            className={`relative z-10 rounded-lg md:rounded-none md:ml-6 lg:ml-0 xl:ml-16 object-cover md:w-[300px] md:h-[320px] ${dimension} `}
          />
        </div>

        {/* Right side: Working Hours info */}
        <div className="w-full md:w-1/2    rounded-md p-6  text-center md:text-left">
          <div className="bg-[#FFE5E4] py-7 px-8 rounded-lg">
            <h3 className="text-3xl lg:text-5xl  font-semibold text-primary mb-4 text-center">
              Working Hours
            </h3>
            <p className="text-lg lg:text-xl text-primary mb-6 text-center">
              Our Working Hours are flexible and convenient
            </p>

            {/* Working Hours Table */}
            <div className="text-primary text-lg md:text-xl lg:text-2xl ">
              <div className="flex justify-between py-2 border-b-2 border-primary">
                <span>Mon to Thu </span>
                <span>7am - 10pm</span>
              </div>
              <div className="flex justify-between py-2 border-b-2 border-primary">
                <span>Fridays </span>
                <span>7am - 1pm</span>
              </div>
              <div className="flex justify-between py-2 border-b-2 border-primary">
                <span>Sat and Sun </span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 grid justify-items-center ">
            <Button className="px-6 py-4 font-normal text-base">
              Book an Appointment
            </Button>

            <PopupButton
              url="https://calendly.com/funmightbeauty-info"
              rootElement={document.getElementById('__next')}
              text="Click here to schedule!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;
