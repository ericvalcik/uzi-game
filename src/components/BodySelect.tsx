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
  loading: boolean;
  onLoad: () => void;
};

export const BodySelect: FC<BodySelectProps> = ({ loading, onLoad }) => {
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
          "relative right-16 select-none mt-44 cursor-pointer transition-all duration-200 blur-[2px] hover:blur-none",
          loading && "hidden",
        )}
      />
      <Image
        src={images[index]}
        alt="uzi-body"
        className={cn(loading && "hidden", "select-none")}
        height={100}
        width={255}
        onLoad={onLoad}
        priority
      />
      <ChevronRight
        color="#ff1aec"
        onClick={() => setIndex((index + 1) % length)}
        size={50}
        className={cn(
          "relative left-16 select-none mt-44 cursor-pointer transition-all duration-200 blur-[2px] hover:blur-none",
          loading && "hidden",
        )}
      />
    </>
  );
};
