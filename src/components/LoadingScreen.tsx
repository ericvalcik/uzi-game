"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  animate,
  useMotionValue,
  AnimationSequence,
} from "framer-motion";
import logo from "../../public/loading/logo.png";
import spaceship from "../../public/loading/spaceship.png";

export const LoadingScreen: FC = () => {
  // Scroll stuff
  const { scrollYProgress } = useScroll();
  const blurVal = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const blur = useTransform(blurVal, (v) => `blur(${v}px)`);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 26]);

  // Spaceship
  const spaceShipBlurVal = useMotionValue(0.35);
  const sequence: AnimationSequence = [
    [spaceShipBlurVal, 1.5, { duration: 0.25, delay: 1.5, ease: "linear" }],
  ];
  const spaceShipAnimate = animate(sequence, {
    repeat: Infinity,
    repeatType: "reverse",
  });
  const spaceShipBlur = useTransform(
    spaceShipBlurVal,
    (v) => `drop-shadow(0 0 ${v}rem #ff1aec)`,
  );

  // Scroll text
  const scrollTextOpacityVal = useMotionValue(0);
  const scrollTextOpacityAnimation = animate(scrollTextOpacityVal, 1, {
    duration: 0.5,
    delay: 3.5,
  });

  // event related code
  scrollYProgress.on("change", (v) => {
    if (v > 0.1) spaceShipAnimate.stop();
    else spaceShipAnimate.play();
  });

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
          <motion.div
            className="mt-20"
            style={{ opacity: scrollTextOpacityVal, filter: blur }}
          >
            Scroll down to begin
          </motion.div>
        </div>
      </div>
    </div>
  );
};
