"use client";

import Image from "next/image";
import { cn } from "@/utils/cn";

export default async function ExportPage({
  params: { id },
}: {
  params: { id: string };
}) {
  // pick the right images from param
  const fileName = id;

  return (
    <div className="flex items-center justify-center mx-auto w-[390px]">
      <div
        className={cn(
          "flex flex-col items-center justify-center h-screen w-[390px] py-24 px-4",
        )}
      >
        <Image
          src={`/exports/${id}.png`}
          alt="export-img"
          className="border-4 border-solid border-[#ff1aec] drop-shadow-[0_0_0.35rem_#ff1aec]"
          height={478}
          width={376}
        />
      </div>
    </div>
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
