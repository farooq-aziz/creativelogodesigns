"use client"
// Import Components
import Image from "next/image";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, ThemeProvider, Input } from "@material-tailwind/react";
import Button from "@/components/button/button";
// Import Theme
import theme from "./theme";
// Import Images
import checkCircle from "media/packages/checkCircle.png";
// Import Packages
import data from "./data";
import CTA from "C/CTA";


const PricingAndPackages = () => {
    return (
        <ThemeProvider value={theme}>
            <section>
                <div className="py-10 md:py-20">
                    <div className="container">
                        <div className="text-center mb-10">
                            <span className="text-base font-normal text-black">Reasonable Prices</span>
                            <h2 className="text-[20px] sm:text-[25px] xl:text-[35px] font-megat text-black mb-2">That <span className="text-red">Fits</span> Your Budget</h2>
                            <p className="text-base text-black font-normal">Our commitment to affordability means you can have a stunning, professionally designed website that perfectly suits your budget.</p>
                        </div>
                        <Tabs value="logo">
                            <TabsHeader>
                                {data.map(({ label, value }, i) => {
                                    return <Tab key={value} value={value}>
                                        {label}
                                    </Tab>
                                })}
                            </TabsHeader>
                            <TabsBody>
                                {data.map(({ value, packages, label, paymentURL }, i) => {
                                    return <TabPanel key={value} value={value}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
                                            {packages.map(({ name, discountedPrice, originalPrice, list, note, id }, i) => {
                                                return <div key={i} className="bg-[#F2F2F2]">
                                                    <div className="bg-red text-center py-5 shadow-lg">
                                                        <h4 className="font-megat font-normal text-white text-xl">{name}</h4>
                                                    </div>
                                                    <p className="text-sm text-black font-normal my-5 leading-[24px] text-center">
                                                        {note}
                                                    </p>
                                                    <h5 className="font-megat text-center font-bold text-5xl text-black my-10">
                                                        {discountedPrice} <sup className="opacity-50 text-4xl"><del>{originalPrice}</del></sup>
                                                    </h5>
                                                    <div className="px-4">
                                                        <ul className="overflow-y-auto h-64 mb-5">
                                                            {list.map((e, i) => {
                                                                return (
                                                                    <li className="text-[14px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                                        key={i}>
                                                                        <Image src={checkCircle} alt="checkCircle" className="mt-1 brightness-0 invert-0" />
                                                                        <span>{e}</span>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                    <div className="flex items-center justify-center mb-5">
                                                        <CTA
                                                            text="Select Package"
                                                            href={(paymentURL == "" || paymentURL == undefined) ? "javascript:$zopim.livechat.window.show();" : paymentURL }
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
                                                            Let us know how we can assist you with your business goals. Let’s sort them out together
                                                        </p>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    </TabPanel>
                                })}
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
            </section>
        </ThemeProvider>
    );
}

export default PricingAndPackages;