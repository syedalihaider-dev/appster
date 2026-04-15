//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Top Ecommerce App Development Company - Appsters",
  description: "Appsters is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.",
  //===== OG Tags =====
  openGraph: {
    title: 'Top Ecommerce App Development Company - Appsters',
    description: 'Appsters is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.',
    url: '/ecommerce-app-development',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/ecommerce-app-development' },
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
