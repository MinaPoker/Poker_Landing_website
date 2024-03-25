"use client";
import React from 'react'
import NewsletterForm from '../components/NewsLetterForm';
import Socials from '../components/Socials';
import { motion } from "framer-motion";
import styles from "../styles/index";
import { navVariants } from "../utils/motion";

const newsletter = () => (
  <div className={` py-16 flex flex-col items-center justify-center bg-primary-black w-full min-h-screen`}>
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-03 text-center justify-center" />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-center justify-center text-white ">
        Join our Newsletter
      </h2>

      <NewsletterForm />
      <Socials />

    </motion.nav>
  </div>
);

export default newsletter;