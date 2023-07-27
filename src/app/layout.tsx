import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/utils/cn";
import { joystix } from "@/utils/font";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-[url('/stardust.png')]", inter.className)}>
        {children}
        <footer
          className={cn(
            "absolute bottom-5 right-5 flex gap-1 text-[10px]",
            joystix.className,
          )}
        >
          made by
          <Link
            href={"instagram://user?username=kidondrej"}
            style={{ filter: `drop-shadow(0 0 0.10rem white)` }}
          >
            @kidondrej
          </Link>
          and
          <Link
            href={"instagram://user?username=erics.w0rld"}
            style={{ filter: `drop-shadow(0 0 0.10rem white)` }}
          >
            @erics.w0rld
          </Link>
        </footer>
      </body>
    </html>
  );
}
