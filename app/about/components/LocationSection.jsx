const LocationSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center  border-t border-[#272424] items-center gap-10 xl:gap-[195px]  py-16 md:py-28  px-4 md:px-16 xl:pl-[136px] xl:pr-[97px]">
      {/* Contact Information */}
      <div className="bg-[#FEEDEC] lg:w-1/2 xl:w-[45%]">
        <h2 className="text-4xl text-center md:text-5xl bg-[#FEEDEC] font-semibold p-6    border-b border-[#272424]">
          Our Location
        </h2>
        <div className="bg-[#FEEDEC] p-6 text-lg md:text-xl  ">
          <p className=" mb-2">Salon Address</p>
          <p className=" mb-6">
            Flat 1, 276 Old Christchurch Road, Bournemouth BH1 1PH
          </p>
          <p className=" mb-2">Phone Number</p>
          <p className=" mb-6">+44 7846499337</p>
          <p className=" mb-2">Email Address</p>
          <p>hello@funmightbeauty.co.uk</p>
        </div>
      </div>

      {/* Google Map iframe */}
      <div className="w-[380px] md:w-[570px] lg:w-[380px] xl:w-[470px] xl:flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.8880221230856!2d-1.8700964877884823!3d50.72201656765501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873a1dc0c5de1e1%3A0x5c8fb8f7aa63c3b!2s276%20Old%20Christchurch%20Rd%2C%20Bournemouth%20BH1%201PH%2C%20UK!5e0!3m2!1sen!2sng!4v1727878832504!5m2!1sen!2sng"
          width="100%"
          height="470"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationSection;
