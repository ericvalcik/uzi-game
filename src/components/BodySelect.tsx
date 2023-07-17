import React, { FC, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

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
      <div>
        {images.map((image, i) => (
          <Image
            src={image}
            key={i}
            alt={`uzi-body-preload-${i}`}
            className="hidden"
            height={100}
            width={255}
            priority
          />
        ))}
      </div>
      <ChevronLeft
        color="#ff1aec"
        onClick={() => setIndex((index - 1 + length) % length)}
        size={50}
        className="relative right-4 md:right-16 select-none mt-44 cursor-pointer transition-all duration-200 blur-[2px] hover:blur-none"
      />
      <Image
        src={images[index]}
        alt="uzi-body"
        className="select-none"
        height={100}
        width={255}
        onLoad={onLoad}
        priority
      />
      <ChevronRight
        color="#ff1aec"
        onClick={() => setIndex((index + 1) % length)}
        size={50}
        className="relative left-4 md:left-16 select-none mt-44 cursor-pointer transition-all duration-200 blur-[2px] hover:blur-none"
      />
    </>
  );
};
