"use client"
import { useState } from "react";
// Imports Components
import Image from "next/image";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
// Import Images
import Telephone from "media/new-lp-2/telePhone.png"
import Chat from "media/new-lp-2/chat.png"
import Mail from "media/new-lp-2/mail.png"

const Services = ({ content }) => {
    const { title, desc, tabs, } = content;
    const [activeTab, setActiveTab] = useState(String(tabs[0].value));
    let contacts = [
        {
            icon: Telephone,
            href: "tel:(855)-666-6675",
            links: "(855) 666-6675"
        },
        {
            icon: Chat,
            href: "javascript:$zopim.livechat.window.show();",
            links: "Live Chat",
        },
        {
            icon: Mail,
            href: "mailto:info&#64;creativelogodesigns&#46;io",
            links: "Info&#64;creativelogodesigns&#46;io",
        },
    ]
    return (
        <section>
            <div className="py-[50px] md:py-[100px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-[20px] sm:text-[35px] xl:text-[55px] font-megat font-bold leading-tight text-[#27255f] mb-3"
                            dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, "<br className='hidden md:block' />") }} />
                    </div>
                    <Tabs value={activeTab} className="block">
                        <TabsHeader indicatorProps={{ className: "hidden" }} className="bg-transparent p-0 flex justify-center 2xl:gap-3  flex-wrap lg:flex-nowrap mb-10">
                            {
                                tabs.map(({ value, label }) => {
                                    return (
                                        <Tab value={value} key={value} onClick={() => setActiveTab(value)}
                                            className={`${activeTab === value ? "bg-[#ff004a] text-white" : "text-black border-[#ff004a] "} text-[12px] lg:text-[14px] font-[800] py-[9px] px-[20px] 2xl:px-[32px] rounded-[40px] mx-[5px] border hover:bg-[#ff004a] hover:text-white`}>
                                            {label}
                                        </Tab>
                                    );
                                })
                            }
                        </TabsHeader>
                        <TabsBody>
                            {tabs.map(({ value, images }) => (
                                <TabPanel key={value} value={value} className="p-0">
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-3">
                                        {images.map((e, i) => {
                                            return <div key={i}>
                                                <Image src={e} alt={i} width={217} height={217} className="block m-auto rounded-xl border border-[#cccccc38]" />
                                            </div>
                                        })}
                                    </div>
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}

export default Services;