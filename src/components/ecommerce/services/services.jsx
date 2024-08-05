// Import Components
import Image from "next/image";
// Import Images
import screens from "media/ecommerce/services/shoe.png";
import CTA from "C/CTA";

const Services = () => {
  return (
    <section>
      <div className="pb-[60px] md:pb-[100px]">
        <div className="container">
          <div className="lg:w-2/3 mb-10">
            <span className="text-base font-normal text-red">
              Custom Ecommerce Solutions
            </span>
            <h2 className="text-[20px] sm:text-[25px] xl:text-[35px] font-megat font-extrabold leading-tight text-black mb-2">
              MAESTROS OF ECOMMERCE WEBSITE DESIGN
            </h2>
            <p className="text-base text-black font-normal">
              Creative Logo Designs team is equipped with one of the finest
              ecommerce website design specialists who inevitably offer
              unsurpassed custom ecommerce solutions.
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
