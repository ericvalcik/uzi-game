"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function pushGenerationAction(ip: string, combination: string) {
  const prisma = new PrismaClient();
  console.log(headers().get("x-real-ip"));
  await prisma.generation.create({
    data: {
      ip,
      combination,
    },
  });
  redirect(`/export/${combination}`);
}
