"use client";

import React, { useState, FC, ReactNode, Suspense } from "react";
import { HeadSelect, BodySelect } from "@/components";
import { cn } from "@/utils/cn";
import { BackgroundSelect } from "@/components/BackgroundSelect";
import { LoadingScreen } from "@/components/LoadingScreen";

const getLoadingValue = (...arg: boolean[]): boolean => {
  return arg.some((value) => value);
};

export default function Home() {
  const [headLoading, setHeadLoading] = useState(false);
  const [bodyLoading, setBodyLoading] = useState(false);

  const [bgIndex, setBgIndex] = useState(0);

  return (
    <>
      <LoadingScreen />
      <main className="flex min-h-screen flex-col items-center justify-between md:p-24 py-24">
        <div className="flex flex-col items-center justify-center h-full">
          {getLoadingValue(headLoading, bodyLoading) && <div>Loading...</div>}
          <Suspense fallback={<div>Suspense</div>}>
            <div
              className={cn(
                "flex flex-col items-center justify-center h-full",
                getLoadingValue(headLoading, bodyLoading) && "hidden",
              )}
            >
              <BackgroundSelect />
              <div className="mt-[15vh]">
                <SelectWrapper className="relative h-40 top-[80px]">
                  <HeadSelect onLoad={() => setHeadLoading(false)} />
                </SelectWrapper>
                <SelectWrapper className="relative h-40 bottom-[82px]">
                  <BodySelect onLoad={() => setBodyLoading(false)} />
                </SelectWrapper>
              </div>
            </div>
          </Suspense>
        </div>
      </main>
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
