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
  if (
    !("head" in searchParams) ||
    !("body" in searchParams) ||
    !("bg" in searchParams)
  )
    return notFound();

  // TODO check correct values in query params

  return (
    <div className={cn("flex flex-col items-center justify-center h-full")}>
      <Image
        src={`/head/${searchParams["head"]}.png`}
        alt="uzi-body"
        className={cn("select-none")}
        height={320}
        width={255}
        quality={100}
        loading="eager"
      />
    </div>
  );
}
