//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Best Mobile App Development Company in USA - Appsters",
    description: "Want to develop your mobile app without much hassle and coding knowledge? Appsters is here to help you develop the best mobile app. Hire best mobile app developers!",
    //===== OG Tags =====
    openGraph: {
        title: "Best Mobile App Development Company in USA - Appsters",
        description: "Want to develop your mobile app without much hassle and coding knowledge? Appsters is here to help you develop the best mobile app. Hire best mobile app developers!",
        url: '/mobile-application-development-services',
        siteName: 'Appsters',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/mobile-application-development-services' },
    //===== No-Index =====
    robots: {
        index: true,
        follow: true,
    },
    //===== GEO Tags =====
    other: {
        "DC.title": "Best Mobile App Development Company in USA - Appsters",
        "geo.region": "US",
        "geo.placename": "Houston",
        "geo.position": "29.7372487; -95.4618603",
        "ICBM": "29.7372487; -95.4618603",
    }
}
export default function RootLayout({ children }) {
    return (children);
}