import { FaAngleDoubleRight, FaAngleRight, FaComments, FaEnvelope } from "react-icons/fa";
import React from 'react'
import Image from "next/image";


import LeftImage from 'media/icons/lp-3/combo/cta-left-img.png'
import RightImage from 'media/icons/lp-3/combo/cta-right-img.png'
import Phone from 'media/icons/lp-3/phone-flip-solid.svg'
import ServiceArrow from 'media/icons/lp-3/service-arrow-btn.webp'
import Link from "next/link";

const CustomLogo = () => {
    return (
        <>
            {/* custom logo start */}

            <section className="bg-[url('../../public/icons/lp-3/combo/register_bg.jpg')] bg-cover bg-no-repeat py-[50px] relative">
                <div className="absolute left-0 top-[-107px] z-0 xl:block hidden">
                    <Image src={LeftImage} alt="Left-Image" width={306} height={356} quality={80} />
                </div>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className="text-[20px] sm:text-[25px] xl:text-[45px] font-megat font-bold text-white text-center lg:pt-[50px]">Get Custom Logo for <span className="text-[#fcc439] bg-[#ba0042] pt-[5px] pb-[7px] px-[15px]">$35</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 top-[-113px] xl:block hidden">
                    <Image src={RightImage} alt="Right-Image" quality={80} />
                </div>
            </section>

            {/* custom logo end  */}


            {/* ready work section start */}

            <section className="bg-gradient-to-t from-[#990036] to-[#E4064A] h-auto flex items-center justify-center">
                <div className="container">
                    <div className="grid grid-cols-12 items-center">
                        <div className="xl:col-span-1"></div>
                        <div className="col-span-8">
                            <div className="grid grid-cols-12 ">
                                <div className="col-span-12 sm:col-span-6 lg:col-span-4 sm:border-r border-r-[#ffffff57] py-[15px] flex items-center justify-center sm:justify-start">
                                    <Link href="javascript:;" className="flex items-center gap-3 ">
                                        <div className="icon">
                                            <Image src={Phone} alt="Phone" className="w-[20px] h-[20px] filter invert brightness-100" />
                                        </div>
                                        <div className="txt">
                                            <p className="text-white text-[14px] font-[300] font-poppins">Toll Free Number <span className="text-[18px] font-[700] block">844-423-5302</span></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-4 md:border-r lg:border-r-[#ffffff57] pl-[15px] py-[15px] flex items-center justify-center sm:justify-start">
                                    <Link href="javascript:;" className="flex items-center gap-3">
                                        <div className="icon">
                                            <FaComments className="text-white text-[20px]" />
                                        </div>
                                        <div className="txt">
                                            <p className="text-white text-[14px] font-[300] font-poppins">Talk to Us
                                                <span className="text-[18px] font-[700] block">LIVE CHAT</span></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-span-12 lg:col-span-4 pl-[15px] py-[15px] flex items-center justify-center sm:justify-start">
                                    <Link href="javascript:;" className="flex items-center gap-3">
                                        <div className="icon">
                                            <FaEnvelope className="text-white text-[20px]" />
                                        </div>
                                        <div className="txt">
                                            <p className="text-white text-[14px] font-[300] font-poppins">Email us at <br />
                                                Pro Logo Biz
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-2">
                            <Link className={`bg-white w-[200px] xl:w-[232px] h-[46px] text-[12px] xl:text-[16px] rounded-[50px] flex justify-between items-center shadow-lg shadow-[#00000017] leading-[46px] text-black pl-[14px] hover:bg-gradient-to-r from-[#fd0043] to-[#721e72] btn_hover relative z-[9999999] mx-auto ml-auto`} href='javascript:$zopim.livechat.window.show();'>
                                <span>Let’s Get Started</span>
                                <span>
                                    <Image src={ServiceArrow} alt="arrow-icon" className="pr-[6px] ml-[30px] inline " />
                                </span>
                            </Link>
                        </div>
                        <div className="xl:col-span-1"></div>
                    </div>
                </div>
            </section>

            {/* ready work section end */}
        </>
    )
}

export default CustomLogo
