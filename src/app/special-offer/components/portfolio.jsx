"use client"
import { useState } from "react";
// Imports Components
import Image from "next/image";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
// Import Images
import CTA from "C/CTA";

const Portfolio = () => {
    const portfolios = {
        title: "Masterworks We Have Created",
        desc: "Get a sneak peek at some of the work we have done for our clients across the Earth.",
        tabs: [
            {
                value: "combination",
                label: "Combination",
                images: [
                    "/portfolios/logo-design/combination/1.png",
                    "/portfolios/logo-design/combination/2.png",
                    "/portfolios/logo-design/combination/3.png",
                    "/portfolios/logo-design/combination/4.png",
                    "/portfolios/logo-design/combination/5.png",
                    "/portfolios/logo-design/combination/6.png",
                    "/portfolios/logo-design/combination/7.png",
                    "/portfolios/logo-design/combination/8.png",
                    "/portfolios/logo-design/combination/9.png",
                ],
            },
            {
                value: "emblem",
                label: "Emblem",
                images: [
                    "/portfolios/logo-design/emblem/1.png",
                    "/portfolios/logo-design/emblem/2.png",
                    "/portfolios/logo-design/emblem/3.png",
                    "/portfolios/logo-design/emblem/4.png",
                    "/portfolios/logo-design/emblem/5.png",
                    "/portfolios/logo-design/emblem/6.png",
                    "/portfolios/logo-design/emblem/7.png",
                    "/portfolios/logo-design/emblem/8.png",
                    "/portfolios/logo-design/emblem/9.png",
                ],
            },
            {
                value: "mascot",
                label: "Mascot",
                images: [
                    "/portfolios/logo-design/mascot/1.png",
                    "/portfolios/logo-design/mascot/2.png",
                    "/portfolios/logo-design/mascot/3.png",
                    "/portfolios/logo-design/mascot/4.png",
                    "/portfolios/logo-design/mascot/5.png",
                    "/portfolios/logo-design/mascot/6.png",
                    "/portfolios/logo-design/mascot/7.png",
                    "/portfolios/logo-design/mascot/8.png",
                    "/portfolios/logo-design/mascot/9.png",
                ],
            },
            {
                value: "typography",
                label: "Typography",
                images: [
                    "/portfolios/logo-design/typography/1.png",
                    "/portfolios/logo-design/typography/2.png",
                    "/portfolios/logo-design/typography/3.png",
                    "/portfolios/logo-design/typography/4.png",
                    "/portfolios/logo-design/typography/5.png",
                    "/portfolios/logo-design/typography/6.png",
                    "/portfolios/logo-design/typography/7.png",
                    "/portfolios/logo-design/typography/8.png",
                    "/portfolios/logo-design/typography/9.png",
                ],
            }
        ]
    };
    const [activeTab, setActiveTab] = useState(String(portfolios.tabs[0].value));
    return (
        <section>
            <div className="py-[50px] md:py-[100px] bg-[url('../../public/lp-two/packages-bg.webp')] bg-cover bg-no-repeat bg-center">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-[20px] sm:text-[25px] xl:text-[35px] font-megat font-extrabold leading-tight text-white mb-3"
                            dangerouslySetInnerHTML={{ __html: portfolios.title.replace(/\n/g, "<br className='hidden md:block' />") }} />
                        <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-white font-normal lg:w-2/3 lg:m-auto"
                            dangerouslySetInnerHTML={{ __html: portfolios.desc.replace(/\n/g, "") }} />
                    </div>
                    <Tabs value={activeTab} className="block">
                        <TabsHeader indicatorProps={{ className: "hidden" }} className="bg-transparent p-0 flex justify-center gap-3  flex-wrap md:flex-nowrap mb-10">
                            {
                                portfolios.tabs.map(({ value, label }) => {
                                    return (
                                        <Tab value={value} key={value} onClick={() => setActiveTab(value)}
                                            className={`${activeTab === value ? " border-[#ea0122] text-[#ea0122]" : "border-white text-white"}  border-b-2 font-sans font-medium text-[18px] w-max py-[0.5rem] px-[0.8rem] rounded-none capitalize`}>
                                            {label}
                                        </Tab>
                                    );
                                })
                            }
                        </TabsHeader>
                        <TabsBody>
                            {portfolios.tabs.map(({ value, images }) => (
                                <TabPanel key={value} value={value} className="p-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                                        {images.map((e, i) => {
                                            return <div key={i}>
                                                <Image src={e} alt={i} width={800} height={300} className="block m-auto border-[10px] border-light-yellow" />
                                            </div>
                                        })}
                                    </div>
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
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
                            bg="bg-[#ea0122]"
                            css="hover:bg-light-yellow"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;