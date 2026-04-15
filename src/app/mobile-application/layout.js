//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "The Professional Mobile App Development Company - Appsters",
  description: "From iOS to Android and beyond Appsters is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions.",
  //===== OG Tags =====
  openGraph: {
    title: 'The Professional Mobile App Development Company - Appsters',
    description: 'From iOS to Android and beyond Appsters is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions.',
    url: '/mobile-application-development-services',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-application-development-services' },
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
