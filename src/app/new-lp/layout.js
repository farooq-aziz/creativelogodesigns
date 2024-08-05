// Meta Data
export const metadata = {
    // Title & Descriptions
    title: "New LP - Creative Logo Designs",
    description: "Discover Creative Logo Designs's journey and ethos. Driven by innovation and expertise, we're committed to bringing you unparalleled digital solutions. Know our story.",
    // Google Varification
    verification: {
        other: {
            "facebook-domain-verification": ['9mgotld2pcip5yvdv6yajdqx71xfvt'],
        },
    },
    // Canonical
    alternates: {
        canonical: '/new-lp',
    },
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
    openGraph: {
        title: "New LP - Creative Logo Designs",
        description: "Discover Creative Logo Designs's journey and ethos. Driven by innovation and expertise, we're committed to bringing you unparalleled digital solutions. Know our story.",
        images: "/logo.png",
        url: "/new-lp"
    },
}

export default function RootLayout({ children }) {
    return (children);
}