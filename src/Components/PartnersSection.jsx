import React from "react";
import { Fade } from "react-awesome-reveal";

const partners = [
  {
    name: "TechNova",
    logo: "https://i.ibb.co/7J94QG7v/technova.png",
    description:
      "AI-driven analytics and optimization tools for our dashboard.",
  },
  {
    name: "CloudSync",
    logo: "https://i.ibb.co/xqW42pK7/Cloud-Sync.png",
    description: "Secure cloud infrastructure and file storage services.",
  },
  {
    name: "SecurePay",
    logo: "https://i.ibb.co/jkRryn3j/Secure-Pay.png",
    description: "Payment gateway integration with fraud detection.",
  },
  {
    name: "DesignCraft",
    logo: "https://i.ibb.co/wZRTgYZt/Design-Craft.png",
    description: "Branding and UI/UX design support for our platform.",
  },
];

const PartnersSection = () => {
  return (
    <Fade>
      {" "}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 text-center ">
          <h2 className=" font-bold text-4xl bg-gradient-to-br from-emerald-200 to-emerald-600 bg-clip-text text-transparent  mb-4">
            Meet Our Partners
          </h2>
          <p className="font-medium text-lg bg-gradient-to-br from-emerald-200 to-emerald-600 bg-clip-text text-transparent mb-12">
            We’re proud to collaborate with industry leaders who help power our
            platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="hover:-translate-y-2 active:-translate-y-2 transition-all duration-300 p-8 shadow-emerald-400 hover:shadow-emerald-400  active:shadow-emerald-400 active:shadow-xl  rounded-lg shadow-md hover:shadow-xl"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 mx-auto mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold ">{partner.name}</h3>
                <p className="text-sm  mt-2">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default PartnersSection;
