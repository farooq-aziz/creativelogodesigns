'use client'
// Import Page Components
import Script from "next/script"
import dynamic from 'next/dynamic'
// import Hero from "@/components/hero/hero"
const Hero = dynamic(() => import('@/components/hero/hero'))
// import Approach from "@/components/home/Services/Services"
const Approach = dynamic(() => import('@/components/home/Services/Services'))
// import SmallBanner from "@/components/smallbanner/smallbanner"
const SmallBanner = dynamic(() => import('@/components/smallbanner/smallbanner'))
// import Services from "@/components/services/services"
const Services = dynamic(() => import('@/components/services/services'))
// import Reviews from "@/components/reviews/reviews"
const Reviews = dynamic(() => import('@/components/reviews/reviews'))
// import Weare from "@/components/weare/weare"
const Weare = dynamic(() => import('@/components/weare/weare'))
// import Contact from "@/components/contact/contact"
const Contact = dynamic(() => import('@/components/contact/contact'))
// import Letstalk from "@/components/letstalk/letstalk"
const Letstalk = dynamic(() => import('@/components/letstalk/letstalk'))
// import Header from "@/components/header/header"
const Header = dynamic(() => import('@/components/header/header'))
// import Footer from "@/components/footer/footer"
const Footer = dynamic(() => import('@/components/footer/footer'))

const Page = () => {
  // Array for Hero Component Props
  const hero = {
    page: "home",
    subtitle: "Leading Logo Design Company",
    title: "CREATIVE LOGO DESIGNS FOR EVERY PURPOSE",
    desc: "Are you eager to witness what lies beyond the mundane? As a premier of custom logo design services, Creative Logo Designs believes that creativity is the ultimate competitive advantage. We create logos that not only stand out but help individuals succeed. ",
    img: {
      src: "/home/new/hero/hero.png",
      width: "508",
      height: "818",
      css: "mb-[-100px]",
    },
    form: false,
  };
  // Array for Small Banner Component Props
  const smallbanner = {
    page: "home",
    title:
      "OUR MAIN OBJECTIVE IS TO PROVIDE LOGO DESIGN SERVICES THAT SPEAK VOLUMES",
    desc: "As a leading logo design agency, we ensure our creative team is always at your service. Creative Logo Designs does not compromise your vision; we make it a priority.",
    img: {
      src: "/home/new/smallBanner.png",
      width: "430",
      height: "419",
      css: "absolute right-0 bottom-0",
    },
  };
  // Array for Services Component Props
  const services = {
    title: "FOR US, DESIGN IS NOT A LUXURY",
    desc: "We believe that great designs should be available to everyone. That’s why we are relentless in our pursuit of prodigious designs in everything we do, especially custom logo design services.",
    btnBg: "bg-[#7F6CC7]",
    btnBorder: "border-[#7F6CC7]",
    btnHover: "hover:bg-[#7F6CC7]",
    btnColor: "text-black",
    tabs: [
      {
        value: "logoDesign",
        label: "logo design",
        images: [
          "/portfolios/logo-design/combination/1.png",
          "/portfolios/logo-design/combination/2.png",
          "/portfolios/logo-design/combination/3.png",
          "/portfolios/logo-design/emblem/1.png",
          "/portfolios/logo-design/emblem/2.png",
          "/portfolios/logo-design/emblem/3.png",
          "/portfolios/logo-design/mascot/1.png",
          "/portfolios/logo-design/mascot/2.png",
          "/portfolios/logo-design/mascot/3.png",
        ],
      },
      {
        value: "websiteDesign",
        label: "website design",
        images: [
          "/portfolios/website-design/dark/1.jpg",
          "/portfolios/website-design/dark/2.jpg",
          "/portfolios/website-design/dark/3.jpg",
          "/portfolios/website-design/feminine/1.jpg",
          "/portfolios/website-design/feminine/2.jpg",
          "/portfolios/website-design/feminine/3.jpg",
          "/portfolios/website-design/light/1.jpg",
          "/portfolios/website-design/light/2.jpg",
          "/portfolios/website-design/light/3.jpg",
        ],
      },
      {
        value: "illustrationDesign",
        label: "illustration design",
        images: [
          "/portfolios/illustration-design/dark/1.png",
          "/portfolios/illustration-design/dark/2.png",
          "/portfolios/illustration-design/dark/3.png",
          "/portfolios/illustration-design/dark/4.png",
          "/portfolios/illustration-design/dark/5.png",
          "/portfolios/illustration-design/dark/6.png",
          "/portfolios/illustration-design/dark/7.png",
          "/portfolios/illustration-design/dark/8.png",
          "/portfolios/illustration-design/dark/9.png",
        ],
      },
      {
        value: "applicationDesign",
        label: "application design",
        images: [
          "/portfolios/app-design/dark/1.png",
          "/portfolios/app-design/dark/2.png",
          "/portfolios/app-design/dark/3.png",
          "/portfolios/app-design/feminine/1.png",
          "/portfolios/app-design/feminine/2.png",
          "/portfolios/app-design/feminine/3.png",
          "/portfolios/app-design/light/1.png",
          "/portfolios/app-design/light/2.png",
          "/portfolios/app-design/light/3.png",
        ],
      },
      {
        value: "branding",
        label: "Branding",
        images: [
          "/portfolios/branding/dark/1.png",
          "/portfolios/branding/dark/2.png",
          "/portfolios/branding/dark/3.png",
          "/portfolios/branding/dark/4.png",
          "/portfolios/branding/dark/5.png",
          "/portfolios/branding/dark/6.png",
          "/portfolios/branding/dark/7.png",
          "/portfolios/branding/dark/8.png",
          "/portfolios/branding/dark/9.png",
        ],
      },
    ],
  };
  // Array for Letstalk Component Props
  const letstalk = {
    title: "Design Consultation",
    desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!",
  };
  return (
    <>
      <main>
        <Header />
        <Hero content={hero} />
        <Approach />
        <SmallBanner content={smallbanner} />
        <Services content={services} />
        <Letstalk content={letstalk} />
        <Reviews />
        <Weare />
        <Contact />
        <Footer />
        <Script id="general-schema" type="application/ld+json">
          {`
              {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": "https://www.creativelogodesigns.io/"
                  },
                  "headline": "Logo Design Company",
                  "description": "logo design company, best logo design company, top logo design company, professional logo design company, logo design services, logo design agency, logo designer, creative logo designs",
                  "image": "https://www.creativelogodesigns.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8080cd64.png&w=640&q=75",
                  "author": {
                      "@type": "Organization",
                      "name": "logo design company, best logo design company, top logo design company, professional logo design company, logo design services, logo design agency, logo designer, creative logo designs",
                      "url": "https://www.creativelogodesigns.io/"
                  },
                  "publisher": {
                      "@type": "Organization",
                      "name": "logo design company, best logo design company, top logo design company, professional logo design company, logo design services, logo design agency, logo designer, creative logo designs",
                      "logo": {
                          "@type": "ImageObject",
                          "url": "https://www.creativelogodesigns.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8080cd64.png&w=640&q=75"
                      }
                  },
                  "datePublished": ""
              }
          `}
        </Script>
      </main>
    </>
  );
};

export default Page;
