"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { backgrounds } from "@/consts";
import { joystix } from "@/utils/font";

const length = backgrounds.length;

type BackgroundSelectProps = {
  // useState props passed from above
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const BackgroundSelect: FC<BackgroundSelectProps> = ({
  index,
  setIndex,
}) => {
  return (
    <>
      <motion.button
        onClick={() => setIndex((index + 1) % length)}
        className={cn(
          "select-none drop-shadow-[0_0_0.35rem_#ff1aec] hover:drop-shadow-[0_0_0.35rem_white] flex items-center justify-center gap-4 text-[#ff1aec] border-2 border-[#ff1aec] px-4 py-2 transition-all duration-200 group hover:border-white hover:text-white",
          joystix.className,
        )}
      >
        CHANGE BACKGROUND
      </motion.button>
      <div className="relative drop-shadow-[0_0_0.35rem_#ff1aec]">
        <div className="absolute border-4 border-solid border-[#ff1aec] w-[290px] md:w-[290px] h-[290px] left-[-145px] md:top-[64px] top-[44px]">
          {backgrounds.map((src, mapIndex) => (
            <Image
              src={src}
              key={mapIndex}
              fill
              alt="uzi-background"
              className={cn(mapIndex !== index && "hidden")}
              loading="eager"
            />
          ))}
        </div>
      </div>
    </>
  );
};
