"use client";

import Image from "next/image";
import { cn } from "@/utils/cn";
import logo from "../../../../public/loading/logo.png";
import Link from "next/link";
import { joystix } from "@/utils/font";
import React from "react";
import dynamic from "next/dynamic";

export default async function ExportPage({
  params: { id },
}: {
  params: { id: string };
}) {
  // pick the right images from param
  const fileName = id;

  return (
    <main className="fixed w-screen flex h-screen flex-col items-center justify-between md:p-24 py-4">
      <div className="flex flex-col items-center justify-center h-full w-[390px]">
        <div className={cn("flex flex-col items-center h-screen")}>
          <Link href="/">
            <Image
              src={logo}
              alt="uzi-logo"
              className="select-none mb-10"
              height={100}
              width={200}
            />
          </Link>
          <Image
            src={`/exports/${id}.png`}
            alt="export-img"
            className="border-4 border-solid border-[#ff1aec] drop-shadow-[0_0_0.35rem_#ff1aec] mb-8"
            height={432}
            width={340}
          />
          <button
            onClick={() => {
              const image = new File([`/exports/${id}.png`], fileName, {
                type: "image/png",
              });
              if (
                navigator.canShare &&
                navigator.canShare({ files: [image] })
              ) {
                navigator
                  .share({
                    files: [image],
                    title: "Uzi Export",
                    text: "The dopest uzi fosho.",
                  })
                  .then(() => console.log("Share was successful."))
                  .catch((error) => console.log("Sharing failed", error));
              } else {
                console.log(`Your system doesn't support sharing files.`);
              }
            }}
            className={cn(
              "mb-6 drop-shadow-[0_0_0.35rem_#ff1aec] hover:drop-shadow-[0_0_0.35rem_white] select-none flex items-center justify-center gap-4 text-[#ff1aec] border-2 border-[#ff1aec] px-4 py-2 transition-all duration-200 group hover:border-white hover:text-white",
              joystix.className,
            )}
          >
            SHARE
          </button>

          <a href={`/exports/${id}.png`} download={true}>
            <button
              className={cn(
                "drop-shadow-[0_0_0.35rem_#ff1aec] hover:drop-shadow-[0_0_0.35rem_white] select-none flex items-center justify-center gap-4 text-[#ff1aec] border-2 border-[#ff1aec] px-4 py-2 transition-all duration-200 group hover:border-white hover:text-white",
                joystix.className,
              )}
            >
              DOWNLOAD YOUR UZI
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}

// TODO fix
// export async function generateStaticParams(): Promise<{ id: string }[]> {
//   const params = [];
//
//   for (let i = 0; i < backgrounds.length; i++) {
//     for (let j = 0; j < heads.length; j++) {
//       for (let k = 0; k < bodies.length; k++) {
//         params.push(`${i}${j}${k}`);
//       }
//     }
//   }
//
//   return params.map((id) => ({ id }));
// }
