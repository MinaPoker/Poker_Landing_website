"use client";

import { motion } from "framer-motion";
import styles from "../styles/index";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { navVariants } from "../utils/motion";
import { ExploreCard } from "../components";
import WhiteList from "../sections/WhiteList";

const Whitelist = () => (
  <div className={` py-16  bg-primary-black w-full` }>
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-03 text-center justify-center" />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-center justify-center text-white ">
          White-Listing
        </h2>

    <WhiteList/>

    </motion.nav>
  </div>
);

export default Whitelist;

