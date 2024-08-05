import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "./components/hero/Hero";
import Types from "./components/types/types";
import Illustrative from "./components/Illustrative/Illustrative";
import Design from "./components/design/Design";
import Comprehensive from "./components/comprehensive/Comprehensive";
import Services from "./components/portfolio/services";
import Packages from "./components/packages/packages";
import Combo from "./components/combo/combo";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";

const Page = () => {
   // Array for Hero Component Props
   const hero = {
    page: "lp-one",
    subtitle: "Enhance Your Brand With",
    title: "Our Custom Logo Designs Services",
    desc: "we don't design logos only - we transform brand identities through our creatively crafted premium logo designs.",
    img: "",
    form: true
};
  // Array for Packages Component Props
  const packages = {
    subtitle: "",
    title:
      "Our Affordable Pricing Plans",
    desc: "Tailor-made Packages To Fulfill Your Business Needs",
    key: 0,
    name: "logo-design",
  };

const services = {
  title: "See it. You Must Have Faith",
  desc: "Our logo designers offer a diverse range of premium design solutions to enhance your brand's \n visual identity. We create logos that capture your brand's unique spirit and also grab \n the attention of your target audience.",
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
      }
  ]
};
// Array for Letstalk Component Props
const letstalk = {
  title: "Design Consultation",
  desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!",
};
  return (
    <>
      <Header />
      <Hero 
        content={hero}
      />
      <Types/>
      <Illustrative/>
      <Design/>
      <Comprehensive/>
      <Services content={services} />
      <Packages content={packages} />
      <Combo/>
      <Letstalk content={letstalk}/>
      <Reviews/>
      <Weare/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Page;
