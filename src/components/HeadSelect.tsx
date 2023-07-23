import React, { FC, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { chevronStyling, heads as images } from "@/consts";
import Image from "next/image";
import { cn } from "@/utils/cn";

const length = images.length;

export type HeadSelectProps = {};

export const HeadSelect: FC<HeadSelectProps> = ({}) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <ChevronLeft
        onClick={() => setIndex((index - 1 + length) % length)}
        size={50}
        className={cn(
          "relative right-4 md:right-16 bottom-12 z-10",
          chevronStyling,
        )}
      />
      {images.map((src, mapIndex) => (
        <Image
          src={src}
          key={mapIndex}
          alt="uzi-head"
          className={cn(
            "select-none z-10 h-[320px] w-[255px]",
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
          "relative left-4 md:left-16 bottom-12 z-10",
          chevronStyling,
        )}
      />
    </>
  );
};
