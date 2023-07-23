"use client";

import React, { FC } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  animate,
  useMotionValue,
  AnimationSequence,
  cubicBezier,
} from "framer-motion";
import logo from "../../public/loading/logo.png";
import spaceship from "../../public/loading/spaceship.png";
import localFont from "next/font/local";
import { cn } from "@/utils/cn";

const joystix = localFont({ src: "../../public/fonts/joystix.otf" });

type LoadingScreenProps = {
  // useState props passed from above
  setRengerPage: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingScreen: FC<LoadingScreenProps> = ({ setRengerPage }) => {
  // Scroll stuff
  const { scrollYProgress } = useScroll();
  const blurVal = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const blur = useTransform(blurVal, (v) => `blur(${v}px)`);

  // Scroll - spaceship
  const spaceshipScale = useTransform(scrollYProgress, [0, 1], [1, 40], {
    ease: cubicBezier(0.88, 0.18, 1, 0.64),
  });
  const spaceshipMarginTop = useTransform(scrollYProgress, [0, 1], [50, 1050], {
    ease: cubicBezier(0.88, 0.18, 1, 0.64),
  });
  const spaceshipMarginRight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1200],
    {
      ease: cubicBezier(0.88, 0.18, 1, 0.64),
    },
  );
  const spaceshipOpacity = useTransform(scrollYProgress, [0, 1], [1, 0], {
    ease: cubicBezier(1, 0, 0.94, 0.07),
  });

  // Spaceship
  const spaceShipBlurVal = useMotionValue(0.35);
  const spaceshipSequence: AnimationSequence = [
    [spaceShipBlurVal, 1.5, { duration: 0.25, delay: 1.5, ease: "linear" }],
  ];
  const spaceShipAnimate = animate(spaceshipSequence, {
    repeat: Infinity,
    repeatType: "reverse",
  });
  const spaceShipBlur = useTransform(
    spaceShipBlurVal,
    (v) => `drop-shadow(0 0 ${v}rem #ff1aec)`,
  );

  // Scroll text - opacity
  const scrollTextOpacityVal = useMotionValue(0);
  animate(scrollTextOpacityVal, 1, {
    duration: 0.5,
    delay: 3.5,
  });

  // Scroll text - fade with scroll
  const scrollTextDivOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Scroll text - bloom
  const scrollTextBloomVal = useMotionValue(0.2);
  const scrollTextSequence: AnimationSequence = [
    [scrollTextBloomVal, 1, { duration: 0.25, delay: 1.5, ease: "linear" }],
  ];
  const scrollTextAnimate = animate(scrollTextSequence, {
    repeat: Infinity,
    repeatType: "reverse",
  });
  const scrollTextBlur = useTransform(
    scrollTextBloomVal,
    (v) => `drop-shadow(0 0 ${v}rem white)`,
  );

  // event related code
  scrollYProgress.on("change", (v) => {
    if (v > 0.1) spaceShipAnimate.stop();
    else spaceShipAnimate.play();

    if (v > 0.9) {
      setRengerPage(true);
    }
  });

  return (
    <div className="relative">
      <div className="absolute w-screen z-30 h-[300vh]">
        <div className="items-center flex flex-col fixed w-screen h-screen">
          <motion.div className="mt-12" style={{ filter: blur }}>
            <Image
              src={logo}
              alt="uzi-logo"
              className="select-none"
              height={200}
              width={400}
            />
          </motion.div>
          <motion.div
            className="w-[390px]"
            style={{
              filter: spaceShipBlur,
              scale: spaceshipScale,
              marginTop: spaceshipMarginTop,
              marginRight: spaceshipMarginRight,
              opacity: spaceshipOpacity,
            }}
          >
            <Image
              src={spaceship}
              alt="uzi-spaceship"
              width={1920}
              height={1080}
            />
          </motion.div>
          <motion.div
            style={{ opacity: scrollTextDivOpacity }}
            className="fixed mt-[435px]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              className={cn("mt-20", joystix.className)}
              style={{ opacity: scrollTextOpacityVal, filter: scrollTextBlur }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
              }}
            >
              SWIPE DOWN TO START
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
