//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Service Page | Appsters",
  description: "Appsters",
  //===== OG Tags =====
  openGraph: {
    title: 'Service Page | Appsters',
    description: 'Appsters',
    url: '/Appsters-services-page-1',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/Appsters-services-page-1' },
  //===== No-Index =====
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}
