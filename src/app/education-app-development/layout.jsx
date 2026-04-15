
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Education App Development Company - Appsters",
  description: "Appsters is a leading education app development company with 50+ impactful EdTech apps, using modern tech to enhance learning on various platforms.",
  //===== OG Tags =====
  openGraph: {
    title: "Education App Development Company - Appsters",
    description: "Appsters is a leading education app development company with 50+ impactful EdTech apps, using modern tech to enhance learning on various platforms.",
    url: '/education-app-development',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/education-app-development' },
  //===== GEO Tags =====
  other: {
    "DC.title": "Education App Development Company - Appsters",
    "geo.region": "US",
    "geo.placename": "Houston",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": "29.7372487; -95.4618603",
  }
}


export default function RootLayout({ children }) {
  return (children)
}
