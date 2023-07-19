import React, { FC, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/utils/cn";

const images = [
  "/head/glasses.png",
  "/head/kidsaward.png",
  "/head/leslie.png",
  "/head/og.png",
  "/head/ogpink.png",
  "/head/shades.png",
  "/head/spikes.png",
  "/head/spikespink.png",
];

const length = images.length;

export type HeadSelectProps = {
  onLoad: () => void;
};

export const HeadSelect: FC<HeadSelectProps> = ({ onLoad }) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <ChevronLeft
        color="#ff1aec"
        onClick={() => setIndex((index - 1 + length) % length)}
        size={50}
        className="relative right-4 md:right-16 bottom-12 select-none z-10 cursor-pointer transition-all duration-200 blur-[2px] hover:blur-none"
      />
      {images.map((src, mapIndex) => (
        <Image
          src={src}
          key={mapIndex}
          alt="uzi-head"
          className={cn(
            "w-[255px] h-[320px] select-none z-10",
            mapIndex !== index && "hidden",
          )}
          height={640}
          width={510}
          onLoad={onLoad}
        />
      ))}
      <ChevronRight
        color="#ff1aec"
        onClick={() => setIndex((index + 1) % length)}
        size={50}
        className="relative left-4 md:left-16 bottom-12 select-none z-10 cursor-pointer transition-all duration-200 blur-[2px] hover:blur-none"
      />
    </>
  );
};
