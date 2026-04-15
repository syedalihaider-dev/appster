//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Web3 Game Development Company - Appsters",
    description: "Appsters, a leading Web3 game development company, delivers 99% satisfaction, 85% user retention, and 12+ years of experience. Build your game today!",
    //===== OG Tags =====
    openGraph: {
        title: "Web3 Game Development Company - Appsters",
        description: "Appsters, a leading Web3 game development company, delivers 99% satisfaction, 85% user retention, and 12+ years of experience. Build your game today!",
        url: '/web3-game-development-company',
        siteName: 'Appsters',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/web3-game-development-company' },
    //===== GEO Tags =====
    other: {
        "DC.title": "Web3 Game Development Company - Appsters",
        "geo.region": "US",
        "geo.placename": "Houston",
        "geo.position": "29.7372487; -95.4618603",
        "ICBM": "29.7372487; -95.4618603",
    }

}


export default function RootLayout({ children }) {
    return (children);
}
