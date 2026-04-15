//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "The Professional Mobile App Development Company - Appsters.",
  description: "From iOS to Android and beyond Appsters is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions.",
  //===== OG Tags =====
  openGraph: {
    title: 'The Professional Mobile App Development Company - Appsters.',
    description: 'From iOS to Android and beyond Appsters is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions.',
    url: '/mobile-application-duplicate2',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-application-duplicate2' },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (
    <>
      <meta name="robots" content="noindex" />
      {children}
    </>
  );
}
