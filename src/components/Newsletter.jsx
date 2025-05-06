import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

export const Newsletter = () => {
  return (
    <section className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            Drop us a message by filling this form and we'll get back to you.
          </p>

          <div className="flex items-center gap-3 mb-4 text-gray-700">
            <MdEmail className="text-xl text-orange-500" />
            <span>info@rbcgroup.com</span>
          </div>

          <div className="flex items-center gap-3 mb-6 text-gray-700">
            <MdPhone className="text-xl text-orange-500" />
            <span>+91 84565 12433</span>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-1">Kozhikode</h4>
            <p className="text-sm text-gray-700">
              BEAT CENTRE OF EXCELLENCE<br />
              4th Floor, Emerald Mall,<br />
              Mavoor Rd, Arayidathupalam,<br />
              Kozhikode<br />
              673004<br />
              KERALA
            </p>
          </div>
        </div>

        {/* Google Map Embed */}
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">
            Plan Your Meeting <br /> <span className="text-orange-500">With Us</span>
          </h3>
          <p className="text-orange-500 mb-4">
            Visit us and see what makes us unique.
          </p>
          <iframe
            title="Zenith Kozhikode Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.172688553753!2d75.78189111527859!3d11.255759191985267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65c6852979cc5%3A0xf6f979b617f3f312!2sEmerald%20Mall%2C%20Mavoor%20Rd%2C%20Arayidathupalam%2C%20Kozhikode%2C%20Kerala%20673004!5e0!3m2!1sen!2sin!4v1651587304246!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
