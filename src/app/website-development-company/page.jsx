// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/website-development/services/services";
import Portfolio from "@/components/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Packages from "@/components/packages/packages";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import PopupAlert from "@/components/popup-alert/popup-alert";

const Page = () => {
  // Array for Hero Component Props
  const hero = {
    page: "websiteDevelopment",
    subtitle: "Top Website Development Agency",
    title: "WEBSITE DESIGN AND DEVELOPMENT HAS NEVER BEEN THIS EFFORTLESS",
    desc: "Are you tired of seeing the same old boring websites? It’s time to hire the best website design and development company to turn your ideas into a vivid reality.",
    img: {
      src: "/website-development/hero/hero.png",
      width: "395",
      height: "805",
    },
    form: true,
  };
  // Array for Small Banner Component Props
  const smallbanner = {
    page: "websiteDevelopment",
    title:
      "OUR WEBSITE DESIGN AND DEVELOPMENT TEAM ENSURES THAT YOUR WEBSITE IS INTERACTIVE AND USER-FRIENDLY",
    desc: "As a leading website development agency, we aim to provide the best services that will eventually result in the prosperity of your brand. Ready to set course? Click away.",
    img: {
      src: "/website-development/smallBanner.png",
      width: "623",
      height: "466",
    },
  };
  // Array for Packages Component Props
  const packages = {
    subtitle: "Affordable Web Design Packages",
    title: "YOUR IDEAS AND AFFORDABILITY MATTER",
    desc: "We believe that ideas are far greater than any currency. That’s why our web development company stresses more on your vision than your pocket.",
    key: 2,
    name: "Website Development",
  };
  // Array for Letstalk Component Props
  const letstalk = {
    title: "Design Consultation",
    desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!",
  };
  // Array for Portfolio Component Props
  const portfolio = {
    title: "WITNESS WHAT WE HAVE TO OFFER!",
    desc: "We do not compromise on quality, and that’s why our website development agency leads the pack in website design and development.",
    tabs: [
      {
        value: "dark",
        label: "Dark",
        images: [
          "/portfolios/website-design/dark/1.jpg",
          "/portfolios/website-design/dark/2.jpg",
          "/portfolios/website-design/dark/3.jpg",
          "/portfolios/website-design/dark/4.jpg",
          "/portfolios/website-design/dark/5.jpg",
          "/portfolios/website-design/dark/6.jpg",
          "/portfolios/website-design/dark/7.jpg",
          "/portfolios/website-design/dark/8.jpg",
          "/portfolios/website-design/dark/9.jpg",
        ],
      },
      {
        value: "feminine",
        label: "Feminine",
        images: [
          "/portfolios/website-design/feminine/1.jpg",
          "/portfolios/website-design/feminine/2.jpg",
          "/portfolios/website-design/feminine/3.jpg",
          "/portfolios/website-design/feminine/4.jpg",
          "/portfolios/website-design/feminine/5.jpg",
          "/portfolios/website-design/feminine/6.jpg",
          "/portfolios/website-design/feminine/7.jpg",
          "/portfolios/website-design/feminine/8.jpg",
          "/portfolios/website-design/feminine/9.jpg",
        ],
      },
      {
        value: "light",
        label: "Light",
        images: [
          "/portfolios/website-design/light/1.jpg",
          "/portfolios/website-design/light/2.jpg",
          "/portfolios/website-design/light/3.jpg",
          "/portfolios/website-design/light/4.jpg",
          "/portfolios/website-design/light/5.jpg",
          "/portfolios/website-design/light/6.jpg",
          "/portfolios/website-design/light/7.jpg",
          "/portfolios/website-design/light/8.jpg",
          "/portfolios/website-design/light/9.jpg",
        ],
      },
      {
        value: "masculine",
        label: "Masculine",
        images: [
          "/portfolios/website-design/masculine/1.jpg",
          "/portfolios/website-design/masculine/2.jpg",
          "/portfolios/website-design/masculine/3.jpg",
          "/portfolios/website-design/masculine/4.jpg",
          "/portfolios/website-design/masculine/5.jpg",
          "/portfolios/website-design/masculine/6.jpg",
          "/portfolios/website-design/masculine/7.jpg",
          "/portfolios/website-design/masculine/8.jpg",
          "/portfolios/website-design/masculine/9.jpg",
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
                      "@id": "https://www.creativelogodesigns.io/website-development-company"
                  },
                  "headline": "Website Development Company",
                  "description": "website development company, best website development company, top website development company, leading website development company, professional website development company, trusted website development company, website design and development, website development agency, web development company",
                  "image": "https://www.creativelogodesigns.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8080cd64.png&w=640&q=75",
                  "author": {
                      "@type": "Organization",
                      "name": "website development company, best website development company, top website development company, leading website development company, professional website development company, trusted website development company, website design and development, website development agency, web development company",
                      "url": "https://www.creativelogodesigns.io/"
                  },
                  "publisher": {
                      "@type": "Organization",
                      "name": "website development company, best website development company, top website development company, leading website development company, professional website development company, trusted website development company, website design and development, website development agency, web development company",
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
