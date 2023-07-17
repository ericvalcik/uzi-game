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

type LoadingObject = {
  [type: string]: boolean;
};

const getLoadingValue = (loading: LoadingObject): boolean => {
  return Object.values(loading).some((value) => value);
};

const setLoadedType = (loading: LoadingObject, type: string): LoadingObject => {
  return {
    ...loading,
    [type]: false,
  };
};

export default function Home() {
  const [loading, setLoading] = useState<LoadingObject>({
    head: true,
    body: true,
  });
  const [bgIndex, setBgIndex] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <div>
          {backgrounds.map((image, i) => (
            <Image
              src={image}
              key={i}
              alt={`uzi-bg-preload-${i}`}
              className="hidden"
              height={216}
              width={170}
              priority
            />
          ))}
        </div>
        <button
          onClick={() => setBgIndex((bgIndex + 1) % bgLength)}
          className="flex items-center justify-center gap-4 text-[#ff1aec] rounded-xl border-2 border-[#ff1aec] px-4 py-2 transition-all duration-200 group hover:border-white hover:text-white"
        >
          <RefreshCw className="group-hover:rotate-180 transition-transform duration-200" />
          BACKGROUND
        </button>
        <div className="relative">
          <div className="absolute rounded-[50px] border-4 border-solid border-[#ff1aec] w-[300px] h-[300px] left-[-150px] top-[24px]">
            <Image
              src={backgrounds[bgIndex]}
              fill
              alt="uzi-background"
              className="rounded-[46px]"
            />
          </div>
        </div>
        {getLoadingValue(loading) && <div>Loading...</div>}
        <SelectWrapper className="relative h-40 top-[72px]">
          <HeadSelect
            loading={getLoadingValue(loading)}
            onLoad={() => setLoading(setLoadedType(loading, "head"))}
          />
        </SelectWrapper>
        <SelectWrapper className="relative h-40 bottom-[82px]">
          <BodySelect
            loading={getLoadingValue(loading)}
            onLoad={() => setLoading(setLoadedType(loading, "body"))}
          />
        </SelectWrapper>
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
