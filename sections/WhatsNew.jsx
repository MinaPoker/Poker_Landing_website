'use client'; // Indicate that this code is intended for client-side execution

import { motion } from 'framer-motion'; // Import animation library

import styles from '../styles'; // Import shared styles
import { newFeatures } from '../constants'; // Import new feature data
import {
  NewFeatures,
  TitleText,
  TypingText,
} from '../components'; // Import custom components
import {
  planetVariants,
  staggerContainer,
  fadeIn,
} from '../utils/motion'; // Import custom motion variants

// Functional component for rendering the "What's New" section
const WhatsNew = () => (
  <section className={${styles.paddings} relative z-10}>
    {/* Outer motion container with staggered reveal animation */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8}
    >
      {/* Content container with fade-in animation from the right */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" /> {/* Animated text component */}
        <TitleText title={<>What's new about Metaversus?</>} /> {/* Title text */}
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {/* Render a list of new features */}
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      {/* Image container with custom motion variant */}
      <motion.div
        variants={planetVariants('right')}
        className={flex-1 ${styles.flexCenter}}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew; // Export the component for use in other parts of the app
