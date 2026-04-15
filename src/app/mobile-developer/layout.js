//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Hire A Professional Mobile App Developers",
  description: "Appsters is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.",
  //===== OG Tags =====
  openGraph: {
    title: 'Hire A Professional Mobile App Developers',
    description: 'Appsters is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.',
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
