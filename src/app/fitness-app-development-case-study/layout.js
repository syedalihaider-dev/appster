//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Appsters",
  description: "Apps that simplify your life, one click at a time, Appsters is your go-to destination for top mobile app developers who can help you bring your ideas to life.",
  //===== OG Tags =====
  openGraph: {
    title: 'Appsters',
    description: 'Apps that simplify your life, one click at a time, Appsters is your go-to destination for top mobile app developers who can help you bring your ideas to life.',
    url: '/fitness-app-development-case-study',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/fitness-app-development-case-study' },
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
