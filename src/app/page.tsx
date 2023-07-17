"use client";

import React, { useState, FC, ReactNode } from "react";
import Image from "next/image";
import { HeadSelect, BodySelect } from "@/components";
import { cn } from "@/utils/cn";
import { RefreshCw } from "lucide-react";

const backgrounds = [
  "/bgs/FLAG.png",
  "/bgs/WHITE.png",
  "/bgs/BLACK.png",
  "/bgs/PINK.png",
];

const bgLength = backgrounds.length;

const getLoadingValue = (...arg: boolean[]): boolean => {
  return arg.some((value) => value);
};

export default function Home() {
  const [bgLoading, setBgLoading] = useState(true);
  const [headLoading, setHeadLoading] = useState(true);
  const [bodyLoading, setBodyLoading] = useState(true);

  const [bgIndex, setBgIndex] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 py-24">
      <div className="flex flex-col items-center justify-center h-full">
        {getLoadingValue(bgLoading, headLoading, bodyLoading) && (
          <div>Loading...</div>
        )}
        <div
          className={cn(
            "flex flex-col items-center justify-center h-full",
            getLoadingValue(bgLoading, headLoading, bodyLoading) && "hidden",
          )}
        >
          <button
            onClick={() => setBgIndex((bgIndex + 1) % bgLength)}
            className="flex items-center justify-center gap-4 text-[#ff1aec] rounded-xl border-2 border-[#ff1aec] px-4 py-2 transition-all duration-200 group hover:border-white hover:text-white"
          >
            <RefreshCw className="group-hover:rotate-180 transition-transform duration-200" />
            BACKGROUND
          </button>
          <div className="relative">
            <div className="absolute rounded-[50px] border-4 border-solid border-[#ff1aec] w-[300px] md:w-[300px] h-[300px] left-[-150px] top-[calc(24px+15vh)]">
              {backgrounds.map((image, i) => (
                <Image
                  src={image}
                  key={i}
                  alt={`uzi-bg-preload-${i}`}
                  className="hidden"
                  fill
                  priority
                />
              ))}
              <Image
                src={backgrounds[bgIndex]}
                fill
                alt="uzi-background"
                className="rounded-[46px]"
                onLoad={() => setBgLoading(false)}
                priority
              />
            </div>
          </div>
          <div className="mt-[15vh]">
            <SelectWrapper className="relative h-40 top-[72px]">
              <HeadSelect onLoad={() => setHeadLoading(false)} />
            </SelectWrapper>
            <SelectWrapper className="relative h-40 bottom-[82px]">
              <BodySelect onLoad={() => setBodyLoading(false)} />
            </SelectWrapper>
          </div>
        </div>
      </div>
    </main>
  );
}

const SelectWrapper: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {children}
    </div>
  );
};
