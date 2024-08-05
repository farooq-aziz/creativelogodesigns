// Imports Components
import Image from "next/image";
import Link from "next/link";
// Import Images
import one from "media/weare/one.webp";
import two from "media/weare/two.webp";
import three from "media/weare/three.webp";
import four from "media/weare/four.webp";
import five from "media/weare/five.webp";

const Weare = () => {
  return (
    <section>
      <div className="py-10 md:py-20 ">
        <div className="container">
          <div className="flex">
            <div className="basis-full">
              <h2 className="text-xl sm:text-3xl xl:text-4xl font-megat text-black text-center font-normal leading-tight mb-3">
                CONSISTENTLY PRODUCING EXCEPTIONAL DESIGN SERVICES
              </h2>
              <p className="text-base text-black text-center font-normal mb-10 lg:mb-20">
                We deliver impeccable designs and aim to serve the best
                innovative solutions that surpass
                <br className="hidden xl:block" /> our client’s expectations.
              </p>
              <div className="flex lg:divide-x lg:divide-red mb-10 lg:mb-20 gap-5 flex-wrap lg:flex-nowrap justify-center">
                <div className="basis-[46%] md:basis-[30%] lg:basis-1/5">
                  <Image src={one} alt={one} className="block m-auto mb-3" />
                  <h3 className="text-basis md:text-lg xl:text-xl font-light font-sans text-black text-center">
                    Creative Excellence
                  </h3>
                </div>
                <div className="basis-[46%] md:basis-[30%] lg:basis-1/5">
                  <Image src={two} alt={two} className="block m-auto mb-3" />
                  <h3 className="text-basis md:text-lg xl:text-xl font-light font-sans text-black text-center">
                    Tailored Solutions
                  </h3>
                </div>
                <div className="basis-[46%] md:basis-[30%] lg:basis-1/5">
                  <Image src={three} alt={three} className="block m-auto" />
                  <h3 className="text-basis md:text-lg xl:text-xl font-light font-sans text-black text-center">
                    Interactive Design
                  </h3>
                </div>
                <div className="basis-[46%] md:basis-[30%] lg:basis-1/5 border-l-5">
                  <Image src={four} alt={four} className="block m-auto mb-3" />
                  <h3 className="text-basis md:text-lg xl:text-xl font-light font-sans text-black text-center">
                    Timely Deliveries
                  </h3>
                </div>
                <div className="basis-[46%] md:basis-[30%] lg:basis-1/5">
                  <Image src={five} alt={five} className="block m-auto mb-3" />
                  <h3 className="text-basis md:text-lg xl:text-xl font-light font-sans text-black text-center">
                    Affordable Services
                  </h3>
                </div>
              </div>
              <div className="flex border-2 rounded-2xl border-red items-center justify-evenly py-5 flex-wrap md:flex-nowrap text-center md:text-left flex-col md:flex-row gap-5">
                <div className="basis-full md:basis-[30%]">
                  <h3 className="text-lg lg:text-xl xl:text-2xl font-medium font-sans text-black">
                    No idea is too big or too small. <br className="lg:block hidden" /> Just one phone call and we <br className="lg:block hidden" />
                    will answer your call.
                  </h3>
                </div>
                <div className="basis-full md:basis-[30%]">
                  <a
                    href="tel:8556666675"
                    className="text-xl lg:text-2xl font-medium font-sans text-black"
                  >
                    Call Us (TOLL FREE) <br /> (855) 666-6675
                  </a>
                </div>
                <div className="basis-full md:basis-[30%]">
                  <a
                    href="mailto:info&#64;creativelogodesigns&#46;io"
                    className="text-xl lg:text-2xl font-medium font-sans text-black"
                  >
                    Discuss Your Ideas <br />
                    Info&#64;creativelogodesigns&#46;io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weare;
