// Meta Data
export const metadata = {
    // Title & Descriptions
    title: "New LP 3 - Custom Logo Design",
    description: "Discover premium logo design services from our top logo design company. Elevate your brand with custom logos with Creative Logo Designs, a trusted logo design agency.",
    // Google Varification
    verification: {
        other: {
            "facebook-domain-verification": ['9mgotld2pcip5yvdv6yajdqx71xfvt'],
        },
    },
    // Canonical
    alternates: {
        canonical: '/new-lp-3',
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
        title: "New LP 3 - Custom Logo Design",
        description: "Discover premium logo design services from our top logo design company. Elevate your brand with custom logos with Creative Logo Designs, a trusted logo design agency.",
        images: "/logo.png",
        url: "/new-lp-3"
    },
}
export default function RootLayout({ children }) {
    return (children);
}