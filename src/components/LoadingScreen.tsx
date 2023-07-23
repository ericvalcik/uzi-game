"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import logo from "../../public/loading/logo.png";
import spaceship from "../../public/loading/spaceship.png";

export const LoadingScreen: FC = () => {
  const [scroll, setScroll] = useState(0);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (latest) => {
    setScroll(latest);
    console.log(latest);
  });

  return (
    <div className="relative">
      <div className="absolute w-screen z-30 h-[300vh]">
        <div className="items-center flex flex-col fixed w-screen h-screen">
          <motion.div
            className="mt-20"
            style={{ filter: `blur(${scroll * 150}px)` }}
          >
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
              scaleY: `${1 + scroll * 25}`,
              scaleX: `${1 + scroll * 25}`,
              marginTop: `${128 + scroll * 500}px`,
            }}
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
