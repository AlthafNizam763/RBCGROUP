import React from "react";

export const Services = () => {
  const features = [
    {
      title: "Luxury facilities",
      desc:
        "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.",
    },
    {
      title: "Affordable Price",
      desc:
        "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
    },
    {
      title: "Many Choices",
      desc:
        "We provide many unique work space choices so that you can choose the workspace to your liking.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white" id="service">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-neutral-900 leading-tight">
          Why <br /> Choosing Us
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
            {/* <a href="#" className="text-sm text-orange-500 font-medium inline-flex items-center gap-1 hover:underline">
              More Info <span>→</span>
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};
