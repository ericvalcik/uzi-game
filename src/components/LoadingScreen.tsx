"use client";

import React, { FC, useEffect } from "react";
import Image from "next/image";
import loadTop from "../../public/load-top.png";
import loadBottom from "../../public/load-bottom.png";

export const LoadingScreen: FC = () => {
  const [open, setOpen] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(open + 1);
    }, 100);
    return () => clearInterval(interval);
  }, [setOpen, open]);

  return (
    <>
      <div
        className="absolute inset-0 w-screen h-screen z-30 overflow-hidden"
        style={{ top: `-${open}px` }}
      >
        <Image
          src={loadTop}
          alt="load-top"
          sizes="100vh"
          style={{
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="absolute inset-0 w-screen h-screen z-30 overflow-hidden"
        style={{ top: `${open}px` }}
      >
        <Image
          src={loadBottom}
          alt="load-bottom"
          sizes="100vh"
          style={{
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
};
