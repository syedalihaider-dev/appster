"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const excludeChatPaths = [
  "/lp/mobile-app-studio",
  "/lp/mobile-app-studio/thank-you",
  "/lp/custom-app",
  "/lp/custom-app/thank-you",
  "/website-development-services",
  "/app-marketing",
  "/top-mobile-app-developers",
  "/lp/mobile-app-development-services",
];

export default function AfterLoadScripts() {
  const [isReady, setIsReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onLoad = () => setTimeout(() => setIsReady(true), 5000);
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    // Define replaceChat globally for "Chat Now" buttons
    window.replaceChat = () => {
      if (window.$zopim && window.$zopim.livechat && window.$zopim.livechat.window) {
        window.$zopim.livechat.window.toggle();
      } else {
        console.log("Chat widget not loaded yet.");
      }
    };

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  const isExcludeChat = excludeChatPaths.includes(pathname);

  if (isExcludeChat) return null;
  if (!isReady) return null;

  return (
    <>
      {/* Zendesk Chat Snippet from /lp/custom-app */}
      <Script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=239dfa05-01f6-4362-bfb9-4f75a7455e10"
        strategy="lazyOnload"
      />
      <Script id="zopim-init" strategy="lazyOnload">
        {`
          window.$zopim || function (a, d) {
            var b = $zopim = function (a) {
                b._.push(a)
            },
            c = b.s = a.createElement(d);
            a = a.getElementsByTagName(d)[0];
            b.set = function (a) {
                b.set._.push(a)
            };
            b._ = [];
            b.set._ = [];
            c.async = !0;
            c.setAttribute("charset", "utf-8");
            c.src = "";
            b.t = +new Date;
            c.type = "text/javascript";
            a.parentNode.insertBefore(c, a)
          }(document, "script");

          $zopim(function () {
              function a(a) {
                  1 <= a && $zopim.livechat.window.show()
              }
              $zopim.livechat.setOnUnreadMsgs(a)
          });
          
          window.setButtonURL = function() {
              $zopim.livechat.window.show();
          };

          window.toggleChat = function() {
              $zopim.livechat.window.toggle();
          };
        `}
      </Script>
    </>
  );
}
