"use client";

import React, { useState } from "react";
import Game from "@/components/Game";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Home() {
  const [renderPage, setRenderPage] = useState(false);

  if (renderPage) {
    return <Game />;
  }

  return <LoadingScreen setRengerPage={setRenderPage} />;
}
