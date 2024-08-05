// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/creative-copywriting/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Packages from "@/components/packages/packages";
import Script from "next/script";

const Page = () => {
  // Array for Hero Component Props
  const hero = {
    page: "creativeCopywriting",
    subtitle: "A Creative Copywriting Company",
    title: "OUR PROFESSIONAL WORDSMITHS OFFER THE BEST COPYWRITING SERVICES",
    desc: "As a leading creative copywriting company, we strongly believe that words will always retain their power. And for that very purpose, we offer only the best creative copywriting services for our clients and their brands.",
    img: {
      src: "/creative-copywriting/hero/hero.png",
      width: "590",
      height: "672",
    },
    form: true,
  };
  // Array for Small Banner Component Props
  const smallbanner = {
    page: "creativeCopywriting",
    title: "TRANSFORM YOUR DREAMS INTO REALITIES WITH OUR COPYWRITING SERVICES",
    desc: "Don’t let your dream turn to dust. As a leading copywriting agency, we strongly believe that your brand deserves only the best, which is exactly what we aim to serve.",
    img: {
      src: "/creative-copywriting/smallBanner.png",
      width: "400",
      height: "399",
    },
  };
  // Array for Packages Component Props
  const packages = {
    subtitle: "Affordability Matters",
    title: "CREATIVITY <span class='text-red'>SHOULDN’T</span> BE RESTRICTED",
    desc: "We firmly believe that everyone deserves the best, and that’s why we have the best prices.",
    key: 9,
    name: "Creative Copy Writing",
  };
  // Array for Letstalk Component Props
  const letstalk = {
    title: "Let’s Talk.",
    desc: "Connect with us and let our professional copywriters help you to achieve your business goals without facing any hassles.",
  };
  // Array for Reviews Component Props
  const reviews = [
    {
      message:
        "As a startup founder, I was looking for a comprehensive branding solution. Creative Logo Designs exceeded my expectations. Their team provided exceptional logo design that perfectly captured our vision. The website design was sleek, user-friendly, and optimized for our target audience. What stood out was their illustration design, offering a unique visual language that aligned with our brand's identity.",
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
                  "@id": "https://www.creativelogodesigns.io/creative-copywriting-company"
                },
                "headline": "Creative Copywriting Company",
                "description": "creative copywriting company, best creative copywriting company, top creative copywriting company, leading creative copywriting company, professional creative copywriting company, copywriter, copywriting services, copywriting agency, copywriting company, creative copywriting services",
                "image": "https://www.creativelogodesigns.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8080cd64.png&w=640&q=75",  
                "author": {
                  "@type": "Organization",
                  "name": "creative copywriting company, best creative copywriting company, top creative copywriting company, leading creative copywriting company, professional creative copywriting company, copywriter, copywriting services, copywriting agency, copywriting company, creative copywriting services",
                  "url": "https://www.creativelogodesigns.io/"
                },  
                "publisher": {
                  "@type": "Organization",
                  "name": "creative copywriting company, best creative copywriting company, top creative copywriting company, leading creative copywriting company, professional creative copywriting company, copywriter, copywriting services, copywriting agency, copywriting company, creative copywriting services",
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
