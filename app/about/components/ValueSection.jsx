const ValuesSection = ({ values }) => {
  return (
    <section className="py-16 md:pb-[88px] bg-[#FEEDEC] text-primary border-t border-[#272424]">
      <h2 className="text-3xl md:text-5xl text-center mb-6">
        Our Values
      </h2>
      <p className="text-center md:text-2xl  mb-12">
        These are the core values that drive and guide our business
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center w-fit  gap-6 md:gap-x-20 lg:gap-x-[154px] max-w-5xl mx-auto">
        {values.map((value, index) => (
          <ul key={index} className="">
            <li className="text-lg md:text-2xl list-inside list-disc">{value}</li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
