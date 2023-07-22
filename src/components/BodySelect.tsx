import React, { FC, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { bodies as images } from "@/consts";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { chevronStyling } from "@/consts";

const length = images.length;

export type BodySelectProps = {};

export const BodySelect: FC<BodySelectProps> = ({}) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <ChevronLeft
        color="#ff1aec"
        onClick={() => setIndex((index - 1 + length) % length)}
        size={50}
        className={cn("relative right-4 md:right-16 mt-44", chevronStyling)}
      />
      {images.map((src, mapIndex) => (
        <Image
          src={src}
          key={mapIndex}
          alt="uzi-body"
          className={cn("select-none", mapIndex !== index && "hidden")}
          height={320}
          width={255}
          quality={100}
          loading="eager"
        />
      ))}
      <ChevronRight
        color="#ff1aec"
        onClick={() => setIndex((index + 1) % length)}
        size={50}
        className={cn("relative left-4 md:left-16 mt-44 ", chevronStyling)}
      />
    </>
  );
};
