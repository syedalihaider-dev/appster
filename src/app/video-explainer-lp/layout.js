//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Video Explainer | Appsters",
  description: "Appsters.",
  //===== OG Tags =====
  openGraph: {
    title: 'Video Explainer | Appsters',
    description: 'Appsters.',
    url: '/video-explainer-lp',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/video-explainer-lp' },
  //===== GEO Tags =====
  other: {

  },
}

export default function RootLayout({ children }) {
  return (
    <>
      <meta name="robots" content="noindex" />
      {children}
    </>
  );
}
