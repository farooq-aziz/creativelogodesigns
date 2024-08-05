// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/ecommerce/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Packages from "@/components/packages/packages";
import Reviews from "@/components/reviews/reviews";
import Letstalk from "@/components/letstalk/letstalk";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Script from "next/script";
// Import Images
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Page = () => {
  // Array for Hero Component Props
  const hero = {
    page: "ecommerce",
    subtitle: "Offering Innovative Ecommerce Solutions",
    title: "REVOLUTIONIZING RETAIL SPACES WITH CUSTOM ECOMMERCE SOLUTIONS",
    desc: "As an ecommerce website design company, Creative Logo Designs aims to deliver ecommerce solutions that cater to various platforms such as Shopify, WooCommerce, Magento, and others.",
    img: {
      src: "/ecommerce/hero/hero.png",
      width: "513",
      height: "750",
    },
    form: true,
  };
  // Array for Small Banner Component Props
  const smallbanner = {
    page: "ecommerce",
    title: "THE CURATORS OF ECOMMERCE WEBSITE DESIGN",
    desc: "We not only create visually appealing ecommerce website designs, but we ensure that the finished product produces results that resonate with the brand.",
    img: {
      src: "/ecommerce/smallBanner.png",
      width: "420",
      height: "412",
    },
  };
  // Array for Packages Component Props
  const packages = {
    subtitle: "Great Prices",
    title:
      "THE MOST <span class='text-red'>AFFORDABLE </span> ECOMMERCE SOLUTIONS",
    desc: "As a leading ecommerce website design company, we offer the best results for a price that cannot be compared or found. ",
    key: 6,
    name: "E-Commerce",
  };
  // Array for Letstalk Component Props
  const letstalk = {
    title: "Design Consultation",
    desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!",
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
                      "@id": "https://www.creativelogodesigns.io/ecommerce-solutions"
                  },
                  "headline": "Custom Ecommerce Solutions",
                  "description": "custom ecommerce solutions, best custom ecommerce solutions, top custom ecommerce solutions, leading custom ecommerce solutions, professional custom ecommerce solutions, ecommerce solutions, ecommerce website design , ecommerce website design company",
                  "image": "https://www.creativelogodesigns.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8080cd64.png&w=640&q=75",
                  "author": {
                      "@type": "Organization",
                      "name": "custom ecommerce solutions, best custom ecommerce solutions, top custom ecommerce solutions, leading custom ecommerce solutions, professional custom ecommerce solutions, ecommerce solutions, ecommerce website design , ecommerce website design company",
                      "url": "https://www.creativelogodesigns.io/"
                  },
                  "publisher": {
                      "@type": "Organization",
                      "name": "custom ecommerce solutions, best custom ecommerce solutions, top custom ecommerce solutions, leading custom ecommerce solutions, professional custom ecommerce solutions, ecommerce solutions, ecommerce website design , ecommerce website design company",
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
