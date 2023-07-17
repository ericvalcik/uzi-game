"use client";

import { useState, useEffect } from "react";
import { HeadSelect, BodySelect } from "@/components";

type LoadingObject = {
  [type: string]: boolean;
};

const getLoadingValue = (loading: LoadingObject): boolean => {
  return Object.values(loading).some((value) => value);
};

const setLoadedType = (loading: LoadingObject, type: string): LoadingObject => {
  return {
    ...loading,
    [type]: false,
  };
};

export default function Home() {
  const [loading, setLoading] = useState<LoadingObject>({
    head: true,
    body: true,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center">
        {getLoadingValue(loading) && <div>Loading...</div>}
        <HeadSelect
          loading={getLoadingValue(loading)}
          onLoad={() => setLoading(setLoadedType(loading, "head"))}
        />
        <BodySelect
          loading={getLoadingValue(loading)}
          onLoad={() => setLoading(setLoadedType(loading, "body"))}
        />
      </div>
    </main>
  );
}
