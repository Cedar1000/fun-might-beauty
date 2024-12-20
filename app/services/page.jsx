'use client';
import ServiceCard from './components/ServiceCard';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import {
  hair2,
  hair3,
  hair7,
  image4,
  frontal,
  ponytail,
  service4,
  kinkybraide,
  bigGhanaWeaving,
} from '@/public/images';

const BookAppointment = dynamic(
  () => import('../components/element/BookAppointment'),
  {
    ssr: false,
  }
);

const Services = () => {
  const services = [
    {
      image: kinkybraide,
      title: 'Kinky Braid',
      description:
        'There are many braiding and Ghana weaving styles and guess what? We can make them all.',
      priceItems: [
        { label: 'Ghana Weaves (Starting from)', price: '£150+' },
        { label: 'Braiding (Starting from)', price: '£150+' },
      ],
    },
    {
      image: bigGhanaWeaving,
      title: 'Big Ghana Weaving',
      description:
        'There are many frontal and Ghana weaving wigs and guess what? We can create them all.',
      priceItems: [
        { label: 'Wig Installation', price: '£150+' },
        { label: 'Wigging', price: '£150+' },
        { label: 'Hair Resampling', price: '£150+' },
      ],
    },

    {
      image: frontal,
      title: 'Frontal',
      description:
        'We make the best frontals styles to give you that spark you are looking for!.',
      priceItems: [
        { label: 'Frontal (Starting from)', price: '£150+' },
        { label: 'Braiding (Starting from)', price: '£150+' },
      ],
    },

    {
      image: ponytail,
      title: 'Pony Tail',
      description:
        'We can make Pony Tail just how you like it! to give you that extra spark!',
      priceItems: [
        { label: 'Frontal (Starting from)', price: '£150+' },
        { label: 'Braiding (Starting from)', price: '£150+' },
      ],
    },

    {
      image: hair7,
      title: 'Instant Dreadlock',
      description:
        'We can make instant dreadlocks for any and every hair type.',
      priceItems: [
        { label: 'Frontal (Starting from)', price: '£150+' },
        { label: 'Braiding (Starting from)', price: '£150+' },
      ],
    },

    {
      image: hair2,
      title: 'Crochet',
      description:
        'Crochet braids are a versatile and stylish protective hairstyle. Our skilled stylists can create a variety of looks, from simple to intricate, to suit your personal style.',
      priceItems: [
        { label: 'Frontal (Starting from)', price: '£150+' },
        { label: 'Braiding (Starting from)', price: '£150+' },
      ],
    },

    {
      image: hair3,
      title: 'Artificial Dread',
      description:
        'Artificial dreadlocks offer a low-maintenance, edgy look. Our stylists can create natural-looking dreadlocks in various lengths, colors, and textures.',
      priceItems: [
        { label: 'Frontal (Starting from)', price: '£150+' },
        { label: 'Braiding (Starting from)', price: '£150+' },
      ],
    },

    {
      image: image4,
      title: 'Cornrow Hairstyle',
      description:
        'Cornrow hairstyles are a classic protective style that can be customized to suit any occasion. Our expert braiders can create intricate patterns and designs.',
      priceItems: [
        { label: 'Frontal (Starting from)', price: '£150+' },
        { label: 'Braiding (Starting from)', price: '£150+' },
      ],
    },
  ];

  return (
    <section>
      <section className="bg-white border-b-2 border-[#272424] py-12 md:py-24 lg:py-28 md:px-20 px-9 lg:px-[100px] flex flex-col  lg:flex-row-reverse items-center gap-20 xl:gap-28 md:justify-between">
        {/* Images Section */}
        <div className=" mt-8 flex-1 xl:flex-none md:mt-0 grid">
          <div className="">
            <Image
              src={service4}
              alt="Service 4"
              width={500}
              // height={234}
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
          <BookAppointment />

          <div id="__next"></div>
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
