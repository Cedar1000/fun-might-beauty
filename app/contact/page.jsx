import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h3 className="text-gray-600 text-sm mb-2">Contact Us</h3>
        <h2 className="text-4xl font-bold mb-12">We’d love to hear from you</h2>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Visit Us */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <span className="text-red-500 text-3xl">🏢</span>{' '}
              {/* Placeholder icon */}
            </div>
            <h4 className="text-xl font-semibold mb-2">Visit Us</h4>
            <p className="text-gray-500">Visit our HQ</p>
            <p className="text-gray-500 mt-2">Bournemouth, United Kingdom</p>
            {/* <p className="text-gray-500">BH1 1PH</p> */}
          </div>

          {/* Card 2: Check Our Socials */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <span className="text-red-500 text-3xl">🌐</span>{' '}
              {/* Placeholder icon */}
            </div>
            <h4 className="text-xl font-semibold mb-2">Check Our Socials</h4>
            <p className="text-gray-500">Our Socials</p>
            <div className="flex justify-center space-x-4 mt-2">
              <span className="text-2xl">🌐</span> {/* Icon for social links */}
              <span className="text-2xl">📘</span> {/* Example icons */}
              <span className="text-2xl">🎵</span>
            </div>
          </div>

          {/* Card 3: Chat with Us */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <span className="text-red-500 text-3xl">💬</span>{' '}
              {/* Placeholder icon */}
            </div>
            <h4 className="text-xl font-semibold mb-2">Chat with Us</h4>
            <p className="text-gray-500">Visit our HQ</p>
            <p className="text-gray-500 mt-2">info@funmightbeauty.co.uk</p>
          </div>

          {/* Card 4: Call Us */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <span className="text-red-500 text-3xl">📞</span>{' '}
              {/* Placeholder icon */}
            </div>
            <h4 className="text-xl font-semibold mb-2">Call Us</h4>
            <p className="text-gray-500">Visit our HQ</p>
            <p className="text-gray-500 mt-2">+4447867873940</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
