"use client"; // Ensure this is a client component
import { useState, useRef } from "react";


export default function ShipmentMethod() {
  const [selectedMethod, setSelectedMethod] = useState(""); // State for selected shipment method
  const [scheduledDate, setScheduledDate] = useState(""); // State for selected date
  const dateInputRef = useRef(null); // Reference to the date input

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedMethod(value);
    console.log("Selected Method:", value); // Log selected method
    // Reset date when switching to another option
    if (value !== "schedule") {
      setScheduledDate("");
    }
  };

  // Handle click on custom arrow to trigger date input
   const handleDateTriggerClick = () => {
     if (dateInputRef.current && selectedMethod === "schedule") {
       dateInputRef.current.showPicker(); 
     }
   };
  return (
    <div className=" py-4 w-full ">
      <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-6">
        Shipment Method
      </p>

      <div className="">
        {/* Regular Shipment Option */}
        <label className="flex justify-between items-center border p-3 cursor-pointer">
          <div className="flex items-center">
            <input
              type="radio"
              name="shipment"
              value="regular"
              checked={selectedMethod === "regular"}
              onChange={handleChange}
              className="hidden" // Hide the default radio button
            />
            <span
              className={`w-4 h-4 mr-3 rounded-full border-2 ${
                selectedMethod === "regular"
                  ? "border-orange-500"
                  : "border-gray-400"
              } flex items-center justify-center`}
            >
              {selectedMethod === "regular" && (
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              )}
            </span>
            <span>
              <strong>£10</strong> Regular Shipment
            </span>
          </div>
          <span className="text-primary">
            <strong>01 Feb, 2023</strong>
          </span>
        </label>

        {/* Priority Shipping Option */}
        <label className="flex justify-between items-center border  p-3 cursor-pointer">
          <div className="flex items-center">
            <input
              type="radio"
              name="shipment"
              value="priority"
              checked={selectedMethod === "priority"}
              onChange={handleChange}
              className="hidden" // Hide the default radio button
            />
            <span
              className={`w-4 h-4 mr-3 rounded-full border-2 ${
                selectedMethod === "priority"
                  ? "border-orange-500"
                  : "border-gray-400"
              } flex items-center justify-center`}
            >
              {selectedMethod === "priority" && (
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              )}
            </span>
            <span>
              <strong>£15</strong> Priority Shipping
            </span>
          </div>
          <span className="text-primary">
            <strong>28 Jan, 2023</strong>
          </span>
        </label>

        {/* Schedule Option */}
        <label className="flex justify-between items-center border  p-3 cursor-pointer">
          <div className="flex items-center">
            <input
              type="radio"
              name="shipment"
              value="schedule"
              checked={selectedMethod === "schedule"}
              onChange={handleChange}
              className="hidden" // Hide the default radio button
            />
            <span
              className={`w-4 h-4 mr-3 rounded-full border-2 ${
                selectedMethod === "schedule"
                  ? "border-orange-500"
                  : "border-gray-400"
              } flex items-center justify-center`}
            >
              {selectedMethod === "schedule" && (
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              )}
            </span>
            <span>Schedule</span>
            <span className="text-gray-500 ml-2">
              Choose a date that works for you.
            </span>
          </div>
          <div className="relative">
            <input
              type="date"
              ref={dateInputRef} // Attach the reference to the input
              name="scheduleDate"
              disabled={selectedMethod !== "schedule"}
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              className={`date-input border border-gray-300 p-2 rounded-md text-gray-600 w-40 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                selectedMethod !== "schedule"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            />
            {/* Custom Dropdown icon for the date selection */}
            <div
              className="absolute top-4 right-3 cursor-pointer"
              onClick={handleDateTriggerClick} // Trigger date input on SVG click
            >
              <svg
                className="w-4 h-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </label>

        {/* Pickup Option */}
        <label className="flex justify-between items-center border  p-3 cursor-pointer">
          <div className="flex items-center">
            <input
              type="radio"
              name="shipment"
              value="pickup"
              checked={selectedMethod === "pickup"}
              onChange={handleChange}
              className="hidden" // Hide the default radio button
            />
            <span
              className={`w-4 h-4 mr-3 rounded-full border-2 ${
                selectedMethod === "pickup"
                  ? "border-orange-500"
                  : "border-gray-400"
              } flex items-center justify-center`}
            >
              {selectedMethod === "pickup" && (
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              )}
            </span>
            <span>
              Use or pick up product when you come for your appointment
            </span>
          </div>
        </label>
      </div>
    </div>
  );
}
