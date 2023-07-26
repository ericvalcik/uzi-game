"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { BackgroundSelect } from "@/components/BackgroundSelect";
import { BodySelect, HeadSelect } from "@/components";
import React, { FC, ReactNode, useState } from "react";
import { joystix } from "@/utils/font";
import logo from "../../public/loading/logo.png";

export default function Page() {
  const [bgIndex, setBgIndex] = useState(0);
  const [headIndex, setHeadIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);

  return (
    <main className="fixed w-screen flex h-screen flex-col items-center justify-between md:p-24 py-10">
      <div className="flex flex-col items-center justify-center h-full w-[390px]">
        <div className={cn("flex flex-col items-center h-screen")}>
          <Image
            src={logo}
            alt="uzi-logo"
            className="select-none mb-6"
            height={100}
            width={200}
          />
          <BackgroundSelect index={bgIndex} setIndex={setBgIndex} />
          <div className="mt-[30px]">
            <SelectWrapper className="relative h-40 top-[103px]">
              <HeadSelect index={headIndex} setIndex={setHeadIndex} />
            </SelectWrapper>
            <SelectWrapper className="relative h-40 bottom-[58px]">
              <BodySelect index={bodyIndex} setIndex={setBodyIndex} />
            </SelectWrapper>
          </div>
          <div className="mt-[70px]">
            <Link
              href={{
                pathname: "/export",
                query: { s: `${bgIndex}${headIndex}${bodyIndex}` },
              }}
            >
              <button
                className={cn(
                  "drop-shadow-[0_0_0.35rem_#ff1aec] hover:drop-shadow-[0_0_0.35rem_white] select-none flex items-center justify-center gap-4 text-[#ff1aec] border-2 border-[#ff1aec] px-4 py-2 transition-all duration-200 group hover:border-white hover:text-white",
                  joystix.className,
                )}
              >
                CONFIRM SELECTION
              </button>
            </Link>
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
