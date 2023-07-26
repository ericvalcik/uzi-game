import React, { FC, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { bodies as images } from "@/consts";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { chevronStyling } from "@/consts";

const length = images.length;

export type BodySelectProps = {
  // useState props passed from above
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const BodySelect: FC<BodySelectProps> = ({ index, setIndex }) => {
  return (
    <>
      <ChevronLeft
        onClick={() => setIndex((index - 1 + length) % length)}
        size={50}
        className={cn(
          "drop-shadow-[0_0_0.35rem_#ff1aec] hover:drop-shadow-[0_0_0.35rem_white] relative right-4 md:right-16 mt-40",
          chevronStyling,
        )}
      />
      {images.map((src, mapIndex) => (
        <Image
          src={src}
          key={mapIndex}
          alt="uzi-body"
          className={cn(
            "select-none h-[276px] w-[220px] mx-5",
            mapIndex !== index && "hidden",
          )}
          height={640}
          width={510}
          quality={100}
          loading="eager"
        />
      ))}
      <ChevronRight
        onClick={() => setIndex((index + 1) % length)}
        size={50}
        className={cn(
          "drop-shadow-[0_0_0.35rem_#ff1aec] hover:drop-shadow-[0_0_0.35rem_white] relative left-4 md:left-16 mt-40 ",
          chevronStyling,
        )}
      />
    </>
  );
};
