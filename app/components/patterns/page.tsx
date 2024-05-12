"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import images from "@/app/utils/images";
import rightArrow from "@/public/images/right-arrow.svg";
import darkRightArrow from "@/public/images/dark-right-arrow.svg";
import {
  transitionFromLeft,
  transitionFromRight,
  scaleOnHover,
} from "@/app/utils/variants";

const Patterns = () => {
  return (
    <section
      id="patterns"
      className="flex relative m-0 overflow-x-hidden flex-col items-center justify-center space-y-12 px-0 py-12 min-h-full sm:h-screen sm:p-0 w-full align-baseline"
    >
      <div className="max-w-full sm:w-[50%] w-[75%] space-y-12">
        <header className="space-y-12">
          <h2 className="font-['TitleFont'] text-3xl font-extrabold">
            Patterns
          </h2>
          <p>
            These are a few of the patterns that I have written. They are
            absolutely free!
          </p>
        </header>
      </div>

      <motion.div
        variants={scaleOnHover}
        initial="offscreen"
        whileInView="onscreen"
        whileHover="hover"
        whileTap="pressed"
        className="max-w-full sm:w-[50%] w-[75%] space-y-12"
      >
        <motion.div
          variants={transitionFromLeft}
          className="w-full box patternbox"
        >
          <Link
            href="/naruto"
            target="_blank"
            className="w-full flex justify-between"
          >
            <span className="img">
              <Image
                src={images[0]}
                className="flex justify-center relative w-16 object-contain rounded-2xl"
                title="Naruto"
                alt="Naruto"
              />
            </span>
            <span className="flex justify-center items-center ml-8">
              Crochet Pattern for Naruto - Intermediate level
            </span>
            <span className="flex justify-end">
              <Image
                src={rightArrow}
                className="w-6 hidden dark:block"
                alt="Tap to open pattern"
              />
              <Image
                src={darkRightArrow}
                className="w-6 dark:hidden"
                alt="Tap to open pattern"
              />
            </span>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        variants={scaleOnHover}
        initial="offscreen"
        whileInView="onscreen"
        whileHover="hover"
        whileTap="pressed"
        className="max-w-full sm:w-[50%] w-[75%] space-y-12"
      >
        <motion.div
          variants={transitionFromRight}
          className="w-full box patternbox"
        >
          <Link
            href="/mrbean"
            target="_blank"
            className="w-full flex justify-between"
          >
            <span className="img">
              <Image
                src={images[10]}
                className="flex justify-center relative w-16 object-contain rounded-2xl"
                title="Mr. Bean's Teddy Bear"
                alt="Mr. Bean's Teddy Bear"
              />
            </span>
            <span className="flex justify-center items-center ml-8">
              Crochet Pattern for Mr. Bean&apos;s Teddy - Beginner level
            </span>
            <span className="flex justify-end">
              <Image
                src={rightArrow}
                className="w-6 hidden dark:block"
                alt="Tap to open pattern"
              />
              <Image
                src={darkRightArrow}
                className="w-6 dark:hidden"
                alt="Tap to open pattern"
              />
            </span>
          </Link>
        </motion.div>
      </motion.div>
      <a
        href="#aboutme"
        className="button style2 down anchored sm:visible invisible"
      >
        Next
      </a>
    </section>
  );
};

export default Patterns;
