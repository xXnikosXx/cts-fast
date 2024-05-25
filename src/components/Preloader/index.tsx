"use client";

// ? Imports
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";

// ? Array of strings to animate through.
// ! Make sure to also change the timeout of the Preloader if adding more words.
const words = [
  "Web Design",
  "Web Development",
  "Domains",
  "SEO",
  "Online Marketing",
  "IT Infrastructure",
  "IT Support",
  "Custom Tech Solutions",
];



export default function Index() {
  // ? Initialize state variable `index` with initial value `0`.
  // ? Function `setIndex` to update value of `index`
  const [index, setIndex] = useState(0);

  // ? Initialize state variable `dimension` as `Object` with properties `width` and `height`,
  // ? both initially set to `0`.
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  // ? Updates the `dimension` state with current inner width and height of the window
  // ? when the component mounts (since it has an empty dependency array).
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // ? Watches for changes in the `index` state. When the `index` state changes and it's
  // ? NOT the last index of the `words` array, it schedules a timeout to increment the `index`
  // ? after a specific delay.
  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  // ? The initialPath and targetPath variables define SVG path data strings used for animating a curve.
  // ? These paths are based on the dimensions of the window.
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  // ? The curve object defines animation configurations for transitioning between the initial and target paths.
  // ? It specifies durations, easing functions, and delays for the transitions.
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter" className="text-2xl md:text-5xl">
            {words[index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
