'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { menu, close, logo, cart, search, profile } from '@/public/icons';

import { useCart } from '@/context/cartContext';

const BookAppointment = dynamic(
  () => import('../element/BookAppointment.jsx'),
  {
    ssr: false,
  }
);

const Nav = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const pathname = usePathname();

  const { count } = useCart();

  const toggleSideNav = () => {
    setShowSideNav((prev) => !prev);
  };

  const isProductRoute = pathname.startsWith('/product');
  const shouldDisplayNavAndFooter =
    pathname.startsWith('/signin') || pathname.startsWith('/signup');

  return (
    <nav
      className={`md:text-xl text-[#272424] md:px-9 px-4 lg:px-[100px] ${
        pathname === '/' ? 'bg-[#FEEDEC]' : 'bg-white bg-opacity-50 '
      } ${shouldDisplayNavAndFooter ? 'hidden' : ''} `}
    >
      <div
        className={`flex justify-between items-center ${
          isProductRoute ? 'py-4' : 'p-4'
        } `}
      >
        <div>
          <Image src={logo} alt="logo" width={56} height={56} />
        </div>

        <ul className="hidden lg:flex items-center gap-4">
          <li
            className={`hover:font-bold cursor-pointer ${
              pathname === '/' ? 'font-bold' : ''
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`hover:font-bold cursor-pointer ${
              pathname === '/services' ? 'font-bold' : ''
            }`}
          >
            <Link href="/services">Services</Link>
          </li>
          <li
            className={`hover:font-bold cursor-pointer ${
              pathname === '/about' ? 'font-bold' : ''
            }`}
          >
            <Link href="/about">About Us</Link>
          </li>
          <li
            className={`hover:font-bold cursor-pointer ${
              pathname === '/contact' ? 'font-bold' : ''
            }`}
          >
            <Link href="/contact">Contact Us</Link>
          </li>
          <li
            className={`hover:font-bold cursor-pointer ${
              isProductRoute ? 'font-bold' : ''
            }`}
          >
            <Link href="/product">Product</Link>
          </li>
        </ul>
        <div className="md:flex items-center gap-4 hidden">
          {isProductRoute && (
            <div>
              {count > 0 && (
                <span className="top-[-10px] text-xs p-[10px] relative top-2 float-right bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center">
                  {' '}
                  {count}
                </span>
              )}

              <div className="flex items-center gap-4">
                <Image src={search} alt="logo" width={24} height={24} />
                <Image src={profile} alt="logo" width={24} height={24} />

                <Link href="/cart">
                  <Image src={cart} alt="logo" width={24} height={24} />
                </Link>
              </div>
            </div>
          )}

          <div
            className={`px-6 py-4 hidden xl:block ${
              isProductRoute ? 'hidden xl:hidden' : ''
            } font-normal text-base`}
          >
            <BookAppointment />
            <div id="__next"></div>
          </div>
        </div>

        <button
          className="lg:hidden z-20"
          onClick={toggleSideNav}
          aria-label="Toggle menu"
        >
          <Image src={menu} alt="menu" width={35} height={35} />
        </button>
      </div>

      {showSideNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-40"
          onClick={toggleSideNav}
        >
          <div
            className={`fixed top-0 right-0 w-full h-full sm:w-96 z-50 ${
              isProductRoute ? 'px-4' : 'px-6'
            }  grid`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4"
              onClick={toggleSideNav}
              aria-label="Close menu"
            >
              <Image src={close} alt="close" width={35} height={35} />
            </button>
            <div aria-hidden="true"></div>
            <ul className="flex flex-col text-white items-center gap-8 text-xl">
              <li
                className={`hover:font-bold cursor-pointer ${
                  pathname === '/' ? 'font-bold' : ''
                }`}
                onClick={toggleSideNav}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`hover:font-bold cursor-pointer ${
                  pathname === '/services' ? 'font-bold' : ''
                }`}
                onClick={toggleSideNav}
              >
                <Link href="/services">Services</Link>
              </li>
              <li
                className={`hover:font-bold cursor-pointer ${
                  pathname === '/about' ? 'font-bold' : ''
                }`}
                onClick={toggleSideNav}
              >
                <Link href="/about">About Us</Link>
              </li>
              <li
                className={`hover:font-bold cursor-pointer ${
                  pathname === '/contact' ? 'font-bold' : ''
                }`}
                onClick={toggleSideNav}
              >
                <Link href="/contact">Contact Us</Link>
              </li>
              <li
                className={`hover:font-bold cursor-pointer ${
                  isProductRoute ? 'font-bold' : ''
                }`}
                onClick={toggleSideNav}
              >
                <Link href="/product">Product</Link>
              </li>
            </ul>

            <div id="__next">
              <BookAppointment />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
