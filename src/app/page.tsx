"use client";

import React, { FC, ReactNode } from "react";
import { HeadSelect, BodySelect } from "@/components";
import { cn } from "@/utils/cn";
import { BackgroundSelect } from "@/components/BackgroundSelect";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      {/*<LoadingScreen />*/}
      <div className={cn("flex flex-col items-center justify-center h-full")}>
        <BackgroundSelect />
        <div className="mt-[15vh]">
          <SelectWrapper className="relative h-40 top-[80px]">
            <HeadSelect />
          </SelectWrapper>
          <SelectWrapper className="relative h-40 bottom-[82px]">
            <BodySelect />
          </SelectWrapper>
        </div>
        <div className="mt-[15vh]">
          <button className="select-none flex items-center justify-center gap-4 text-[#ff1aec] rounded-xl border-2 border-[#ff1aec] px-4 py-2 transition-all duration-200 group hover:border-white hover:text-white">
            SELECT
          </button>
        </div>
      </div>
    </>
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
