"use client";
// Import Components
import Image from "next/image";
import { ThemeProvider, Input } from "@material-tailwind/react";
import Button from "@/components/button/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";
// Import Theme
import theme from "../pricingAndPackages/theme";
// Import Images
import checkCircle from "media/packages/checkCircle.png";
// Import Packages
import dataPackages from "../pricingAndPackages/data";
import CTA from "C/CTA";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const PricingAndPackages = ({ content }) => {
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
        <div className=" pb-10 md:pb-20">
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
                    <div key={i} className="bg-[#F2F2F2]">
                      <div className="bg-red text-center py-5 shadow-lg">
                        <h4 className="font-megat font-normal text-white text-xl">
                          {e.name}
                        </h4>
                      </div>
                      <p className="text-sm text-black font-normal my-5 leading-[24px] text-center">
                        {e.note}
                      </p>
                      <h5 className="font-megat text-center font-bold text-5xl text-black my-10">
                        {e.discountedPrice}
                        <sup className="opacity-50 text-4xl font-sans">
                          <del>{e.originalPrice}</del>
                        </sup>
                      </h5>
                      <div className="px-4">
                        <ul className="overflow-y-auto h-64 mb-5">
                          {e.list.map((e, i) => {
                            return (
                              <li
                                className="text-[14px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3"
                                key={i}
                              >
                                <Image
                                  src={checkCircle}
                                  alt="checkCircle"
                                  className="mt-1 brightness-0 invert-0"
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
                          bg="bg-black"
                          icon="/icons/chat.svg"
                          css="hover:bg-light-yellow"
                        />
                      </div>
                      <div className="bg-[#D9D9D9] p-5">
                        <h5 className="text-[18px] leading-tight text-black font-megat font-extrabold mb-2">
                          Let's Chat
                        </h5>
                        <p className="text-[12px] leading-[20px] text-black font-normal">
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

export default PricingAndPackages;
