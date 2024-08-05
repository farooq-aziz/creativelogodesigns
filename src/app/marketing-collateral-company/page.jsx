// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/marketing-collateral/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Packages from "@/components/packages/packages";
import Script from "next/script";
import Portfolio from "@/components/services/services";

const Page = () => {
  // Array for Hero Component Props
  const hero = {
    page: "marketingCollateral",
    subtitle: "Optimum Marketing Collateral Services",
    title: "A MARKETING COLLATERAL COMPANY WARRANTS SUPERIOR ENGAGEMENT",
    desc: "We understand the critical role marketing collateral plays in promoting your brand and products. That's why our thorough strategies complement marketing collateral services including designing brochures, flyers, banners, product packaging, and more to help you communicate.",
    img: {
      src: "/marketing-collateral/hero/hero.png",
      width: "489",
      height: "642",
    },
    form: true,
  };
  // Array for Small Banner Component Props
  const smallbanner = {
    page: "marketingCollateral",
    title: "MARKETING COLLATERAL SERVICES MEET YOUR UNIQUE NEEDS",
    desc: "We pay particular attention to every element of your marketing collateral, ensuring that it aligns perfectly",
    img: {
      src: "/marketing-collateral/smallBanner.png",
      width: "431",
      height: "460",
    },
  };
  // Array for Packages Component Props
  const packages = {
    subtitle: "We Provide",
    title:
      "ECONOMICAL <span class='text-red'>MARKETING </span> COLLATERAL SERVICES",
    desc: "Dedicated to uplifting your brand through appealing and effective marketing collateral.",
    key: 3,
    name: "Marketing Collateral",
  };
  // Array for Letstalk Component Props
  const letstalk = {
    title: "Let’s Talk",
    desc: "Connect with us and let our professional copywriters help you to achieve your business goals without facing any hassles.",
  };
  // Array for Portfolio Component Props
  const portfolio = {
    title: "WITNESS WHAT WE HAVE TO OFFER!",
    desc: "Check out our impeccable history with our customers from the past. Be assured that when it comes to marketing collateral, we prioritize quality above everything else.",
    tabs: [
      {
        value: "all",
        label: "All",
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
  // Array for Reviews Component Props
  const reviews = [
    {
      message:
        "As a startup founder, I was looking for a comprehensive branding solution. Creative Logo Designs exceeded my expectations. Their team provided exceptional logo design that perfectly captured our vision. The website design was sleek, user-friendly, and optimized for our target audience. What stood out was their illustration design, offering a unique visual language that aligned with our brand's identity.”",
      name: "Leona Greene",
      jd: false,
      profile: "/ecommerce/reviews/1.png",
    },
    {
      message:
        "I recently hired Creative Logo Designs for a complete rebranding of my business, and I couldn't be happier with the results. Their team of designers is incredibly talented and attentive to detail. They started with crafting a unique and eye-catching logo that perfectly captures the essence of my business. The logo design process was collaborative, and they were open to my ideas and feedback every step of the way.",
      name: "Candice Newman",
      jd: false,
      profile: "/ecommerce/reviews/2.png",
    },
    {
      message:
        "Working with Creative Logo Designs has been an absolute delight. They are masters of their craft, offering a wide range of design and branding services that have taken our business to the next level. The logo they designed for us perfectly encapsulates our brand's values and personality. It's clean, memorable, and versatile.",
      name: "Lora Poole",
      jd: false,
      profile: "/ecommerce/reviews/3.png",
    },
    {
      message:
        "Their illustration design work added a unique and creative touch to our marketing campaigns, making our brand memorable in the minds of our customers. And their application design skills turned our app into a powerful tool for our users. Creative Logo Designs excels at creating a cohesive brand identity across all our digital platforms.",
      name: "Shawn Klein",
      jd: false,
      profile: "/ecommerce/reviews/3.png",
    },
  ];
  return (
    <>
      <main>
        <Header />
        <Hero content={hero} />
        <Services />
        <SmallBanner content={smallbanner} />
        <Portfolio content={portfolio} />
        <Letstalk content={letstalk} />
        <Packages content={packages} />
        <Reviews content={reviews} />
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
                      "@id": "https://www.creativelogodesigns.io/marketing-collateral-company"
                  },
                  "headline": "Marketing Collateral Company",
                  "description": "marketing collateral company, best marketing collateral company, leading marketing collateral company, top marketing collateral company, professional marketing collateral company, trusted marketing collateral company, marketing collateral services, collateral marketing, marketing collateral",
                  "image": "https://www.creativelogodesigns.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8080cd64.png&w=640&q=75",
                  "author": {
                      "@type": "Organization",
                      "name": "marketing collateral company, best marketing collateral company, leading marketing collateral company, top marketing collateral company, professional marketing collateral company, trusted marketing collateral company, marketing collateral services, collateral marketing, marketing collateral",
                      "url": "https://www.creativelogodesigns.io/"
                  },
                  "publisher": {
                      "@type": "Organization",
                      "name": "marketing collateral company, best marketing collateral company, leading marketing collateral company, top marketing collateral company, professional marketing collateral company, trusted marketing collateral company, marketing collateral services, collateral marketing, marketing collateral",
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
