"use client";

import React, { useState } from "react";
import Game from "@/components/Game";
import { LoadingScreen } from "@/components/LoadingScreen";
import { joystix } from "@/utils/font";
import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <div
      className={cn(
        "w-screen h-screen flex flex-col items-center justify-center text-sm p-6",
        joystix.className,
      )}
      style={{
        filter: `drop-shadow(0 0 0.4rem white)`,
      }}
    >
      Come back later, maybe we will be launched by then
    </div>
  );
}
