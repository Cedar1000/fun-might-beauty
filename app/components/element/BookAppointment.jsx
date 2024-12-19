'use client';

import { PopupButton } from 'react-calendly';
import { useEffect, useState } from 'react';

const BookAppointment = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    // Set rootElement only on the client-side (browser)
    if (typeof window !== 'undefined') {
      setRootElement(document.getElementById('__next'));
    }
  }, []);

  return (
    // Conditionally render PopupButton only if rootElement is defined (client-side)
    rootElement && (
      <PopupButton
        url="https://calendly.com/funmightbeauty-info"
        rootElement={rootElement}
        text="Book an Appointment"
        className="px-6 py-4 font-normal text-base h-fit rounded-xl bg-[#E9A163] hover:bg-opacity-50"
      />
    )
  );
};

export default BookAppointment;
