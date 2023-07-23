"use client";

import React, { FC, useState } from "react";
import { RefreshCw } from "lucide-react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { backgrounds } from "@/consts";

const length = backgrounds.length;

export const BackgroundSelect: FC = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <button
        onClick={() => setIndex((index + 1) % length)}
        className="select-none flex items-center justify-center gap-4 text-[#ff1aec] rounded-xl border-2 border-[#ff1aec] px-4 py-2 transition-all duration-200 group hover:border-white hover:text-white"
      >
        <RefreshCw className="group-hover:rotate-180 transition-transform duration-200" />
        BACKGROUND
      </button>
      <div className="relative">
        <div className="absolute rounded-[50px] border-4 border-solid border-[#ff1aec] w-[290px] md:w-[290px] h-[290px] left-[-145px] top-[calc(64px)]">
          {backgrounds.map((src, mapIndex) => (
            <Image
              src={src}
              key={mapIndex}
              fill
              alt="uzi-background"
              className={cn("rounded-[46px]", mapIndex !== index && "hidden")}
              loading="eager"
            />
          ))}
        </div>
      </div>
    </>
  );
};
