"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { funmight, google } from "@/public/icons";

const Input = ({ label, id, type, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
    />
  </div>
);

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col items-center justify-center w-1/2 bg-pink-100 p-10">
        <Image
          src={funmight}
          alt="FunMight Beauty"
          width={200}
          height={200}
          className="mb-6"
        />
        <h1 className="text-4xl font-bold">FunMight Beauty</h1>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 lg:p-20">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Sign up as Admin</h2>
          <p className="mb-4">
            Sign up with your work google account or use the form
          </p>

          {/* Google Sign Up Button */}
          <button
            type="button"
            className="flex items-center justify-center w-full mb-4 px-4 py-2 border rounded-md hover:bg-gray-100 transition"
          >
            <Image
              src={google}
              alt="Google Icon"
              width={20}
              height={20}
            />
            <span className="ml-2">Sign up Using Google</span>
          </button>

          <div className="text-center my-4">OR</div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <Input
              label="Organization's Email"
              id="email"
              type="email"
              placeholder="FunMight Beauty"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              label="Name"
              id="name"
              type="text"
              placeholder="@funmight.co.uk"
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              label="Password"
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full py-2 bg-orange-300 text-white font-semibold rounded-md hover:bg-orange-400 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center">
            Have an account?{" "}
            <Link href="/signin" className="text-pink-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
