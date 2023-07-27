"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  animate,
  useMotionValue,
  AnimationSequence,
  cubicBezier,
} from "framer-motion";
import logo from "../../public/loading/logo.png";
import spaceship from "../../public/loading/spaceship.png";
import { cn } from "@/utils/cn";
import { joystix } from "@/utils/font";

type LoadingScreenProps = {
  // useState props passed from above
  setRenderPage: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingScreen: FC<LoadingScreenProps> = ({ setRenderPage }) => {
  const [imageClicked, setImageClicked] = useState(false);

  // Scroll text - opacity
  const scrollTextOpacityVal = useMotionValue(0);
  animate(scrollTextOpacityVal, 1, {
    duration: 0.5,
    delay: 1,
  });

  // Spaceship onclick
  const shipPosX = useMotionValue(0);
  const shipPosY = useMotionValue(0);
  const spaceshipOnClick = () => {
    setImageClicked(true);
    const timeout = setTimeout(() => {
      setRenderPage(true);
    }, 1300);
    animate(shipPosX, 1000, { duration: 1, ease: cubicBezier(1, 0, 1, 0.44) });
    animate(shipPosY, 800, { duration: 1, ease: cubicBezier(1, 0, 1, 0.44) });
    return () => clearTimeout(timeout);
  };

  return (
    <div className="w-screen md:pt-16">
      <div className="items-center flex flex-col w-screen">
        <motion.div className="mt-12">
          <Image
            src={logo}
            alt="uzi-logo"
            className="select-none"
            height={200}
            width={400}
          />
        </motion.div>
        <motion.div
          className="w-[390px] cursor-pointer z-30 mt-10"
          whileHover={{ scale: imageClicked ? 1.0 : 1.1 }}
          onClick={spaceshipOnClick}
          style={{
            x: shipPosX,
            y: shipPosY,
            filter: `drop-shadow(0 0 0.35rem #ff1aec)`,
          }}
        >
          <Image
            src={spaceship}
            className="select-none cursor-pointer"
            onClick={spaceshipOnClick}
            alt="uzi-spaceship"
            width={1920}
            height={1080}
          />
        </motion.div>
        <motion.div className="">
          <motion.div
            initial={{ opacity: 0 }}
            className={cn(
              "mt-6 text-center flex flex-col items-center gap-4",
              joystix.className,
            )}
            style={{
              opacity: scrollTextOpacityVal,
              filter: `drop-shadow(0 0 0.35rem white)`,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
            }}
          >
            <ArrowUp size={20} strokeWidth={3} />
            CLICK THE SHIP TO LAUNCH
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
