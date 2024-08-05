// Import Fonts
import { primary, integralCF, poppins } from "./configs/fonts";
import Script from 'next/script';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';


// Import Css
import "./global.css";
// Meta Data
export const metadata = {
    metadataBase: new URL('https://www.creativelogodesigns.io'),
    // Title & Descriptions
    title: "Logo Design Company Available for Hire | Creative Logo Designs",
    description: "Creative Logo Designs offers exceptional custom logo design services that help individuals catapult their brand’s image to a whole new level.",
    // Google Varification
    verification: {
        other: {
            "facebook-domain-verification": ['9mgotld2pcip5yvdv6yajdqx71xfvt'],
        },
    },
    // Canonical
    alternates: {
        canonical: '/',
    },
    other: {
        "DC.title": 'logo design company, logo design services, best logo design company, logo design agency',
        "geo.region": 'US',
        "geo.position": '39.78373;-100.445882',
        "ICBM": '39.78373, -100.445882',
    },
    openGraph: {
        title: "Logo Design Company Available for Hire | Creative Logo Designs",
        description: "Creative Logo Designs offers exceptional custom logo design services that help individuals catapult their brand’s image to a whole new level.",
        images: "/logo.png",
        url: "/"
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <meta name="google-site-verification" content="oRRvrt9HL1PkpQakQCE0ITO-MCwT2yAORGOsdwEcLEo" />
            <meta name='dmca-site-verification' content='VHcyT2lwK0ZaOXczUzAvUy9oZ3VoYVpUUEFiOXJNYndYSVR5OHlCK1pQYz01' />
            <body className={`${primary.variable} ${integralCF.variable}  ${poppins.variable}`}>
                <noscript>
                    <iframe src="https://www.facebook.com/tr?id=3404182666490229&ev=PageView&noscript=1" className="hidden">
                    </iframe>
                </noscript>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58LZ82L9" className="hidden"></iframe>
                </noscript>
                {children}
                <Script
                    id="ze-snippet"
                    src="https://static.zdassets.com/ekr/snippet.js?key=fbc0fae5-0759-4e3e-bc7f-920b1acc2d5d"
                    strategy="lazyOnload"
                >
                </Script>
                <GoogleAnalytics gaId="G-7TVYY8KVVW" />
                <GoogleAnalytics gaId="G-9T47T1JW4C" />
                <Script id="facebook-manager-snippet" strategy="lazyOnload">
                    {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '3404182666490229');
                    fbq('track', 'PageView');
                `}
                </Script>
                <GoogleTagManager gtmId="GTM-58LZ82L9" />
            </body>
        </html >
    );
}