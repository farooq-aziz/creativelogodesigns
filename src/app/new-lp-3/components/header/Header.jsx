"use client"
// Imports Components
import Image from "next/image";
// Import Images
import One from "media/logo.png";
import Email from 'media/icons/lp-3/envelope-solid.svg'
import Phone from 'media/icons/lp-3/phone-flip-solid.svg'
import Chat from 'media/icons/lp-3/spritesheet.png'
import ServiceArrow from 'media/icons/lp-3/service-arrow-btn.webp'
import Link from "next/link";
import styles from '../header/header.module.css'



const Header = () => {

    return (
        <>
            <header className={`${styles.post} font-poppins absolute left-0 right-0 top-0 z-10 bg-transparent`}>
                <div className="container mx-auto lg:py-5 font-secondary">
                    <div className="flex justify-between items-center">
                        <div className="logo w-[20%]">
                            <Image alt="One" src={One} className='w-48' />
                        </div>

                        <div className="nav-items w-[60%]">
                            <div className='flex gap-8 items-center md:justify-around justify-end sm:pt-5 pt-5'>
                                <div>
                                    <a href="mailto:info&#64;creativelogodesigns&#46;io" className="flex items-center gap-2 xl:gap-4">
                                        <div className="icon">
                                            <Image src={Email} alt="EmailIcon" className="w-4 h-4" />
                                        </div>
                                        <div className="sm:block hidden email text-[12px] xl:text-[14px] font-[500]">
                                            Info&#64;creativelogodesigns&#46;io
                                        </div>
                                    </a>
                                    <Link href="tel:844-423-5302;" className="flex items-center gap-2 xl:gap-4 mt-2">
                                        <div className="icon">
                                            <Image src={Phone} alt="EmailIcon" className="w-4 h-4" />
                                        </div>
                                        <div className="sm:block hidden email text-[12px] xl:text-[14px] font-[500]">
                                            Call Us: 844-423-5302
                                        </div>
                                    </Link>
                                </div>
                                <div className="md:block hidden">
                                    <Link href="javascript:;" className="flex items-start gap-2 xl:gap-4 mt-3">
                                        <div className="icon">
                                            <Image src={Chat} alt="ChatIcon" className="inline" />
                                        </div>
                                        <div className="chat font-[500]">
                                            <span className="text-[12px] leading-none">24/7 Avalaible</span>
                                            <span className="text-[16px] xl:text-[18px] font-[700] block leading-none">LIVE CHAT</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="lg:block hidden">
                                    <Link className="bg-red w-[200px] xl:w-[232px] h-[46px] text-[12px] rounded-[50px] flex justify-between items-center shadow-lg shadow-[#00000017] leading-[46px] text-white pl-[14px] hover:bg-gradient-to-r from-[#fd0043] to-[#721e72] btn_hover" href='javascript:$zopim.livechat.window.show();'>
                                        <span>Let’s Get Started</span>
                                        <span>
                                            <Image src={ServiceArrow} alt="arrow-icon" className="pr-[6px] ml-[30px] inline" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;