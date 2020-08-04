import React from "react";
import { motion } from "framer-motion";

function LogoAnimated() {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 83, 61, 0)",
      stroke: "rgba(255, 83, 61, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 83, 61, 1)",
      stroke: "rgba(255, 83, 61, 1)",
    },
  };
  const polygon = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
      <motion.svg
        //   version="1.1"
        //   id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        //   xmlnsXlink="http://www.w3.org/1999/xlink"
        //   x="0px"
        //   y="0px"
        viewBox="0 0 100 100"
        //   xmlSpace="preserve"
        className="logoAnimated"
      >
        <motion.path
          d="M2.86,49.71l18-9.27v2.68L5.69,50.71v0.08l15.17,7.61v2.68l-18-9.27V49.71z"
          id="open"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { delay: 4, duration: 2, ease: "easeInOut" },
            fill: { delay: 4, duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          id="close"
          d="M96.67,51.84l-18,9.24V58.4l15.29-7.61v-0.08l-15.29-7.61v-2.68l18,9.24V51.84z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { delay: 4, duration: 2, ease: "easeInOut" },
            fill: { delay: 4, duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          id="k"
          d="M54.44,47.67l20.32,26.8h-6.62L50.73,51.18"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { delay: 2, duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <g id="k_x5F_shadow" className="st1" style={{ opacity: 0.19 }}>
          <defs>
            <path
              id="SVGID_1_"
              className="st1"
              style={{ opacity: 0.19 }}
              d="M54.44,47.67l20.32,26.8h-6.62L50.73,51.18"
            />
          </defs>
          <clipPath id="SVGID_2_">
            <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
          </clipPath>

          <linearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="18.7738"
            y1="130.3936"
            x2="24.7921"
            y2="130.3936"
            gradientTransform="matrix(0.9271 0.3748 -0.3748 0.9271 86.0458 -72.9444)"
          >
            <stop stopColor="#000000" offset="0" />
            <stop stopColor="#000000" stopOpacity="0.5" offset="0.2199" />
            <stop stopColor="#000000" stopOpacity="0" offset="0.5675" />
          </linearGradient>
          <motion.polygon
            className="st2"
            points="58.36,62.04 53.95,56.53 56.5,50.22 62.8,52.77 	"
            clipPath="url(#SVGID_2_)"
            fill="url(#SVGID_3_)"
            variants={polygon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { delay: 4, duration: 2, ease: "easeInOut" },
            }}
          />
        </g>
        <motion.path
          id="v"
          d="M28.45,26.55l15.86,40.3l15.8-40.3h6.41L46.94,74.47h-5.27L22.04,26.55H28.45z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { delay: 0, duration: 2, ease: "easeInOut" },
            fill: { delay: 0, duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
  );
}

export default LogoAnimated;
