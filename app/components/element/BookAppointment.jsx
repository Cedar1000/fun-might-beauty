'use client';

import Button from './Button';

import { PopupButton } from 'react-calendly';

import { useEffect, useState } from 'react';

const BookAppointment = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    // Wait for the component to be mounted before setting the rootElement
    if (typeof window !== 'undefined') {
      setRootElement(document.getElementById('__next'));
    }
  }, []);

  return (
    <PopupButton
      url="https://calendly.com/funmightbeauty-info"
      rootElement={rootElement}
      text="Book an Appointment"
      className="px-6 py-4 font-normal text-base h-fit rounded-xl bg-[#E9A163] hover:bg-opacity-50"
    />
  );
};

export default BookAppointment;
