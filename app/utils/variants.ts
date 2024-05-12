import { Variants } from "framer-motion";

export const transitionFromLeft: Variants = {
  offscreen: {
    x: -600,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

export const transitionFromRight: Variants = {
  offscreen: {
    x: 600,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

export const transitionFromBottom: Variants = {
  offscreen: {
    y: 600,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

export const transitionFromLeftAndRotate: Variants = {
  offscreen: {
    x: -600,
  },
  onscreen: {
    x: 0,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

export const transitionFromRightAndRotate: Variants = {
  offscreen: {
    x: 600,
  },
  onscreen: {
    x: 0,
    rotate: 10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

export const scaleOnHover: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};
