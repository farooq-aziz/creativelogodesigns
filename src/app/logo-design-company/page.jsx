// Import Page Components
import Hero from "@/components/hero/hero";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Portfolio from "@/components/services/services";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Packages from "@/components/packages/packages";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import PopupAlert from "@/components/popup-alert/popup-alert";
import Combo from "../custom-logo-design/components/combo";

const Page = () => {
  // Array for Hero Component Props
  const hero = {
    page: "logoDesign",
    subtitle: "Custom Logo Design Services",
    title: "A CUSTOM LOGO DESIGN AGENCY FOR EVERYONE ",
    desc: "Creative Logo Designs is a leading custom logo design company specializing in idyllic logo design services. We are dedicated to creating unique and personalized logos that perfectly represent your brand's identity and values. Our team of experienced designers collaborates closely with clients to understand their vision and craft one-of-a-kind logos that leave a lasting impression.",
    img: {
      src: "/logo-design/hero/hero.png",
      width: "508",
      height: "818",
    },
    form: true,
  };
  // Array for Small Banner Component Props
  const smallbanner = {
    page: "logoDesign",
    title:
      "WE OFFER CUSTOM LOGO DESIGN SERVICES THAT SPEAK VOLUMES FOR YOUR BRAND",
    desc: "Our professional custom logo designers are driven to produce results that will resonate not only with your vision, but they will resonate with your brand’s image as well. ",
    img: {
      src: "/logo-design/smallBanner.png",
      width: "565",
      height: "428",
    },
  };
  // Array for Portfolio Component Props
  const portfolio = {
    title: "WITNESS WHAT WE HAVE TO OFFER!",
    desc: "When it comes to creativity, we like to constantly challenge ourselves to produce better results. Our custom logo designers strive to be better every single day. They exhibit designs that leave viewers speechless and wanting more.  ",
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
      },
    ],
  };
  // Array for Packages Component Props
  const packages = {
    subtitle: "Logo Design Packages",
    title:
      "Gain the Upper Hand with <span class='text-red'>Our Creative Logo</span> Designs",
    desc: "Our top logo design service packages are thoughtfully customized to match your brand's voice and budget, giving you a competitive edge in the market.",
    key: 0,
    name: "logo-design",
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
        <SmallBanner content={smallbanner} />
        <Portfolio content={portfolio} />
        <Letstalk content={letstalk} />
        <Packages content={packages} />
        <Combo />
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
                      "@id": "https://www.creativelogodesigns.io/logo-design-company"
                  },
                  "headline": "Custom Logo Design Company",
                  "description": "custom logo design company, best custom logo design company, top custom logo design company, professional custom logo design company, leading custom logo design company, custom logo design, custom logo designer, custom logo design services, custom logo design agency",
                  "image": "https://www.creativelogodesigns.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8080cd64.png&w=640&q=75",
                  "author": {
                      "@type": "Organization",
                      "name": "custom logo design company, best custom logo design company, top custom logo design company, professional custom logo design company, leading custom logo design company, custom logo design, custom logo designer, custom logo design services, custom logo design agency",
                      "url": "https://www.creativelogodesigns.io/"
                  },
                  "publisher": {
                      "@type": "Organization",
                      "name": "custom logo design company, best custom logo design company, top custom logo design company, professional custom logo design company, leading custom logo design company, custom logo design, custom logo designer, custom logo design services, custom logo design agency",
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
