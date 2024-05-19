"use client";

import { motion } from "framer-motion";

import { transitionFromLeft } from "@/app/utils/variants";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="flex relative m-0 overflow-x-hidden flex-col items-center justify-center space-y-12 px-0 py-12 min-h-full sm:h-screen sm:p-0 w-full align-baseline"
    >
      <header>
        <h2 className="font-['TitleFont'] text-3xl font-extrabold">About Me</h2>
      </header>

      <motion.div initial="offscreen" whileInView="onscreen">
        <motion.div
          variants={transitionFromLeft}
          className="box max-w-full sm:w-[50%] w-[75%] flex flex-col items-center justify-center my-0 mx-auto bgtext space-y-4 p-12"
        >
          <p className="text-base font-semibold text-justify leading-7">
            Hey everyone! Nithya Sasidharan here, coder by day and crafter by
            night! Think superhero with a crochet hook!
          </p>
          <p className="text-base font-semibold text-justify leading-7">
            Crocheting totally stole my heart back in 2018. I saw these adorable
            Christmas ornaments and just knew I had to make some myself. I
            watched some youtube videos and read some blogs and finally ended up
            here, totally hooked (pun intended!) Big shoutout to all the amazing
            people who share free tutorials and patterns online - you guys rock!
            Without you, I never would have discovered this fantastic world of
            crocheting.
          </p>
        </motion.div>
      </motion.div>
      <a
        href="#mywork"
        className="button style2 down anchored sm:visible invisible"
      >
        Next
      </a>
    </section>
  );
};

export default AboutMe;
