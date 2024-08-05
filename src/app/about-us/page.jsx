// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/about-us/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Page = () => {
  // Array for Hero Component Props
  const hero = {
    page: "single",
    subtitle: "Welcome to Creative Logo Designs",
    title: "A PARAGON OF LOGO DESIGN SERVICES",
    desc: "With new businesses emerging daily, it’s important to ensure that your brand stands out from the competition. To add that zestful flavor of distinction, we at Creative Logo Designs firmly believe that you and your brand deserve only the best.",
    img: {
      src: "/about-us/hero/hero.png",
      width: "453",
      height: "678",
    },
    form: true,
  };
  // Array for Small Banner Component Props
  const smallbanner = {
    page: "home",
    title:
      "OUR MAIN OBJECTIVE IS TO PROVIDE LOGO DESIGN SERVICES THAT SPEAK VOLUMES",
    desc: "As a leading logo design agency, we ensure our creative team is always at your service. Creative Logo Designs does not compromise your vision; we make it a priority.",
    img: {
      src: "/home/smallBanner.png",
      width: "430",
      height: "419",
      css: "absolute right-0 bottom-0",
    },
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
        <Reviews />
        <Weare />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Page;
