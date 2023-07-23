"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  animate,
  useMotionValue,
} from "framer-motion";
import logo from "../../public/loading/logo.png";
import spaceship from "../../public/loading/spaceship.png";

export const LoadingScreen: FC = () => {
  const { scrollYProgress } = useScroll();
  const blurVal = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const blur = useTransform(blurVal, (v) => `blur(${v}px)`);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 26]);

  const spaceShipBlurVal = useMotionValue(0.35);
  const spaceShipAnimate = animate(spaceShipBlurVal, 1.5, {
    duration: 0.7,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeOut",
  });
  const spaceShipBlur = useTransform(
    spaceShipBlurVal,
    (v) => `drop-shadow(0 0 ${v}rem #ff1aec)`,
  );

  return (
    <div className="relative">
      <div className="absolute w-screen z-30 h-[300vh]">
        <div className="items-center flex flex-col fixed w-screen h-screen">
          <motion.div className="mt-20" style={{ filter: blur }}>
            <Image
              src={logo}
              alt="uzi-logo"
              className="select-none"
              height={200}
              width={400}
            />
          </motion.div>
          <motion.div
            className="mt-32 w-[390px]"
            style={{
              scaleY: scale,
              scaleX: scale,
              filter: spaceShipBlur,
            }}
            animate={{}}
          >
            <Image
              src={spaceship}
              alt="uzi-spaceship"
              width={1920}
              height={1080}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
