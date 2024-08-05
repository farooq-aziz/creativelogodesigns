// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/illustration-design/services/services";
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
    page: "illustrationDesign",
    subtitle: "Illustration Design Services",
    title: "THE HIGHLY RECOMMENDED ILLUSTRATION DESIGN COMPANY",
    desc: "Creative Logo Designs is your premier illustration design company, staffed by a team of passionate and skilled illustration designers. We specialize in providing top-notch illustration design services that cater to your unique needs and preferences. Our dedicated professionals are here to help.",
    img: {
      src: "/illustration-design/hero/hero.png",
      width: "638",
      height: "707",
    },
    form: true,
  };
  // Array for Small Banner Component Props
  const smallbanner = {
    page: "ecommerce",
    title:
      "OUR ILLUSTRATION DESIGNERS TAKE YOU ON AN UNIMAGINABLE AND WONDROUS CREATIVE JOURNEY.",
    desc: "Whether you need illustrations for branding, marketing materials, books, or any other creative project, our illustration design services fulfill your specific requirements.",
    img: {
      src: "/illustration-design/smallBanner.png",
      width: "424",
      height: "480",
    },
  };
  // Array for Packages Component Props
  const packages = {
    subtitle: "The Only",
    title:
      "AFFORDABLE <span class='text-red'>ILLUSTRATION </span> DESIGN COMPANY",
    desc: "Our team of skilled illustration designers is committed to offering cost-effective solutions that meet your creative needs.",
    key: 1,
    name: "Illustration Design",
  };
  // Array for Letstalk Component Props
  const letstalk = {
    title: "Design Consultation",
    desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!",
  };
  // Array for Portfolio Component Props
  const portfolio = {
    title: "WITNESS WHAT WE HAVE TO OFFER!",
    desc: "We understand the power of illustrations. That’s why we take pride in delivering high-quality, custom illustrations that leave a lasting impact.",
    tabs: [
      {
        value: "all",
        label: "All",
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
                      "@id": "https://www.creativelogodesigns.io/illustration-design-company"
                  },
                  "headline": "Illustration Design Company",
                  "description": "illustration design company, best illustration design company, top illustration design company, leading illustration design company, professional illustration design company, trusted illustration design company, illustration designers, illustration design services, hire illustration designers",
                  "image": "https://www.creativelogodesigns.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8080cd64.png&w=640&q=75",
                  "author": {
                      "@type": "Organization",
                      "name": "illustration design company, best illustration design company, top illustration design company, leading illustration design company, professional illustration design company, trusted illustration design company, illustration designers, illustration design services, hire illustration designers",
                      "url": "https://www.creativelogodesigns.io/"
                  },
                  "publisher": {
                      "@type": "Organization",
                      "name": "illustration design company, best illustration design company, top illustration design company, leading illustration design company, professional illustration design company, trusted illustration design company, illustration designers, illustration design services, hire illustration designers",
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
