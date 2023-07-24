import { notFound } from "next/navigation";
import { bodies, backgrounds, heads } from "@/consts";
import Image from "next/image";
import { cn } from "@/utils/cn";

export default async function ExportPage({
  searchParams,
}: {
  searchParams: {};
}) {
  // if not all required params are present, throw 404
  if (!("s" in searchParams)) return notFound();

  // pick the right images from param
  const background = backgrounds[parseInt((searchParams["s"] as string)[0])];
  const head = heads[parseInt((searchParams["s"] as string)[1])];
  const body = bodies[parseInt((searchParams["s"] as string)[2])];

  return (
    <div className="flex items-center justify-center mx-auto w-[390px]">
      <div
        className={cn(
          "flex flex-col items-center justify-center h-full w-[390px] py-24 px-4",
        )}
      >
        <div className="absolute">
          <Image
            src={background}
            alt="uzi-background"
            className={cn(
              "relative -z-10 select-none w-[358px] aspect-auto px-4",
            )}
            height={2160}
            width={1700}
            quality={100}
            priority
          />
        </div>
        <Image
          src={head}
          alt="uzi-head"
          className={cn(
            "relative select-none w-full aspect-auto px-12 top-[210px] z-10",
          )}
          height={2160}
          width={1700}
          quality={100}
          loading="eager"
        />
        <Image
          src={body}
          alt="uzi-body"
          className={cn(
            "relative select-none w-full aspect-auto px-12 bottom-[126px]",
          )}
          height={2160}
          width={1700}
          quality={100}
          loading="eager"
        />
      </div>
    </div>
  );
}
