import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/utils/cn";
import { joystix } from "@/utils/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Make Ur Uzi",
  description: "A crazy app for the web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer
          className={cn(
            "fixed bottom-5 right-5 flex gap-1 text-[10px]",
            joystix.className,
          )}
        >
          made by
          <a
            href={"instagram://user?username=kidondrej"}
            style={{ filter: `drop-shadow(0 0 0.4rem white)` }}
          >
            @kidondrej
          </a>
          and
          <a
            href={"instagram://user?username=erixvalcik"}
            style={{ filter: `drop-shadow(0 0 0.4rem white)` }}
          >
            @erixvalcik
          </a>
        </footer>
      </body>
    </html>
  );
}
