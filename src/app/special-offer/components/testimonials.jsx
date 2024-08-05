"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
    let data = [
        {
            img: "/lp-two/avatar/1.png",
            name: "David Harvardson",
            jd: "Businessman",
            meesage: "The design should explain the purpose in one glance, and this is what we expected. Logo Sparks designer's work is worth appreciating. You guys do excellent work!"
        },
        {
            img: "/lp-two/avatar/2.png",
            name: "Sean Johnathan",
            jd: "Marketing Manager",
            meesage: "Super thankful to Logo Sparks for making super creative logos for my business. They were very professional and easy to communicate with. Got my Logos ready just in time! Super happy with their services. 10/10"
        },
        {
            img: "/lp-two/avatar/3.png",
            name: "Adams Byrant",
            jd: "Entrepreneur",
            meesage: "The support team here is very supportive and friendly. I talked to their team and they kept me up to date with whatever was cooking and didn’t say no to any of my requests. I am happy with the team. Would definitely order again"
        }
    ]
    const [active, setActive] = useState("item-1");
    return (
        <section>
            <div className="bg-[#f9f9f9] py-[50px] lg:py-[100px]">
                <div className="container">
                    <div className="flex items-center flex-wrap lg:flex-nowrap gap-y-10">
                        <div className="basis-full lg:basis-[50%]">
                            <div className="text-center">
                                <h2 className="text-[30px] sm:text-[35px] xl:text-[40px] font-megat font-extrabold leading-tight text-black mb-3">
                                    TESTIMONIALS
                                </h2>
                                <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-[#9a9a9a] font-normal lg:w-2/3 lg:m-auto">
                                    Our Customers Adore Us & Their Words Bear Witness
                                </p>
                            </div>
                        </div>
                        <div className="basis-full lg:basis-[50%] grid grid-cols-1 gap-5 h-[420px] md:h-[280px] lg:h-[320px] overflow-y-scroll">
                            {
                                data && data.map((e, i) => (
                                    <div className={`p-[30px] items shadow-lg shadow-gray-300`}
                                        key={i}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Image src={e.img} alt="avatar" width={55} height={55} className="block" />
                                            <div>
                                                <h4 className="text-[16px] leading-tight text-black font-megat font-extralight">{e.name}</h4>
                                                <p className="text-[14px] leading-tight text-[#9a9a9a] font-medium">{e.jd}</p>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <p className="text-[15px] leading-[25px] text-[#9a9a9a] font-normal text-justify">
                                                {e.meesage}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;