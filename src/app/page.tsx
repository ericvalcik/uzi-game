"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
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

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const length = images.length;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center">
        {loading && <div>Loading...</div>}
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
        <ChevronLeft
          color="#ff1aec"
          onClick={() => setIndex((index - 1 + length) % length)}
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
          onLoad={() => setLoading(false)}
          priority
        />
        <ChevronRight
          color="#ff1aec"
          onClick={() => setIndex((index + 1) % length)}
          className={cn(
            "select-none cursor-pointer transition-all duration-200 blur-[2px] hover:blur-none",
            loading && "hidden",
          )}
        />
      </div>
    </main>
  );
}
