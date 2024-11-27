"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { funmight, google, apple } from "@/public/icons";

// Reusable Input component
const Input = ({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  extraContent,
}) => (
  <div className="mb-4 relative ">
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
    {extraContent && (
      <div className="absolute top-[75%] right-3 transform -translate-y-1/2">
        {extraContent}
      </div>
    )}
  </div>
);

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Handle sign-in logic here
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
          <h2 className="text-2xl font-semibold mb-6">Welcome Back</h2>
          <p className="mb-4">Welcome back! please enter your details.</p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <Input
              label="Organization's Email"
              id="email"
              type="email"
              placeholder="@funmight.co.uk"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              label="Password"
              id="password"
              type={showPassword ? "text" : "password"} // Toggle between text and password type
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              extraContent={
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              }
            />

            <div className="flex justify-between mb-4">
              <div></div>
              <Link href="/forgot-password" className="text-sm text-gray-500">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-orange-300 text-white font-semibold rounded-md hover:bg-orange-400 transition"
            >
              Sign In
            </button>
          </form>

          <div className="text-center my-4">OR</div>

          {/* Google and Apple Sign In Buttons */}
          <button
            type="button"
            className="flex items-center justify-center gap-x-12 w-full mb-4 px-4 py-2 border rounded-md hover:bg-gray-100 transition"
          >
            <Image src={google} alt="Google Icon" width={20} height={20} />
            <span className="ml-2">Continue Using Google</span>
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-x-12 w-full px-4 py-2 border rounded-md hover:bg-gray-100 transition"
          >
            <Image src={apple} alt="Apple Icon" width={20} height={20} />
            <span className="ml-2">Continue Using Apple</span>
          </button>

          <p className="mt-6 text-center">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-pink-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
