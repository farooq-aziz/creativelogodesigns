"use client"
// Components
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import checkCircle from "media/packages/checkCircle.png";
import Image from "next/image";
import CTA from "C/CTA";

const Combo = () => {
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
            <div className="py-[50px] bg-[#000]">
                <div className="container">
                    <Tabs value="one">
                        <TabsHeader className="lg:w-[60%]">
                            <Tab value="one" className="font-poppins">
                                Infinite
                            </Tab>
                            <Tab value="two" className="font-poppins">
                                Combo
                            </Tab>
                        </TabsHeader>
                        <TabsBody>
                            <TabPanel value="one" className="flex gap-5 items-center">
                                <div className="basis-full lg:basis-[65%] xl:basis-[60%]">
                                    <h2 className="text-[25px] lg:text-[40px] font-poppins uppercase font-extrabold leading-tight text-white mb-2">
                                        Logo Infinite
                                    </h2>
                                    <p className="text-[14px] xl:text-[16px] leading-[24px] font-poppins xl:leading-[26px] text-white font-normal">
                                        Crafting your brand to completion!
                                    </p>
                                    <div className="md:flex gap-3 xl:gap-5 mt-10">
                                        <ul>
                                            {combo1A && combo1A.map((e, i) => (
                                                <li className="text-[13px] text-white font-normal flex items-start gap-2 font-poppins leading-[24px] mb-3"
                                                    key={i}>
                                                    <Image src={checkCircle} alt="checkCircle" className="mt-1" />
                                                    <span>{e}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul>
                                            {combo1B && combo1B.map((e, i) => (
                                                <li className="text-[13px] text-white font-normal flex items-start gap-2 font-poppins leading-[24px] mb-3"
                                                    key={i}>
                                                    <Image src={checkCircle} alt="checkCircle" className="mt-1" />
                                                    <span>{e}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-center flex-wrap sm:flex-nowrap gap-3 mt-5 relative z-10">
                                        <CTA
                                            text="Order Now"
                                            href="https://app.creativelogodesigns.io/creative/order/68"
                                            bg="bg-[#2d2d2d]"
                                            icon="/icons/chat.svg"
                                            css="hover:bg-light-yellow  font-poppins"
                                            rounded="rounded-[5px]"
                                        />
                                        <CTA
                                            text="(855) 666-6675"
                                            href="tel:8556666675"
                                            bg="bg-white"
                                            css="hover:bg-light-yellow font-poppins hover:text-white"
                                            rounded="rounded-[5px]"
                                            color="text-black"
                                        />
                                    </div>
                                </div>
                                <div className="hidden lg:block lg:basis-[35%] xl:basis-[40%]">
                                    <Image src="/lp-one/combo.png" width={617} height={701} alt="combo" />
                                </div>
                            </TabPanel>
                            <TabPanel value="two" className="flex gap-5 items-center">
                                <div className="basis-full lg:basis-[65%] xl:basis-[60%]">
                                    <h2 className="text-[25px] lg:text-[40px] font-poppins uppercase font-extrabold leading-tight text-white mb-2">
                                        Logo Combo
                                    </h2>
                                    <p className="text-[14px] xl:text-[16px] leading-[24px] font-poppins xl:leading-[26px] text-white font-normal">
                                        Crafting your brand to completion!
                                    </p>
                                    <div className="md:flex gap-3 xl:gap-5 mt-10">
                                        <ul>
                                            {combo2A && combo2A.map((e, i) => (
                                                <li className="text-[13px] text-white font-normal flex items-start gap-2 font-poppins leading-[24px] mb-3"
                                                    key={i}>
                                                    <Image src={checkCircle} alt="checkCircle" className="mt-1" />
                                                    <span>{e}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul>
                                            {combo2B && combo2B.map((e, i) => (
                                                <li className="text-[13px] text-white font-normal flex items-start gap-2 font-poppins leading-[24px] mb-3"
                                                    key={i}>
                                                    <Image src={checkCircle} alt="checkCircle" className="mt-1" />
                                                    <span>{e}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-center flex-wrap sm:flex-nowrap gap-3 mt-5 relative z-10">
                                        <CTA
                                            text="Order Now"
                                            href="https://app.creativelogodesigns.io/creative/order/69"
                                            bg="bg-[#2d2d2d]"
                                            icon="/icons/chat.svg"
                                            css="hover:bg-light-yellow  font-poppins"
                                            rounded="rounded-[5px]"
                                        />
                                        <CTA
                                            text="(855) 666-6675"
                                            href="tel:8556666675"
                                            bg="bg-white"
                                            css="hover:bg-light-yellow font-poppins hover:text-white"
                                            rounded="rounded-[5px]"
                                            color="text-black"
                                        />
                                    </div>
                                </div>
                                <div className="hidden lg:block lg:basis-[35%] xl:basis-[40%]">
                                    <Image src="/lp-one/combo2.png" width={617} height={701} alt="combo" />
                                </div>
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default Combo;