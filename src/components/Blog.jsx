import React from "react";
import { FaStar } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Importing images
import user1 from "../assets/user1.png";
import bg1 from "../assets/bg1.png";
import user2 from "../assets/user2.png";
import bg2 from "../assets/bg2.png";
import user3 from "../assets/user3.png";
import bg3 from "../assets/bg3.png";
import experience from "../assets/Experience.png"; 
import materialsImg from "../assets/materials.png"; 

const testimonials = [
  {
    name: "Bang Upin",
    location: "Pedagang Asongan",
    image: user1,
    bgImage: bg1,
    quote: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal.",
  },
  {
    name: "Ibuk Sukijan",
    location: "Ibu Rumah Tangga",
    image: user2,
    bgImage: bg2,
    quote: "Makasih Panto, aku sekarang berasa tinggal di apartemen karena barang-barang yang terlihat mewah!",
  },
  {
    name: "Mpak Ina",
    location: "Karyawan Swasta",
    image: user3,
    bgImage: bg3,
    quote: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak.",
  },
];

export const Blog = () => {
  return (
    <>
      {/* Experience Section */}
      <section className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-24" id="faq">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img src={experience} alt="Experience" className="w-full h-auto object-cover rounded-xl" />
          </div>
          <div>
            <h3 className="text-sm text-orange-500 font-semibold mb-2">EXPERIENCES</h3>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              We Provide You The Best Experience
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              You don’t have to worry about the result because all of these interiors are made by people
              who are professionals in their fields with an elegant and luxurious style and with premium
              quality materials.
            </p>
            {/* <a href="#" className="text-orange-500 font-medium hover:underline">More Info</a> */}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-24" id="materials">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-sm text-orange-500 font-semibold mb-2">MATERIALS</h3>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Very Serious Materials For Making Furniture
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Because Panto was very serious about designing furniture for our environment, using a very
              expensive and famous capital but at a relatively low price.
            </p>
            {/* <a href="#" className="text-orange-500 font-medium hover:underline">More Info</a> */}
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md order-1 md:order-2">
            <img src={materialsImg} alt="Materials" className="w-full h-auto object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* Testimonials Section (unchanged) */}
      <section className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="testimonial">
        <div className="text-center mb-12">
          <h3 className="text-sm text-orange-500 font-semibold mb-2">TESTIMONIALS</h3>
          <h2 className="text-3xl font-bold text-neutral-900">Our Client Reviews</h2>
        </div>

        <div className="relative flex items-center">
          <MdChevronLeft
            size={30}
            className="absolute left-0 z-10 text-gray-500 hover:text-orange-500 cursor-pointer"
          />
          <div className="flex gap-6 mx-auto overflow-x-auto scrollbar-hide px-6">
            {testimonials.map((client, i) => (
              <div
                key={i}
                className="min-w-[300px] bg-white rounded-3xl shadow-lg overflow-hidden relative"
              >
                <img
                  src={client.bgImage}
                  alt="Background"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto -mt-14 rounded-full border-4 border-white overflow-hidden">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold mt-4">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.location}</p>
                  <p className="text-gray-600 text-sm mt-3 italic">
                    "{client.quote}"
                  </p>
                  <div className="flex justify-center mt-4 text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={16} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            size={30}
            className="absolute right-0 z-10 text-gray-500 hover:text-orange-500 cursor-pointer"
          />
        </div>
      </section>
    </>
  );
};
