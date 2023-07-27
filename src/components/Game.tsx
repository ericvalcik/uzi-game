"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { BackgroundSelect } from "@/components/BackgroundSelect";
import { BodySelect, HeadSelect } from "@/components";
import React, { FC, ReactNode, useState } from "react";
import { joystix } from "@/utils/font";
import logo from "../../public/loading/logo.png";

type PageProps = {
  setRenderPage: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Page({ setRenderPage }: PageProps) {
  const [bgIndex, setBgIndex] = useState(0);
  const [headIndex, setHeadIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);

  return (
    <main className="w-screen flex h-screen flex-col items-center justify-between md:p-24 py-4">
      <div className="flex flex-col items-center justify-center h-full w-[390px]">
        <div className={cn("flex flex-col items-center h-screen")}>
          <Image
            src={logo}
            alt="uzi-logo"
            className="select-none mb-6 cursor-pointer"
            height={100}
            onClick={() => setRenderPage(false)}
            width={200}
          />
          <BackgroundSelect index={bgIndex} setIndex={setBgIndex} />
          <div className="md:mt-[30px] mt-[10px]">
            <SelectWrapper className="relative h-40 top-[103px]">
              <HeadSelect index={headIndex} setIndex={setHeadIndex} />
            </SelectWrapper>
            <SelectWrapper className="relative h-40 bottom-[58px]">
              <BodySelect index={bodyIndex} setIndex={setBodyIndex} />
            </SelectWrapper>
          </div>
          <div className="md:mt-[70px] mt-[50px]">
            <Link href={`/export/${bgIndex}${bodyIndex}${headIndex}`}>
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
