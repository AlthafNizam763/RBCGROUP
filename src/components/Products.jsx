import React from "react";
import { FaStar, FaPlus } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Example product images
import chair1 from "../assets/chair1.png";
import chair2 from "../assets/chair2.png";
import chair3 from "../assets/chair3.png";
import chair4 from "../assets/chair4.png";

const products = [
  { name: "Sakarias Armchair", category: "Chair", price: "$392", image: chair1 },
  { name: "Baltsar Chair", category: "Chair", price: "$299", image: chair2 },
  { name: "Anjay Chair", category: "Chair", price: "$519", image: chair3 },
  { name: "Nyantuy Chair", category: "Chair", price: "$921", image: chair4 },
];

export const Products = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50" id="product">
      <h2 className="text-3xl font-bold text-center mb-6">
         Best <span className="text-orange-500">Selling</span> Product
      </h2>


      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-10">
        {["Chair", "Beds", "Sofa", "Lamp"].map((cat, i) => (
          <button
            key={i}
            className={`px-5 py-2 rounded-full border text-sm ${
              cat === "Chair" ? "bg-neutral-900 text-white" : "bg-white text-gray-700"
            } hover:bg-gray-100`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards with Nav */}
      <div className="relative">
        <MdChevronLeft
          size={32}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-orange-500 cursor-pointer"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-10">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
              <p className="text-sm text-gray-400 mb-1">{product.category}</p>
              <h3 className="font-semibold text-lg text-neutral-900">{product.name}</h3>
              <div className="flex items-center text-orange-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="font-semibold text-lg">{product.price}</p>
                {/* <button className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center">
                  <FaPlus size={14} />
                </button> */}
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          size={32}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-orange-500 cursor-pointer"
        />
      </div>

      {/* View All */}
      {/* <div className="mt-10 text-center">
        <a href="#" className="text-orange-500 text-sm font-medium hover:underline inline-flex items-center gap-1">
          View All <span>→</span>
        </a>
      </div> */}
    </section>
  );
};
