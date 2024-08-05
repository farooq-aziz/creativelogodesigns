// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/mobile-application/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import Portfolio from "@/components/services/services";

const page = () => {
  // Array for Hero Component Props
  const hero = {
    page: "mobileApplication",
    subtitle: "Mobile App Design Agency",
    title: "EXPERIENCE THE OPTIMAL MOBILE APP DESIGN SERVICES EFFORTLESSLY",
    desc: "Creative Logo Designs is a leading mobile app design company that specializes in providing exceptional mobile app design services. As a premier mobile app design agency, we take pride in our team of highly skilled and creative mobile app designers.",
    img: {
      src: "/mobile-application/hero/hero.png",
      width: "373",
      height: "700",
    },
    form: true,
  };
  // Array for Small Banner Component Props
  const smallbanner = {
    page: "mobileApplication",
    title:
      "SAY HELLO TO YOUR ONE-STOP SOLUTION FOR ALL MOBILE APP DESIGN SERVICES",
    desc: "Our team of expert mobile app designers has extensive experience in the field, ensuring that your app looks great and offers an exceptional user experience.",
    img: {
      src: "/mobile-application/smallBanner.png",
      width: "433",
      height: "480",
    },
  };
  // Array for Letstalk Component Props
  const letstalk = {
    title: "Design Consultation",
    desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!",
  };
  // Array for Portfolio Component Props
  const portfolio = {
    title: "WITNESS WHAT WE HAVE TO OFFER!",
    desc: "We work closely with our clients to create custom-designed mobile apps that align with their brand identity and objectives.",
    tabs: [
      {
        value: "dark",
        label: "Dark",
        images: [
          "/portfolios/app-design/dark/1.png",
          "/portfolios/app-design/dark/2.png",
          "/portfolios/app-design/dark/3.png",
          "/portfolios/app-design/dark/4.png",
          "/portfolios/app-design/dark/5.png",
          "/portfolios/app-design/dark/6.png",
          "/portfolios/app-design/dark/7.png",
          "/portfolios/app-design/dark/8.png",
          "/portfolios/app-design/dark/9.png",
        ],
      },
      {
        value: "feminine",
        label: "Feminine",
        images: [
          "/portfolios/app-design/feminine/1.png",
          "/portfolios/app-design/feminine/2.png",
          "/portfolios/app-design/feminine/3.png",
          "/portfolios/app-design/feminine/4.png",
          "/portfolios/app-design/feminine/5.png",
          "/portfolios/app-design/feminine/6.png",
          "/portfolios/app-design/feminine/7.png",
          "/portfolios/app-design/feminine/8.png",
          "/portfolios/app-design/feminine/9.png",
        ],
      },
      {
        value: "light",
        label: "Light",
        images: [
          "/portfolios/app-design/light/1.png",
          "/portfolios/app-design/light/2.png",
          "/portfolios/app-design/light/3.png",
          "/portfolios/app-design/light/4.png",
          "/portfolios/app-design/light/5.png",
          "/portfolios/app-design/light/6.png",
          "/portfolios/app-design/light/7.png",
          "/portfolios/app-design/light/8.png",
          "/portfolios/app-design/light/9.png",
        ],
      },
      {
        value: "masculine",
        label: "Masculine",
        images: [
          "/portfolios/app-design/masculine/1.png",
          "/portfolios/app-design/masculine/2.png",
          "/portfolios/app-design/masculine/3.png",
          "/portfolios/app-design/masculine/4.png",
          "/portfolios/app-design/masculine/5.png",
          "/portfolios/app-design/masculine/6.png",
          "/portfolios/app-design/masculine/7.png",
          "/portfolios/app-design/masculine/8.png",
          "/portfolios/app-design/masculine/9.png",
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
                      "@id": "https://www.creativelogodesigns.io/mobile-app-design-company"
                  },
                  "headline": "Mobile App Design Company",
                  "description": "mobile app design company, best mobile app design company, top mobile app design company, leading mobile app design company, professional mobile app design company, trusted mobile app design company, mobile app design agency, mobile app design services, mobile app designers",
                  "image": "https://www.creativelogodesigns.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8080cd64.png&w=640&q=75",
                  "author": {
                      "@type": "Organization",
                      "name": "mobile app design company, best mobile app design company, top mobile app design company, leading mobile app design company, professional mobile app design company, trusted mobile app design company, mobile app design agency, mobile app design services, mobile app designers",
                      "url": "https://www.creativelogodesigns.io/"
                  },
                  "publisher": {
                      "@type": "Organization",
                      "name": "mobile app design company, best mobile app design company, top mobile app design company, leading mobile app design company, professional mobile app design company, trusted mobile app design company, mobile app design agency, mobile app design services, mobile app designers",
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

export default page;
