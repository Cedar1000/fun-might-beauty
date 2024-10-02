import Image from "next/image";

const TeamSection = ({ members }) => {
  return (
    <section className="py-20 md:pt-24 lg:pt-36 xl:pt-[152px] lg:pb-28 xl:pb-[132px] px-8 md:px-16 lg:px-20 xl:px-28">
      <h2 className="text-3xl font-bold md:text-center md:text-5xl mb-6">
        Meet The Team
      </h2>
      <p className="md:text-center text-primary md:text-2xl mb-12 xl:max-w-[1316px] mx-auto">
        Meet our talented team of stylists and estheticians. Each member brings
        unique skills and expertise to our salon, ensuring that you receive the
        best possible care.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {members.map((member) => (
          <div key={member.id} className="">
            <div className=" mx-auto md:mx-0 w-fit overflow-hidden mb-4">
              <Image
                src={member.image}
                alt={member.name}
                
                className="object-cover w-40 h-40 md:w-80 md:h-[334px]"
              />
            </div>
            <h3 className="text-lg md:text-2xl mb-4 ml-24 md:ml-0">{member.name}</h3>
            <p className="text-sm md:text-normal ml-24 md:ml-0">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
