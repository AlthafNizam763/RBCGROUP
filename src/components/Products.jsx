import React from "react";

export const Products = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50" id="product">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Best Selling Product
      </h2>

      <div className="flex justify-center gap-4 mb-10">
        {["Chair", "Beds", "Sofa", "Lamp"].map((cat) => (
          <button
            key={cat}
            className="px-4 py-1 bg-white rounded-full border hover:bg-gray-100"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { name: "Sakarias Armchair", price: "$392" },
          { name: "Baltsar Chair", price: "$299" },
          { name: "Anjay Chair", price: "$519" },
          { name: "Nyantuy Chair", price: "$921" },
        ].map((product, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow">
            <div className="h-32 bg-gray-200 rounded mb-4" />
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
