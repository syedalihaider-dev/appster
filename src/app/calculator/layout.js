//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Calculator | Appsters",
  description: "Calculator | Appsters",
  //===== OG Tags =====
  openGraph: {
    title: 'Calculator | Appsters',
    description: 'Calculator | Appsters',
    url: '/calculator',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/calculator' },
  //===== GEO Tags =====
  other: {},
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }) {
  return (children);
}
