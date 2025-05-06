import React from "react";

export const Blog = () => {
  return (
    <>
      {/* Experience Section */}
<section className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
  <div className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 bg-white">
    <div>
      <h3 className="text-sm text-orange-500 font-semibold mb-2">EXPERIENCES</h3>
      <h2 className="text-2xl font-bold mb-4">We Provide You The Best Experience</h2>
      <p className="text-gray-600">
        You don’t have to worry about the result because all of these interiors are made by people who are professionals in
        their fields with an elegant and luxurious style and with premium quality materials.
      </p>
    </div>
    <div className="bg-gray-200 h-48 rounded" />
  </div>
</section>

      {/* Materials Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 bg-gray-50">
        <div className="bg-gray-200 h-48 rounded" />
        <div>
          <h3 className="text-sm text-orange-500 font-semibold mb-2">MATERIALS</h3>
          <h2 className="text-2xl font-bold mb-4">Very Serious Materials For Making Furniture</h2>
          <p className="text-gray-600">
            Because panto was very serious about designing furniture for our environment, using a very expensive and famous
            capital but at a relatively low price
          </p>
        </div>
      </section>

      {/* Testimonials */}
<section
  className="px-4 lg:px-4 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
  id="testimonial"
>
  <h2 className="text-2xl font-semibold text-center mb-10">Our Client Reviews</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      { name: "Bang Upin", location: "Pedagang Asongan" },
      { name: "Ibuk Sukijan", location: "Buruh Cuci" },
      { name: "Mpak Ina", location: "Karyawan Swasta" }
    ].map((client, i) => (
      <div key={i} className="bg-gray-50 p-6 rounded-xl shadow">
        <div className="h-32 bg-gray-200 rounded mb-4" />
        <h3 className="font-semibold mb-1">{client.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{client.location}</p>
        <p className="text-gray-600 text-sm">
          "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal."
        </p>
      </div>
    ))}
  </div>
</section>

    </>
  );
};
