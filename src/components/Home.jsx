import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/interior-bg.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center py-28 px-6 md:px-20 text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
          Make Your Interior More <br />
          Minimalistic & Modern
        </h1>
        <p className="text-black text-base md:text-lg mb-8">
          Turn your home with rbc group into a lot more minimalist and modern with ease and speed
        </p>
      </motion.div>
    </section>
  );
};
