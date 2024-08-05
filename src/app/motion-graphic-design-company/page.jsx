// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/motion-graphics/services/services";
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
    page: "motionGraphics",
    subtitle: "Motion Graphics Design Services",
    title: "Leading Motion Graphics Design Company",
    desc: "Bring motion to your vision and dreams by hiring our proficient motion graphics designer to create profitable 3D animations to ensure your brand's prosperity and positive image.",
    img: {
      src: "/motion-graphics/hero/hero.png",
      width: "486",
      height: "750",
    },
    form: true,
  };
  // Array for Small Banner Component Props
  const smallbanner = {
    page: "ecommerce",
    title: "BRING ABOUT THE TRUE POWER OF MOTION GRAPHICS",
    desc: "As a leading motion graphics design company, we create animations that leave audiences wanting more. From 3D modeling to fascinating effects, we have got it all.",
    img: {
      src: "/motion-graphics/smallBanner.png",
      width: "380",
      height: "420",
    },
  };
  // Array for Packages Component Props
  const packages = {
    subtitle: "Our Prices",
    title: "ARE <span class='text-red'>WITHIN </span> YOUR MEANS ",
    desc: "We prioritize affordability and provide the best motion graphics design services that fulfill your brand’s needs.",
    key: 4,
    name: "Motion Graphics",
  };
  // Array for Letstalk Component Props
  const letstalk = {
    title: "Design Consultation",
    desc: "Discuss with us and let us design motion graphics for you without facing any hassles.",
  };
  // Array for Portfolio Component Props
  const portfolio = {
    title: "WITNESS WHAT WE HAVE TO OFFER!",
    desc: "Our vault of creativity consists of projects we have previously worked on and garnered the reputation you see today. Hire our motion graphics designer and witness the magic.",
    tabs: [
      {
        value: "2d-animation",
        label: "2D Animation",
        images: [
          "/portfolios/motion-graphics/2d-animation/1.png",
          "/portfolios/motion-graphics/2d-animation/2.png",
          "/portfolios/motion-graphics/2d-animation/3.png",
          "/portfolios/motion-graphics/2d-animation/4.png",
          "/portfolios/motion-graphics/2d-animation/5.png",
          "/portfolios/motion-graphics/2d-animation/6.png",
          "/portfolios/motion-graphics/2d-animation/7.png",
          "/portfolios/motion-graphics/2d-animation/8.png",
          "/portfolios/motion-graphics/2d-animation/9.png",
        ],
      },
      {
        value: "3d-animation",
        label: "3D Animation",
        images: [
          "/portfolios/motion-graphics/3d-animation/1.png",
          "/portfolios/motion-graphics/3d-animation/2.png",
          "/portfolios/motion-graphics/3d-animation/3.png",
          "/portfolios/motion-graphics/3d-animation/4.png",
          "/portfolios/motion-graphics/3d-animation/5.png",
          "/portfolios/motion-graphics/3d-animation/6.png",
          "/portfolios/motion-graphics/3d-animation/7.png",
          "/portfolios/motion-graphics/3d-animation/8.png",
          "/portfolios/motion-graphics/3d-animation/9.png",
        ],
      },
      {
        value: "enviornment",
        label: "Enviornment",
        images: [
          "/portfolios/motion-graphics/enviornment/1.png",
          "/portfolios/motion-graphics/enviornment/2.png",
          "/portfolios/motion-graphics/enviornment/3.png",
          "/portfolios/motion-graphics/enviornment/4.png",
          "/portfolios/motion-graphics/enviornment/5.png",
          "/portfolios/motion-graphics/enviornment/6.png",
          "/portfolios/motion-graphics/enviornment/7.png",
          "/portfolios/motion-graphics/enviornment/8.png",
          "/portfolios/motion-graphics/enviornment/9.png",
        ],
      },
      {
        value: "informative",
        label: "Informative",
        images: [
          "/portfolios/motion-graphics/informative/1.png",
          "/portfolios/motion-graphics/informative/2.png",
          "/portfolios/motion-graphics/informative/3.png",
          "/portfolios/motion-graphics/informative/4.png",
          "/portfolios/motion-graphics/informative/5.png",
          "/portfolios/motion-graphics/informative/6.png",
          "/portfolios/motion-graphics/informative/7.png",
          "/portfolios/motion-graphics/informative/8.png",
          "/portfolios/motion-graphics/informative/9.png",
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
                      "@id": "https://www.creativelogodesigns.io/motion-graphic-design-company"
                  },
                  "headline": "Motion Graphics Design Company",
                  "description": "motion graphics design company, best motion graphics design company, top motion graphics design company, leading motion graphics design company, trusted motion graphics design company, professional motion graphics design company, motion graphics designer, motion graphics design services, hire motion graphic designers",
                  "image": "https://www.creativelogodesigns.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8080cd64.png&w=640&q=75",
                  "author": {
                      "@type": "Organization",
                      "name": "motion graphics design company, best motion graphics design company, top motion graphics design company, leading motion graphics design company, trusted motion graphics design company, professional motion graphics design company, motion graphics designer, motion graphics design services, hire motion graphic designers",
                      "url": "https://www.creativelogodesigns.io/"
                  },
                  "publisher": {
                      "@type": "Organization",
                      "name": "motion graphics design company, best motion graphics design company, top motion graphics design company, leading motion graphics design company, trusted motion graphics design company, professional motion graphics design company, motion graphics designer, motion graphics design services, hire motion graphic designers",
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
