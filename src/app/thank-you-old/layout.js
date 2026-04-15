//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Thank You - Appsters",
  description: "Appsters is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.",
  //===== OG Tags =====
  openGraph: {
    title: 'Thank You - Appsters',
    description: 'Appsters is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.',
    url: '/thank-you',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/thank-you' },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}
