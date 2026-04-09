
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "About Us - Appsters",
    description: "Learn our story, vision, mission & the dedication of our professional app development team that fulfills all your requirements.",
    //===== OG Tags =====
    openGraph: {
        title: "About Us - Appsters",
        description: "Learn our story, vision, mission & the dedication of our professional app development team that fulfills all your requirements.",
        url: '/about-us',
        siteName: 'Appsters',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/about-us' },
}


export default function RootLayout({ children }) {
    return (children)
}
