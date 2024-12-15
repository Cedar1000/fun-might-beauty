import Image from 'next/image';
import {
  hair1,
  hair2,
  hair3,
  hair4,
  hair5,
  hair6,
  hair7,
} from '@/public/images';

const galleryImages = [
  {
    id: 1,
    src: hair1,
    alt: 'Hairstyle 1',
  },
  {
    id: 2,
    src: hair2,
    alt: 'Hairstyle 2',
  },
  {
    id: 3,
    src: hair7,
    alt: 'Hairstyle 3',
  },
  {
    id: 4,
    src: hair4,
    alt: 'Hairstyle 4',
  },
  {
    id: 5,
    src: hair5,
    alt: 'Hairstyle 5',
  },
  {
    id: 6,
    src: hair6,
    alt: 'Hairstyle 6',
  },
  {
    id: 7,
    src: hair3,
    alt: 'Hairstyle 7',
  },
];

const FeaturedGallery = () => {
  return (
    <div className="py-12 md:pt-[78px] md:pb-28 px-4 md:px-10 lg:px-12 xl:px-[76px]">
      <div className="">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#191919] mb-[14px]">
          Featured Gallery
        </h2>
        <p className="text-center text-lg md:text-xl lg:text-2xl max-w-[630px] mx-auto text-primary mb-8 md:mb-[92px]">
          Browse through our collection and you might just find some inspo for
          your next hairdo
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative"
              style={{ height: '350px' }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        {/* <div className="flex flex-wrap justify-center gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative h-80 w-[calc(35%-1rem)] md:w-[calc(27%-1rem)] lg:w-[calc(25%-1rem)] flex-grow ${
                index % 4 === 0 ? "ml-0" : ""
              }`}
              
            >
              <Image
                src={image.src}
                alt={image.alt}
                font-bold"fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedGallery;
