"use client";

import Image from "next/image";
import { useState } from "react";

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
        <button
          onClick={() => setIndex((index - 1 + length) % length)}
          className={loading ? "hidden" : ""}
        >
          Left
        </button>
        <Image
          src={images[index]}
          alt="uzi-head"
          className={loading ? "hidden" : ""}
          height={216}
          width={170}
          onLoad={() => setLoading(false)}
          priority
        />
        <button
          onClick={() => setIndex((index + 1) % length)}
          className={loading ? "hidden" : ""}
        >
          Right
        </button>
      </div>
    </main>
  );
}
