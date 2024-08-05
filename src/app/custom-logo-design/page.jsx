// Components
import Hero from "./components/hero/hero";
import Header from "@/components/header/header";
import HeroForm from "./components/heroForm";
import HeroIcons from "./components/heroIcons";
import Portfolio from "@/components/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Packages from "@/components/packages/packages";
import Services from "./components/services";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import Combo from "./components/combo";
import PopupAlert from "@/components/popup-alert/popup-alert";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "lp-one",
        subtitle: "Enhance Your Brand With",
        title: "Our Custom Logo Designs Services",
        desc: "we don't design logos only - we transform brand identities through our creatively crafted premium logo designs.",
        img: {
            src: "/lp-one/hero/hero.png",
            width: "537",
            height: "724",
            css: "rotate-[2deg] mb-[-15px]"
        },
        form: true
    };
    // Array for Portfolio Component Props
    const portfolio = {
        title: "See it. You Must Have Faith",
        desc: "Our logo designers offer a diverse range of premium design solutions to enhance your brand's \n visual identity. We create logos that capture your brand's unique spirit and also grab \n the attention of your target audience.",
        tabs: [
            {
                value: "combination",
                label: "Combination",
                images: [
                    "/portfolios/logo-design/combination/1.png",
                    "/portfolios/logo-design/combination/2.png",
                    "/portfolios/logo-design/combination/3.png",
                    "/portfolios/logo-design/combination/4.png",
                    "/portfolios/logo-design/combination/5.png",
                    "/portfolios/logo-design/combination/6.png",
                    "/portfolios/logo-design/combination/7.png",
                    "/portfolios/logo-design/combination/8.png",
                    "/portfolios/logo-design/combination/9.png",
                ],
            },
            {
                value: "emblem",
                label: "Emblem",
                images: [
                    "/portfolios/logo-design/emblem/1.png",
                    "/portfolios/logo-design/emblem/2.png",
                    "/portfolios/logo-design/emblem/3.png",
                    "/portfolios/logo-design/emblem/4.png",
                    "/portfolios/logo-design/emblem/5.png",
                    "/portfolios/logo-design/emblem/6.png",
                    "/portfolios/logo-design/emblem/7.png",
                    "/portfolios/logo-design/emblem/8.png",
                    "/portfolios/logo-design/emblem/9.png",
                ],
            },
            {
                value: "mascot",
                label: "Mascot",
                images: [
                    "/portfolios/logo-design/mascot/1.png",
                    "/portfolios/logo-design/mascot/2.png",
                    "/portfolios/logo-design/mascot/3.png",
                    "/portfolios/logo-design/mascot/4.png",
                    "/portfolios/logo-design/mascot/5.png",
                    "/portfolios/logo-design/mascot/6.png",
                    "/portfolios/logo-design/mascot/7.png",
                    "/portfolios/logo-design/mascot/8.png",
                    "/portfolios/logo-design/mascot/9.png",
                ],
            },
            {
                value: "typography",
                label: "Typography",
                images: [
                    "/portfolios/logo-design/typography/1.png",
                    "/portfolios/logo-design/typography/2.png",
                    "/portfolios/logo-design/typography/3.png",
                    "/portfolios/logo-design/typography/4.png",
                    "/portfolios/logo-design/typography/5.png",
                    "/portfolios/logo-design/typography/6.png",
                    "/portfolios/logo-design/typography/7.png",
                    "/portfolios/logo-design/typography/8.png",
                    "/portfolios/logo-design/typography/9.png",
                ],
            }
        ]
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "lp-one",
        title: "Let us develop a responsive website to help you attract more visitors",
        desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
        img: {
            src: "/lp-one/smallBanner.png",
            width: "585",
            height: "460",
        },
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Logo Design Packages",
        title: "Gain the Upper Hand with <span class='text-red'>Our Creative Logo</span> Designs",
        desc: "Our top logo design service packages are thoughtfully customized to match your brand's voice and budget, giving you a competitive edge in the market.",
        key: 0,
        name: "logo-design"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!"
    }
    return (
        <>
            <main className="relative">
                <Header />
                <Hero content={hero} />
                <Portfolio content={portfolio} />
                <Services />
                <SmallBanner content={smallbanner} />
                <Letstalk content={letstalk} />
                <Packages content={packages} />
                <Combo />
                <Reviews />
                <Weare />
                <Contact />
                <Footer />
                {/* <Script id="general-schema" type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Creative Logo Designs",
                            "url": "https://www.creativelogodesigns.io",
                            "logo": "https://www.creativelogodesigns.io/_next/static/media/logo.0278bd76.svg",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "855 888-8399",
                                "areaServed": "US"
                            }
                        }
                    `}
                </Script> */}
            </main>
        </>
    )
}

export default Page;