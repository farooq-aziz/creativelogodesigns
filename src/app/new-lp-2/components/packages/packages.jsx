"use client";
// Import Components
import Image from "next/image";
import { ThemeProvider } from "@material-tailwind/react";
// Import Theme
import theme from "C/pricingAndPackages/theme";
// Import Images
import checkCircle from "media/packages/checkCircle.png";
import Current from "media/new-lp-2/current.png";
// Import Packages
import dataPackages from "C/pricingAndPackages/data";
import CTA from "C/CTA";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Packages = ({ content }) => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    customPaging: function (i) {
      return <div className="custom-dotpric"></div>;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ThemeProvider value={theme}>
      <section>
        <div className="bg-[#F7F7F7] -mt-24 pt-48 pb-10 md:pb-20">
          <div className="container">
            <div className="text-center mb-10">
              <span className="text-lg font-normal text-black">
                {content.subtitle}
              </span>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<h2 class="text-[20px] sm:text-[25px] xl:text-[35px] font-megat font-extrabold leading-tight text-black mb-2 lg:w-2/3 lg:m-auto">
                                ${content.title}
                            </h2>`,
                }}
              />
              <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal lg:w-2/3 lg:m-auto">
                {content.desc}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-4">
              <Slider {...settings} className="pricingnewtown">
                {dataPackages[content.key].packages.map((e, i) => {
                  return (
                    <div key={i} className="bg-[#F2F2F2] group hover:bg-black">
                      <div className="text-center border-b border-[#706E6E] py-5">
                        <h4 className="font-megat font-normal group-hover:text-white text-black text-5xl">
                          {e.discountedPrice}
                          <del className="text-3xl group-hover:text-white text-[#706E6E] inline-block -mt-4 ms-2">{e.originalPrice}</del>
                        </h4>
                      </div>
                      <p className="text-sm group-hover:text-white text-black font-normal my-5 leading-[24px] text-center">
                        {e.note}
                      </p>
                      <div className="flex items-center justify-center ps-4 pb-5">
                        <Image src={Current} alt="Icons" width={80} height={80} className="group-hover:brightness-0 group-hover:invert" />
                        <h5 className="font-megat ps-2 font-bold lg:text-xl text-base group-hover:text-white text-black">
                          {e.name}
                        </h5>
                      </div>
                      <div className="px-4">
                        <ul className="overflow-y-auto h-64 mb-5">
                          {e.list.map((e, i) => {
                            return (
                              <li
                                className="text-[14px] group-hover:text-white text-black font-normal flex items-start gap-2 leading-[24px] mb-3"
                                key={i}
                              >
                                <Image
                                  src={checkCircle}
                                  alt="checkCircle"
                                  className="mt-1 brightness-0 invert-0 group-hover:brightness-100"
                                />
                                <span>{e}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="flex items-center justify-center mb-5">
                        <CTA
                          text="Select Package"
                          href={
                            e.paymentURL == "" || e.paymentURL == undefined
                              ? "javascript:$zopim.livechat.window.show();"
                              : e.paymentURL
                          }
                          bg="bg-red"
                          rounded="rounded-none "
                          icon="/icons/chat.svg"
                          css="hover:bg-light-yellow"
                        />
                      </div>
                      <div className="group-hover:bg-black bg-[#D9D9D9] p-5">
                        <h5 className="text-[18px] leading-tight group-hover:text-white text-black font-megat font-extrabold mb-2">
                          Let's Chat
                        </h5>
                        <p className="text-[12px] leading-[20px] group-hover:text-white text-black font-normal">
                          We are looking forward to hearing from you. Let us
                          know how we can be of service.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default Packages;
