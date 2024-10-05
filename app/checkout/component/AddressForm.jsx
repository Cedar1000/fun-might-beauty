"use client";

import InputField from "@/app/components/element/InputField";
import { useState, useCallback } from "react";


const AddressForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91", 
    phoneNumber: "",
    address: "",
    flatNo: "",
    city: "",
    state: "",
    postalCode: "",
    landmark: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

    const fullPhoneNumber = formData.countryCode + formData.phoneNumber;

    const finalFormData = {
      ...formData,
      phoneNumber: fullPhoneNumber, // Overwrite phoneNumber with full phone number
    };

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mb-6">
        <InputField
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          label="First Name"
        />
        <InputField
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          label="Last Name"
        />
      </div>
      <InputField
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        label="Email"
      />
      <label
        htmlFor="phone"
        className="block text-gray-700 mb-1 mt-5 font-medium"
      >
        Phone Number
      </label>
      <div className="flex mb-4">
        {/* Country Code Dropdown */}
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          className="border border-gray-300 rounded-l-md p-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="+91">+91</option>
          <option value="+1">+1</option>
          <option value="+44">+44</option>
        </select>

        {/* Phone Number Input */}
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="border border-l-0 border-gray-300 rounded-r-md p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter phone number"
        />
      </div>

      <h2 className="text-xl font-semibold mb-6 mt-10 md:mt-16 lg:mt-20">
        Shipping Details
      </h2>
      <div className="grid grid-cols-1 mt-3 gap-4 mb-6">
        <InputField
          name="flatNo"
          type="text"
          value={formData.flatNo}
          onChange={handleChange}
          label="Flat/House no."
        />
        <InputField
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          label="Address"
        />
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          <InputField
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            label="City"
          />
          <InputField
            name="state"
            type="text"
            value={formData.state}
            onChange={handleChange}
            label="State"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-5 md:gap-6 lg:gap-8">
          <InputField
            name="postalCode"
            type="text"
            value={formData.postalCode}
            onChange={handleChange}
            label="Postal Code"
          />
          <InputField
            name="landmark"
            type="text"
            value={formData.landmark}
            onChange={handleChange}
            label="Famous Landmark"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input type="checkbox" className="mr-2" id="save-info" />
        <label htmlFor="save-info">Save this information for next time</label>
      </div>
    </div>
  );
};

export default AddressForm;
