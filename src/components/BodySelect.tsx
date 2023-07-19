import React, { FC, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/utils/cn";

const images = [
  "/body/cover.png",
  "/body/motorbike.png",
  "/body/pinkhoodie.png",
  "/body/pinktapet.png",
  "/body/president.png",
  "/body/tourt.png",
];

const length = images.length;

export type BodySelectProps = {
  onLoad: () => void;
};

export const BodySelect: FC<BodySelectProps> = ({ onLoad }) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <ChevronLeft
        color="#ff1aec"
        onClick={() => setIndex((index - 1 + length) % length)}
        size={50}
        className="relative right-4 md:right-16 select-none mt-44 cursor-pointer transition-all duration-200 blur-[2px] hover:blur-none"
      />
      {images.map((src, mapIndex) => (
        <Image
          src={src}
          key={mapIndex}
          alt="uzi-body"
          className={cn(
            "w-[255px] h-[320px] select-none",
            mapIndex !== index && "hidden",
          )}
          height={640}
          width={510}
          onLoad={onLoad}
          loading="eager"
        />
      ))}
      <ChevronRight
        color="#ff1aec"
        onClick={() => setIndex((index + 1) % length)}
        size={50}
        className="relative left-4 md:left-16 select-none mt-44 cursor-pointer transition-all duration-200 blur-[2px] hover:blur-none"
      />
    </>
  );
};
