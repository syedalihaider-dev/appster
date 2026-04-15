import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ConditionalHeader from "./ConditionalHeader";
import ConditionalFooter from "./ConditionalFooter";
import AfterLoadScripts from "./AfterLoadScripts";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.appsters.io/"),
  title: "Tech Company That Provides App Solutions - Appsters",
  description:
    "As a digital tech company we offer innovative mobile app solutions to every type of business & industry. Give your business the tech overhaul it deserves today!",
  openGraph: {
    title: "Tech Company That Provides App Solutions - Appsters",
    description:
      "As a digital tech company we offer innovative mobile app solutions to every type of business & industry. Give your business the tech overhaul it deserves today!",
    url: "/",
    siteName: "Appsters",
    locale: "en_US",
    type: "website",
    images: "/public/images/icons/footerlogo.png",
  },
  alternates: { canonical: "/" },
  verification: {
    other: {
      "google-site-verification": ["Qt-497Wghx553U3hqDw6wV8NvilpVp8WK4_5W3rf_a0"],
      "dmca-site-verification": ["Z05ObW9WMWo4VTlQL0VpdEJuTzU0UT090"],
      "msvalidate.01": ["A21040CE08685574268E4A1F724E0FFD"],
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="48x48"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
        {/* ✅ Google Tag inside Head */}
        <GoogleAnalytics gaId="AW-16476280714" />
      </head>
      <body>
        <ConditionalHeader />
        {children}
        <ConditionalFooter />
        <AfterLoadScripts />
      </body>
    </html>
  );
}
