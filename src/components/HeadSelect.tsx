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
  loading: boolean;
  onLoad: () => void;
};

export const HeadSelect: FC<HeadSelectProps> = ({ loading, onLoad }) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div>
        {images.map((image, i) => (
          <Image
            src={image}
            key={i}
            alt={`uzi-head-preload-${i}`}
            className="hidden"
            height={216}
            width={170}
            priority
          />
        ))}
      </div>
      <ChevronLeft
        color="#ff1aec"
        onClick={() => setIndex((index - 1 + length) % length)}
        size={50}
        className={cn(
          "select-none cursor-pointer transition-all duration-200 blur-[2px] hover:blur-none",
          loading && "hidden",
        )}
      />
      <Image
        src={images[index]}
        alt="uzi-head"
        className={cn(loading && "hidden", "select-none")}
        height={216}
        width={170}
        onLoad={onLoad}
        priority
      />
      <ChevronRight
        color="#ff1aec"
        onClick={() => setIndex((index + 1) % length)}
        size={50}
        className={cn(
          "select-none cursor-pointer transition-all duration-200 blur-[2px] hover:blur-none",
          loading && "hidden",
        )}
      />
    </>
  );
};
