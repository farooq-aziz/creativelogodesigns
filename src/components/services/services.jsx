"use client"
import { useState } from "react";
// Imports Components
import Image from "next/image";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
// Import Images
import CTA from "C/CTA";

const Services = ({ content }) => {
    const { title, desc, tabs } = content;
    const [activeTab, setActiveTab] = useState(String(tabs[0].value));
    return (
        <section>
            <div className="py-[50px] md:py-[100px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-[20px] sm:text-[25px] xl:text-[35px] font-megat font-extrabold leading-tight text-black mb-3"
                            dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, "<br className='hidden md:block' />") }} />
                        <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal lg:w-2/3 lg:m-auto"
                            dangerouslySetInnerHTML={{ __html: desc.replace(/\n/g, "") }} />
                    </div>
                    <Tabs value={activeTab} className="block">
                        <TabsHeader indicatorProps={{ className: "hidden" }} className="bg-transparent p-0 flex justify-center gap-3  flex-wrap md:flex-nowrap mb-10">
                            {
                                tabs.map(({ value, label }) => {
                                    return (
                                        <Tab value={value} key={value} onClick={() => setActiveTab(value)}
                                            className={`${activeTab === value ? " border-red text-red" : "border-black text-black"}  border-b-2 font-sans font-medium text-[18px] w-max py-[0.5rem] px-[0.8rem] rounded-none capitalize`}>
                                            {label}
                                        </Tab>
                                    );
                                })
                            }
                        </TabsHeader>
                        <TabsBody>
                            {tabs.map(({ value, images }) => (
                                <TabPanel key={value} value={value} className="p-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                                        {images.map((e, i) => {
                                            return <div key={i}>
                                                <Image src={e} alt={i} width={800} height={300} className="block m-auto" />
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
                            bg="bg-red"
                            css="hover:bg-light-yellow"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;