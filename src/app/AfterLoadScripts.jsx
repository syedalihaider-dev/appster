"use client";
import { useEffect, useState } from "react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export default function AfterLoadScripts() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const onLoad = () => setTimeout(() => setIsReady(true), 5000);
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (!isReady) return null;

  return (
    <>
      {/* ✅ Google Analytics - ONLY GA4 ID */}
      <GoogleAnalytics gaId="AW-16476280714" />
    </>
  );
}
