"use client";

import { cn } from "@/utils/cn";
import { BackgroundSelect } from "@/components/BackgroundSelect";
import { BodySelect, HeadSelect } from "@/components";
import React, { FC, ReactNode } from "react";

export default function Page() {
  return (
    <main className="fixed w-screen flex h-screen flex-col items-center justify-between md:p-24 py-24">
      <div className="flex flex-col items-center justify-center h-full w-[390px]">
        <div
          className={cn("flex flex-col items-center justify-center h-screen")}
        >
          <BackgroundSelect />
          <div className="mt-[15vh]">
            <SelectWrapper className="relative h-40 top-[78px]">
              <HeadSelect />
            </SelectWrapper>
            <SelectWrapper className="relative h-40 bottom-[80px]">
              <BodySelect />
            </SelectWrapper>
          </div>
          <div className="mt-[15vh]">
            <button className="select-none flex items-center justify-center gap-4 text-[#ff1aec] rounded-xl border-2 border-[#ff1aec] px-4 py-2 transition-all duration-200 group hover:border-white hover:text-white">
              SELECT
            </button>
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
