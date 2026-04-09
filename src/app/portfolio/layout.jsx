
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Our Extensive App Development Portfolio - Appsters",
    description: "We believe in proven success. View our successful & completed app development projects to learn about our expertise.",
    //===== OG Tags =====
    openGraph: {
        title: "Our Extensive App Development Portfolio - Appsters",
        description: "We believe in proven success. View our successful & completed app development projects to learn about our expertise.",
        url: '/portfolio',
        siteName: 'Appsters',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/portfolio' },
}


export default function RootLayout({ children }) {
    return (children)
}
