import React from 'react'
import Image from "next/image";
import { image1, image2, image3, image4, team1, team2 } from "@/public/images";
import WorkingHours from '../components/sections/WorkHours';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValueSection';
import LocationSection from './components/LocationSection';

const AboutUs = () => {
   const teamMembers = [
     {
       id: 1,
       name: "Miss Funbright",
       title: "CEO and Head Stylist",
       image: team1,
     },
     {
       id: 2,
       name: "Miss Funbright",
       title: "CEO and Head Stylist",
       image: team2,
     },
   ];

   const coreValues = [
     "Customer Satisfaction",
     "Creativity",
     "Quality",
     "Inclusivity",
     "Passion",
     "Integrity",
     "Professionalism",
     "Innovation",
   ];
  return (
    <div className="">
      <section className="bg-white border-b-2 border-[#272424] py-12 md:py-24 lg:py-28 md:px-20 px-9 lg:px-[100px] text-center">
        <h1 className="text-[#E9A163] md:text-4xl lg:text-6xl xl:text-7xl">
          Bringing your beauty to life
        </h1>
        <p className="text-[#272424] md:text-2xl mt-8">
          &ldquo; At funMight Beauty, we&apos;re committed to providing
          exceptional beauty services and creating a relaxing and welcoming
          atmosphere. &rdquo;
        </p>
      </section>
      <section
        id="mission"
        className="relative bg-[#FEEDEC] py-12 px-8 md:pt-14 md:pb-28 border-[#272424] border-b border-t"
      >
        <div className="absolute inset-0 flex justify-center items-center opacity-[7%]">
          <h2 className="text-5xl lg:text-9xl font-bold text-[#EDB88B]">
            FunMight
          </h2>
        </div>
        <div className="">
          <h2 className="text-4xl font-bold text-primary mb-4 md:mb-10 lg:mb-[72px] md:text-center  ">
            Our Mission Here at Funbright
          </h2>
          <p className=" text-primary  md:text-2xl md:ml-6 lg:ml-12 xl:ml-[134px] xl:mr-[146px] ">
            <strong className="text-2xl lg:text-5xl">“</strong>We are dedicated
            to providing high-quality , tailored hair services, focusing on
            achieving complete customer satisfaction and showcasing creativity
            in every hairstyle we deliver.
            <strong className="text-2xl lg:text-5xl">”</strong>
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:pb-24 xl:mx-24 px-2 md:px-8 relative">
        <div className="md:text-center px-4 md-px-0 mb-12">
          <h2 className="text-4xl font-bold text-primary">Our Services</h2>
        </div>

        <section className="grid lg:flex  relative justify-center mt-[98px] ">
          <aside className="">
            <div className="flex items-stretch h-[287px]">
              <div className="bg-[#FFF3F2] pl-3 pt-14 pb-12  w-[230px] rounded-br-[52px] shadow-lg flex flex-col justify-between">
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
                className="rounded-bl-[52px] lg:rounded-br-[52px] w-[200px] md:w-[230px] object-cover"
              />
            </div>
            <div className="flex items-stretch h-[287px]">
              <Image
                src={image3}
                alt="Wig Insallation"
                width={500}
                height={500}
                className=" rounded-tr-[52px] w-[230px] object-cover"
              />
              <div className="bg-[#FFF3F2] md:pl-3 pr-2 pt-14 pb-12 rounded-tl-[52px] lg:rounded-tr-[52px] w-[200px] md:w-[230px]  shadow-lg flex flex-col justify-between">
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
            <div className="flex items-stretch h-[287px]">
              <div className="bg-[#FFF3F2] pl-3 pt-14 pb-12 lg:rounded-bl-[52px] rounded-br-[52px] w-[230px] shadow-lg flex flex-col justify-between">
                <h3 className="text-2xl font-medium mt-4 w-[169px]">
                  Braiding
                </h3>
                <p className="text-gray-600 mt-2 text-xl">
                  There are many braiding styles and options and guess what we
                  can make them all
                </p>
              </div>
              <Image
                src={image2}
                alt="Braiding"
                width={500}
                height={500}
                className="rounded-bl-[52px] w-[200px] md:w-[230px] object-cover"
              />
            </div>
            <div className="flex items-stretch h-[287px]">
              <Image
                src={image4}
                alt="Wig Coloring"
                width={500}
                height={500}
                className=" rounded-tr-[52px] lg:rounded-tl-[52px] w-[230px] object-cover"
              />
              <div className="bg-[#FFF3F2] pl-3 pr-2 pt-14 pb-12 rounded-tl-[52px] w-[230px]  shadow-lg flex flex-col justify-between">
                <h3 className="text-2xl font-medium mt-4 w-[146px]">
                  Wig Coloring
                </h3>
                <p className="text-gray-600 text-xl">
                  We bleach and tint wigs for different looks. Can also be
                  custom made.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </section>
      {/* Working Hours */}
      <div className="bg-[#FFF3F2]">
        <WorkingHours
          className={`hidden`}
          dimension={`lg:w-[400px] lg:h-[428px]`}
        />
      </div>
      {/* Team */}
      <TeamSection members={teamMembers} />

      {/* Values */}
      <ValuesSection values={coreValues} />

      {/* Location */}
      <LocationSection />
    </div>
  );
}

export default AboutUs