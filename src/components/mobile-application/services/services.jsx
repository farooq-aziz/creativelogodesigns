// Import Components
import Image from "next/image";
import Button from "@/components/button/button";
// Import Images
import screens from "media/mobile-application/services/screens.png";
import CTA from "C/CTA";

const Services = () => {
  return (
    <section>
      <div className="pb-[60px] md:pb-[100px]">
        <div className="container">
          <div className="lg:w-2/3 mb-10">
            <span className="text-base font-normal text-red">
              Mobile App Design Services
            </span>
            <h2 className="text-[20px] sm:text-[25px] xl:text-[35px] font-megat font-extrabold leading-tight text-black mb-2">
              SWIFT AND EXTENSIVE MOBILE APP DESIGN SERVICES
            </h2>
            <p className="text-base text-black font-normal">
              At Creative Logo Designs, we offer a wide range of personalized
              mobile app design services to meet our clients' unique needs and
              preferences. Our team is proficient in designing apps for various
              platforms, including iOS, Android, and cross-platform solutions.
            </p>
          </div>
          <div className="flex items-center flex-col sm:flex-row gap-3 sm:gap-5 mt-5">
            <CTA
              text="Start Live Chat"
              href="javascript:$zopim.livechat.window.show();"
              bg="bg-black"
              icon="/icons/chat.svg"
              css="hover:bg-light-yellow"
            />
            <CTA
              text="(855) 666-6675"
              href="tel:8556666675"
              bg="bg-red"
              css="hover:bg-light-yellow"
            />
          </div>
          <Image src={screens} alt="screens" className="block m-auto mt-10" />
        </div>
      </div>
    </section>
  );
};

export default Services;
