import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dmsans",
});

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Top Mobile App Studio - Custom App Development Services",
  description: "We are a leading mobile app studio providing end-to-end development services for iOS and Android. Transform your ideas into high-performing mobile applications.",
  //===== OG Tags =====
  openGraph: {
    title: 'Top Mobile App Studio - Custom App Development Services',
    description: 'We are a leading mobile app studio providing end-to-end development services for iOS and Android. Transform your ideas into high-performing mobile applications.',
    url: '/lp/mobile-app-studio',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/lp/mobile-app-studio' },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
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
  return (
    <div className={`${montserrat.variable} ${dmSans.variable}`}>
       {children}
    </div>
  );
}
