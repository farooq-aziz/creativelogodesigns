"use client";
// Import Components
import Image from "next/image";
import { ThemeProvider } from "@material-tailwind/react";
// Import Theme
import theme from "C/pricingAndPackages/theme";
// Import Images
import Chat from 'media/icons/lp-3/features/chat_or.png'
import Phone from 'media/icons/lp-3/phone-flip-solid.svg'
// Import Packages
import dataPackages from "C/pricingAndPackages/data";
import CTA from "../CTA/CTA";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Link from "next/link";

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
                    slidesToShow: 2,
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
        ],
    };

    return (
        <section className='bg-[#fdd252] py-[70px] px-[50px] h-full'>
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
                <div className="grid grid-cols-1 gap-x-4 gap-y-4">
                    <Slider {...settings} className="pricingnewtown">
                        {dataPackages[content.key].packages.map((e, i) => {
                            return (
                                <div key={i} className="bg-white rounded-lg">
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
                                        {/* <Image src={Current} alt="Icons" width={80} height={80} className="group-hover:brightness-0 group-hover:invert" /> */}
                                        <h5 className="font-megat ps-2 font-bold lg:text-xl text-base group-hover:text-white text-black">
                                            {e.name}
                                        </h5>
                                    </div>
                                    <div className="px-4">
                                        <ul className="overflow-y-auto h-64 mb-5">
                                            {e.list.map((e, i) => {
                                                return (
                                                    <li
                                                        className="text-[14px] group-hover:text-white text-black font-normal flex items-start gap-2 leading-[24px] mb-3 border-b border-[#eee]"
                                                        key={i}
                                                    >
                                                        {/* <Image
                                                                src={checkCircle}
                                                                alt="checkCircle"
                                                                className="mt-1 brightness-0 invert-0 group-hover:brightness-100"
                                                            /> */}
                                                        <span>{e}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className="border-t border-[#ccc] pt-5">
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
                                        <div className="flex items-center justify-center p-5 ">
                                            <Link href="javascript:;" className="flex items-center border-r border-[#ccc] pr-[10px] mr-[10px]">
                                                <div className="icon">
                                                    <Image src={Chat} alt="Live Chat" />
                                                </div>
                                                <span className="text-[#151b27] text-[14px] font-[700] ml-[11px]"> Talk To Us</span>
                                            </Link>
                                            <Link href="tel:;" className="flex items-center">
                                                <div className="icon">
                                                    <Image src={Phone} alt="Phone" width={490} height={490} className="w-[20px] h-[20px]" />
                                                </div>
                                                <span className="text-[#151b27] text-[14px] font-[700] ml-[11px]"> 844-423-5302</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Packages;
