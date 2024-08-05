// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/seo-services/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Packages from "@/components/packages/packages";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";

const Page = () => {
  // Array for Hero Component Props
  const hero = {
    page: "seoServices",
    subtitle: "From Optimization to Conversion",
    title: "HIRE THE BEST SEO SERVICES TO BOOST ENGAGEMENT! ",
    desc: "Creative Logo Designs is a leading SEO agency that prioritizes search engine optimization when it comes to engagement and conversion ratio. Our SEO services ensure that your brand’s website captures maximum traffic and more opportunities and converts prospects into customers.",
    img: {
      src: "/seo-services/hero/hero.png",
      width: "623",
      height: "462",
      css: "lg:mb-[150px] xl:mb-[100px]",
    },
    form: true,
  };
  // Array for Small Banner Component Props
  const smallbanner = {
    page: "ecommerce",
    title: "LEAVE NO STONE UNTURNED WITH OUR PREMIUM SEO SERVICES",
    desc: "Stop yearning for digital success when you can optimize everything and anything with our pristine SEO services.",
    img: {
      src: "/seo-services/smallBanner.png",
      width: "597",
      height: "446",
    },
  };
  // Array for Packages Component Props
  const packages = {
    subtitle: "SEO Services",
    title:
      "A BUDGET-FRIENDLY <span class='text-red'>SEO AGENCY </span> THAT GUARANTEES IMMACULATE RESULTS",
    desc: "One of our many objectives is affordability. As a leading SEO company, we want brands to prosper and garner ample success.",
    key: 5,
    name: "SEO",
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
                      "@id": "https://www.creativelogodesigns.io/seo-company"
                  },
                  "headline": "SEO Company",
                  "description": "seo company, best seo company, top seo company, leading seo company, professional seo company, seo agency, seo services, best seo services, best seo agency",
                  "image": "https://www.creativelogodesigns.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8080cd64.png&w=640&q=75",
                  "author": {
                      "@type": "Organization",
                      "name": "seo company, best seo company, top seo company, leading seo company, professional seo company, seo agency, seo services, best seo services, best seo agency",
                      "url": "https://www.creativelogodesigns.io/"
                  },
                  "publisher": {
                      "@type": "Organization",
                      "name": "seo company, best seo company, top seo company, leading seo company, professional seo company, seo agency, seo services, best seo services, best seo agency",
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
