import Link from "next/link";
import Image from "next/image";
import { logo, instagram, facebook, tiktok } from "@/public/icons";
import Button from "../element/Button";
export default function Footer() {
  return (
    <footer className="bg-[#232121] text-[#FFF3F2] py-[47px] md:px-9 px-4 lg:px-[100px]">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-10 lg:gap-20 xl:gap-[86px] items-center">
        {/* Logo and Description */}
        <div className="col-span-1 flex flex-col items-start">
          <Image src={logo} alt="logo" width={56} height={56} />
          <h2 className=" font-semibold">FunNight Beauty</h2>
          <p className="mt-2 text-sm">We bring your beauty to life...</p>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <p className="text-lg font-bold pb-4 md:pb-6">Contact Us</p>
          <p>Our Socials</p>
          <div className="flex space-x-4 mt-2">
            {/* Social Icons */}
            <a href="#" className=" hover:text-white">
              <Image src={instagram} alt="Ig-logo" width={24} height={24} />
            </a>
            <a href="#" className=" hover:text-white">
              <Image src={facebook} alt="fb-logo" width={24} height={24} />
            </a>
            <a href="#" className=" hover:text-white">
              <Image src={tiktok} alt="tiktok-logo" width={24} height={24} />
            </a>
          </div>
          <p className="mt-4 ">
            Email
            <span className="block text-sm mt-2">funbnight@gmail.com</span>
          </p>
          <p className="mt-4 ">
            Phone
            <span className="block text-sm mt-2">+234 6778948399</span>
          </p>
        </div>

        {/* Pages */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold  pb-4 md:pb-6">Pages</h3>
          <ul className="grid items-center gap-4">
            <li className={`hover:font-bold cursor-pointer `}>
              <Link href="/">Landing Page</Link>
            </li>
            <li className={`hover:font-bold cursor-pointer `}>
              <Link href="/product">Products</Link>
            </li>
            <li className={`hover:font-bold cursor-pointer`}>
              <Link href="/about">About Us</Link>
            </li>
            <li className={`hover:font-bold cursor-pointer `}>
              <Link href="#">Book an Appointment</Link>
            </li>
            {/* <li className={`hover:font-bold cursor-pointer `}>
              <Link href="/contact">Contact Us</Link>
            </li> */}
            <li className={`hover:font-bold cursor-pointer `}>
              <Link href="/services">Our Services</Link>
            </li>
          </ul>
        </div>

        {/* Book an Appointment */}
        <div className="col-span-1">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Book An Appointment
          </h3>
          <p className="mb-6">
            Book your next appointment online, our online booking is fast and
            available 24/7. Book now and get ready to look and feel your best.
          </p>
          <Button className="px-6 py-4 font-normal text-base text-[#4F4444]">
            Book an Appointment
          </Button>
        </div>
      </div>
    </footer>
  );
}
