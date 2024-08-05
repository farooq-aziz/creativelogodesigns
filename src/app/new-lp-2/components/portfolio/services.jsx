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
                </div>
            </div>
            <div className="relative z-10">
            <div className="container">
                <div className="bg-red xl:w-[95%] w-full xl:mx-auto py-10 rounded-xl text-center text-white">
                    <h3 className="xl:text-[30px] sm:text-[25px] px-4 text-[20px] leading-tight font-megat font-bold mb-4">For premium customized logo designs, get started with us</h3>
                    <div className="border-t xl:w-[95%] w-full xl:mx-auto border-b border-[#FF5453] py-3">
                        <div className="grid items-center xl:grid-cols-3 lg:grid-cols-2">
                            {
                                contacts && contacts.map((e, i) => (
                                    <div key={i} className="px-10 flex items-center gap-x-4 text-white xl:mt-0 mt-5 border-r border-[#FF5453]">
                                        <Image src={e.icon} alt="Icons" />
                                        <div dangerouslySetInnerHTML={{
                                            __html: `<a href=${e.href ?? "javascript:;"} class="block text-[20px] leading-tight font-serif font-normal">
                                            <span class="block sm:text-[20px] text-base leading-tight font-serif font-normal">${e.links}</span>
                                            </a>`
                                        }} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Services;