"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroItem {
  img: string;
  text: string;
}

const heroData: HeroItem[] = [
  { img: "h4.webp", text: "Study Abroad With Confidence " },
  { img: "h5.webp", text: "Connect With Global Mentors" },
  { img: "h6.webp", text: "Achieve Your Academic Dreams" },
];

const NAVBAR_HEIGHT = 80; // px

export default function HeroAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);


  useEffect(() => {
    if (isPaused) return;
    const cycle = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroData.length);
    }, 7000);
    return () => clearInterval(cycle);
  }, [isPaused]);

  const currentItem = heroData[currentIndex];

  return (
    <div
      className="relative z-10 w-full overflow-hidden flex flex-col md:flex-row items-center justify-center"
      style={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Hero content with transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.img + currentItem.text}
          className="flex flex-col md:flex-row items-center md:justify-center w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Left Side — Text Section */}
          <div className="md:w-1/2   self-start  ">
            <div className="w-full flex items-center justify-center md:justify-start xl:pl-28  xl:pr-8 text-start lg:mt-28">
              <div className="flex items-stretch">
                {/* Red vertical line */}
                <div className="bg-[#C71585] w-1.5 md:w-3"></div>

                {/* Sliding text */}
                <motion.p
                  className="text-3xl md:text-6xl font-semibold text-gray-800 flex flex-wrap max-w-full"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 25, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
                >
                  {currentItem.text}
                </motion.p>
              </div>
            </div>
          </div>

          {/* Right Side — Image Section */}
          <div className="md:w-1/2 w-full flex  justify-center items-center md:mt-0 ">
            <motion.img
              key={currentItem.img}
              src={currentItem.img}
              alt={currentItem.text}
              className="w-full h-full object-contain"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Fixed Button (outside AnimatePresence) */}
      <motion.div
        className="absolute bottom-28 lg:bottom-6  lg:left-[3%] xl:left-[10%]  rounded-full w-[90%] md:w-[350px] "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <button
          aria-label="explore more button"
          className="bg-[#212761] rounded-full uppercase py-2 px-1 bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white text-2xl sm:text-3xl font-medium tracking-wide w-full"
        >
          Explore more
        </button>
      </motion.div>
    </div>
  );
}
