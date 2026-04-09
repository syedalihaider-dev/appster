
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Author Page | Appsters",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "Author Page | Appsters",
        description: "",
        url: '/isabella-harris',
        siteName: 'Appsters',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/isabella-harris' },
      //===== No-Index =====
  robots: {
    index: false,
    follow: false,
}
}


export default function RootLayout({ children }) {
    return (children)
}
