
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Portfolio | Appsters",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "Portfolio | Appsters",
        description: "",
        url: '/thank-you',
        siteName: 'Appsters',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/thank-you' },
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    },
}


export default function RootLayout({ children }) {
    return (children)
}
