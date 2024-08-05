"use client";
import Button from "@/components/Button";
// Import Packages
import data from "@/components/pricingAndPackages/data";
import { useEffect, useRef } from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

const Packages = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    register();
    const params = {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: true,
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      injectStyles: [
        `
                .swiper-pagination-bullet-active {
                    background: #dd1e4b !important;
                }
            `,
      ],
      pagination: {
        clickable: true,
      },
    };
    // Assign it to swiper element
    Object.assign(swiperRef.current, params);
    // initialize swiper
    swiperRef.current.initialize();
  }, []);
  return (
    <section>
      <div className="py-[50px] lg:py-[100px]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] text-[#2f323a] font-poppins font-bold leading-tight">
              Our Affordable <span className="text-[#dd1e4b]">Pricing</span>
              Plans
            </h2>
            <span className="block w-[10%] h-[4px] bg-[#dd1e4b] mt-3 mb-3 m-auto"></span>
            <p className="text-[14px] font-poppins xl:text-[16px] leading-[24px] xl:leading-[26px] text-[#6f6f6f] font-normal lg:w-1/2 lg:m-auto">
              We offer reasonable prices for premium design and development
              services that will boost your business value.
            </p>
          </div>
          <swiper-container ref={swiperRef} init={false}>
            {data[0].packages.map((e, i) => (
              <swiper-slide key={i} className="pb-[80px]">
                <div className="bg-white xl:w-[90%] cursor-pointer m-auto hover:bg-[#000] group py-5 rounded-lg border-[1px] border-[#b4b8bd] hover:border-[#173d6b] relative">
                  <div className="px-3">
                    <div>
                      <h4 className="text-[22px] leading-tight group-hover:text-white font-megat">
                        {e.name}
                      </h4>
                    </div>
                    <div className="my-3">
                      <span className="text-[18px] block leading-tight text-[#b4b8bd] font-poppins">
                        <del>{e.originalPrice}.00 was</del>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <h4 className="text-[22px] leading-tight text-[#dd1e4b] group-hover:text-white font-megat">
                        {e.discountedPrice}.00
                      </h4>
                      <h4 className="text-[22px] leading-tight text-[#dd1e4b] group-hover:text-white font-megat">
                        USD
                      </h4>
                    </div>
                    <div>
                      <ul className="grid grid-cols-1 gap-2 my-3 overflow-y-auto h-60">
                        {e.list &&
                          e.list.map((e, i) => (
                            <li
                              key={i}
                              className="text-black font-poppins group-hover:text-white text-[13px] xl:text-[14px] leading-[22px]"
                            >
                              - {e}.
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#b4b8bd] group-hover:border-white divide-x-[1px] grid grid-cols-2 divide-[#b4b8bd] group-hover:divide-white">
                    <div className="text-center py-3 font-poppins">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `<span class="text-[#dd1e4b] text-[14px] leading-tight block group-hover:text-white">Speak with us</span><a href="tel:8556666675" class="text-[#3c3d3e] text-[14px] leading-tight block group-hover:text-white">(855) 666-6675</a>`,
                        }}
                      />
                    </div>
                    <div className="text-center py-3 font-poppins">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `<span class="text-[#dd1e4b] text-[14px] leading-tight block group-hover:text-white">Want to discuss?</span><a href="javascript:$zopim.livechat.window.show();" class="text-[#3c3d3e] text-[14px] leading-tight block group-hover:text-white">Live Chat</a>`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-[200px] absolute bottom-[-31px] left-0 right-0 m-auto">
                    <div className="text-center py-3 font-poppins">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `<a href=${e.paymentURL == "" || e.paymentURL == undefined
                              ? "javascript:$zopim.livechat.window.show();"
                              : e.paymentURL
                            } class="text-white h-[40px] text-[14px] flex items-center justify-center rounded-[5px] group-hover:text-white bg-[#dd1e4b]">Select Package</a>`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    </section>
  );
};

export default Packages;
