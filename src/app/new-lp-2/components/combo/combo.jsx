"use client";
// Components
import {
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from "@material-tailwind/react";
import checkCircle from "media/packages/checkCircle.png";
import Graphic from "media/new-lp-2/Graphic.png";
import Image from "next/image";
import CTA from "C/CTA";
import React from "react";

const Combo = () => {
    const [active, setActive] = React.useState("one");
    let combo1A = [
        " Unlimited Original Logo Concepts",
        " 8 Dedicated Logo Designer (Industry Specific)",
        " Unlimited Revisions",
        " 5 Page Basic Website",
        " Stationery Design (Business Card, Letterhead, Envelope)",
        " 500 Business Cards ",
        " Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
        " 500 Letterheads",
        " Email Signature Design",
        " Social Media Designs (Facebook, Twitter, Instagram)",
    ];
    let combo1B = [
        " 2 Sided Flyer OR Bi-Fold Brochure Design",
        " With Grey Scale Format",
        " Free Icon Design",
        " Brand Book",
        " 24 - 48 Hours Turn Around Time",
        "MORE FEATURES",
        "100% Satisfaction",
        "100% Ownership Rights",
        "Money Back Guarantee",
        "Dedicated Account Manager",
    ];
    let combo2A = [
        " Unlimited Original Logo Concepts",
        " 8 Dedicated Logo Designer (Industry Specific)",
        " Unlimited Revisions",
        " Ecommerce Website",
        " Stationery Design (Business Card, Letterhead, Envelope)",
        " 500 Business Cards ",
        " Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
        " Upto 100 Products",
        " Email Signature Design",
        " Social Media Designs (Facebook, Twitter, Instagram)",
    ];
    let combo2B = [
        " 2 Sided Flyer OR Bi-Fold Brochure Design",
        " With Grey Scale Format",
        " Free Icon Design",
        " Brand Book",
        " 24 - 48 Hours Turn Around Time",
        "MORE FEATURES",
        "100% Satisfaction",
        "100% Ownership Rights",
        "Money Back Guarantee",
        "Dedicated Account Manager",
    ];
    return (
        <section>
            <div className="py-[50px]">
                <div className="container">
                    <Tabs value={active}>
                        <div className="flex">
                            <div className="lg:basis-[40%]"></div>
                            <div className="lg:basis-[60%] basis-[80%] mx-auto">
                                <TabsHeader indicatorProps={{ className: "hidden" }} className="lg:w-[50%] px-2 bg-[#414141] mx-auto">
                                    <Tab className={`${active === "one" ? "bg-red" : ""} text-white py-3 rounded-xl`} value="one" onClick={() => {
                                        setActive("one")
                                    }}>Infinite</Tab>
                                    <Tab className={`${active === "two" ? "bg-red" : ""} text-white py-3 rounded-xl`} value="two" onClick={() => {
                                        setActive("two")
                                    }}>Combo</Tab>
                                </TabsHeader>
                            </div>
                        </div>
                        <TabsBody>
                            <TabPanel value="one" className="flex lg:gap-0 gap-5 items-center">
                                <div className="hidden lg:block lg:basis-[35%] xl:basis-[40%]">
                                    <Image
                                        src={Graphic}
                                        alt="combo"
                                        className="block ms-auto"
                                    />
                                </div>
                                <div className="basis-full bg-black px-5 py-6 lg:basis-[65%] xl:basis-[60%]">
                                    <h2 className="text-[25px] lg:text-[40px] text-center font-megat font-extrabold leading-tight text-white mb-2">
                                        Logo <span className="text-red">INFINITY</span>
                                    </h2>
                                    <p className="text-[14px] xl:text-[16px] text-center leading-[24px] xl:leading-[26px] text-white font-normal">
                                        Crafting Excellence for Your Brand!
                                    </p>
                                    <div className="md:flex gap-3 xl:gap-5 mt-10">
                                        <ul>
                                            {combo1A &&
                                                combo1A.map((e, i) => (
                                                    <li
                                                        className="text-[14px] text-white font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                        key={i}
                                                    >
                                                        <Image
                                                            src={checkCircle}
                                                            alt="checkCircle"
                                                            className="mt-1"
                                                        />
                                                        <span>{e}</span>
                                                    </li>
                                                ))}
                                        </ul>
                                        <ul>
                                            {combo1B &&
                                                combo1B.map((e, i) => (
                                                    <li
                                                        className="text-[14px] text-white font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                        key={i}
                                                    >
                                                        <Image
                                                            src={checkCircle}
                                                            alt="checkCircle"
                                                            className="mt-1"
                                                        />
                                                        <span>{e}</span>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-center justify-center flex-col sm:flex-row gap-3 sm:gap-5 mt-5">
                                        <CTA
                                            text="Order Now"
                                            href="https://app.creativelogodesigns.io/creative/order/68"
                                            bg="bg-white"
                                            rounded="rounded-none"
                                            color="text-black"
                                            iconCss="brightness-0"
                                            icon="/icons/chat.svg"
                                            css="hover:bg-light-yellow"
                                        />
                                        <CTA
                                            text="(855) 666-6675"
                                            href="tel:8556666675"
                                            bg="bg-red"
                                            rounded="rounded-none"
                                            css="hover:bg-light-yellow"
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value="two" className="flex lg:gap-0 gap-5 items-center">
                                <div className="hidden lg:block lg:basis-[35%] xl:basis-[40%]">
                                    <Image
                                        src={Graphic}
                                        alt="combo"
                                        className="block ms-auto"
                                    />
                                </div>
                                <div className="bg-black px-5 py-6 basis-full lg:basis-[65%] xl:basis-[60%]">
                                    <h2 className="text-[25px] lg:text-[40px] text-center font-megat font-extrabold leading-tight text-white mb-2">
                                        Logo <span className="text-red">Combo</span>
                                    </h2>
                                    <p className="text-[14px] xl:text-[16px] text-center leading-[24px] xl:leading-[26px] text-white font-normal">
                                        Crafting Excellence for Your Brand!
                                    </p>
                                    <div className="md:flex gap-3 xl:gap-5 mt-10">
                                        <ul>
                                            {combo2A &&
                                                combo2A.map((e, i) => (
                                                    <li
                                                        className="text-[14px] text-white font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                        key={i}
                                                    >
                                                        <Image
                                                            src={checkCircle}
                                                            alt="checkCircle"
                                                            className="mt-1"
                                                        />
                                                        <span>{e}</span>
                                                    </li>
                                                ))}
                                        </ul>
                                        <ul>
                                            {combo2B &&
                                                combo2B.map((e, i) => (
                                                    <li
                                                        className="text-[14px] text-white font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                        key={i}
                                                    >
                                                        <Image
                                                            src={checkCircle}
                                                            alt="checkCircle"
                                                            className="mt-1"
                                                        />
                                                        <span>{e}</span>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-center justify-center flex-col sm:flex-row gap-3 sm:gap-5 mt-5">
                                        <CTA
                                            text="Order Now"
                                            href="https://app.creativelogodesigns.io/creative/order/68"
                                            bg="bg-white"
                                            rounded="rounded-none"
                                            color="text-black"
                                            iconCss="brightness-0"
                                            icon="/icons/chat.svg"
                                            css="hover:bg-light-yellow"
                                        />
                                        <CTA
                                            text="(855) 666-6675"
                                            href="tel:8556666675"
                                            bg="bg-red"
                                            rounded="rounded-none"
                                            css="hover:bg-light-yellow"
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default Combo;
