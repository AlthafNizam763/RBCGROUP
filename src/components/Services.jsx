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
      <h2 className="text-2xl font-semibold mb-10">Why Choosing Us</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((item, i) => (
          <div key={i} className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
