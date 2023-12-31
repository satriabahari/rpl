"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mb-24 flex scroll-mt-20 flex-col items-center justify-center gap-y-12 md:mb-36"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Image
          src="/education.jpg"
          width="375"
          height="375"
          alt="logo"
          className="col-span-1 m-auto rounded-full border border-gray-800 drop-shadow-2xl dark:border-gray-200"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: -100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="col-span-2"
      >
        <SectionHeading>About Us</SectionHeading>
        <p className="m-auto text-center text-gray-500 dark:text-gray-400 md:w-1/2">
          Astronesia is an International Baccalaureate World School and an
          authorized Cambridge Centre offering a world standard education to
          children from 3 - 18.
        </p>
      </motion.div>

      <hr className="w-1/4 rounded-xl border-2 border-gray-500" />

      <div className="grid items-center justify-center gap-x-4 gap-y-8 text-center md:grid-cols-2 md:px-24">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .75, delay: 0.75 }}
          className="md:w-3/4"
        >
          <h3 className="mb-4 text-xl font-semibold text-blue-500">Vision</h3>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-50 md:text-3xl">
            Nurturing Leaders for God, Country and Community
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .75, delay: 0.75 }}
        >
          <h3 className="mb-4 text-xl font-semibold text-blue-500">Mission</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We aim to provide holistic education in an environment which seeks
            to bring out the potential in every student to the fullest;
            developing in each a strong moral character, imbued with Godly
            values & principles and to guide and prepare him or her to be a
            leader for the greater good and of service to others.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
