"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import loadTop from "../../public/load-top.png";
import loadBottom from "../../public/load-bottom.png";
import { motion } from "framer-motion";

export const LoadingScreen: FC = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="absolute inset-0 w-screen h-screen z-30 overflow-hidden"
          animate={{
            y:
              -(typeof window !== "undefined" ? window?.innerHeight : 2000) / 2,
            opacity: 0,
            transitionEnd: { display: "none" },
            transition: { duration: 0.7, delay: 3, ease: "easeIn" },
          }}
        >
          <Image
            src={loadTop}
            alt="load-top"
            sizes="100vh"
            style={{
              height: "100%",
              objectFit: "cover",
            }}
            priority
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 w-screen h-screen z-30 overflow-hidden"
          animate={{
            y: (typeof window !== "undefined" ? window?.innerHeight : 2000) / 2,
            opacity: 0,
            transitionEnd: { display: "none" },
            transition: { duration: 0.7, delay: 3, ease: "easeIn" },
          }}
        >
          <Image
            src={loadBottom}
            alt="load-bottom"
            sizes="100vh"
            style={{
              height: "100%",
              objectFit: "cover",
              overflow: "hidden",
            }}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};
